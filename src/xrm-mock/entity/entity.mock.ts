import { XrmMockGenerator } from "../../xrm-mock-generator";
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { EventContextMock } from "../events/eventcontext/eventcontext.mock";
import { PostSaveEventArgumentsMock } from "../events/postsaveeventarguments.mock";
import { PostSaveEventContextMock } from "../events/postsaveeventcontext.mock";
import { SaveEventContextAsyncMock } from "../events/saveeventcontextasync.mock";

export class EntityMock implements Xrm.Entity {
    public id: string;
    public entityName: string;
    public primaryValue: string;
    public attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    public postSaveEventHandlers: Xrm.Events.PostSaveEventHandler[];
    public saveEventHandlers: (Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync)[];

    constructor(components?: IEntityComponents) {
        components = components ?? {};
        this.id = components.id || "{deadbeef-dead-beef-dead-beefdeadbeaf}";
        this.entityName = components.entityName || "contact";
        this.primaryValue = components.primaryValue || "Default Contact";
        this.attributes = components.attributes ?? new ItemCollectionMock();
        this.postSaveEventHandlers = [];
        this.saveEventHandlers = [];
    }

    public addOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void {
        this.postSaveEventHandlers.push(handler);
    }

    public addOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void {
        this.saveEventHandlers.push(handler);
    }

    public getEntityName(): string {
        return this.entityName;
    }

    public getDataXml(): string {
        throw new Error(("getDataXml not implemented"));
    }

    public getEntityReference(): Xrm.LookupValue {
        return {
            entityType: this.entityName,
            id: this.id,
            name: this.primaryValue,
        };
    }

    public getId(): string {
        return this.id;
    }

    public getIsDirty(): boolean {
        let isDirty = false;

        if (this.attributes) {
            for (let i = 0; i < this.attributes.getLength(); i++) {
                const attr = this.attributes.get(i);
                if (attr.getIsDirty()) {
                    isDirty = true;
                    break;
                }
            }
        }
        return isDirty;
    }

    public getPrimaryAttributeValue(): string {
        return this.primaryValue;
    }

    public isValid(): boolean {
        throw new Error("isValid not implemented.");
    }

    public removeOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void {
        const index: number = this.postSaveEventHandlers.indexOf(handler);

        this.postSaveEventHandlers.splice(index);
    }

    public removeOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void {
        const index: number = this.saveEventHandlers.indexOf(handler);

        this.saveEventHandlers.splice(index);
    }

    public save(saveMode?: Xrm.EntitySaveMode): void {
        const context = this.getSaveContext(saveMode);

        for (const handler of this.saveEventHandlers) {
            context.setDepth(this.saveEventHandlers.indexOf(handler));

            handler(context);
        }

        if (context.getEventArgs().isDefaultPrevented()) {
            return;
        }

        if (!(this.postSaveEventHandlers?.length > 0)) {
            return;
        }

        const postContext = this.getPostSaveContext();
        for (const handler of this.postSaveEventHandlers) {
            postContext.setDepth(this.postSaveEventHandlers.indexOf(handler));

            handler(postContext);
        }
    }

    private getSaveContext(saveMode: Xrm.EntitySaveMode): SaveEventContextAsyncMock {
        const eventContext = XrmMockGenerator.getEventContext() ?? new EventContextMock({});
        eventContext.depth = 0;
        let mode: XrmEnum.SaveMode;
        switch (saveMode) {
            case "saveandclose":
                mode = XrmEnum.SaveMode.SaveAndClose;
                break;
            case "saveandnew":
                mode =  XrmEnum.SaveMode.SaveAndNew;
                break;
            default:
                mode = typeof saveMode === "number"
                    ? saveMode
                    : XrmEnum.SaveMode.Save;
                break;
        }

        return new SaveEventContextAsyncMock({
            context: eventContext.context,
            depth: eventContext.depth,
            saveMode: mode,
            eventSource: eventContext.eventSource,
            formContext: eventContext.formContext,
            sharedVariables: eventContext.sharedVariables
        });
    }

    private getPostSaveContext(): PostSaveEventContextMock {
        const eventContext = XrmMockGenerator.getEventContext() ?? new EventContextMock({});

        return new PostSaveEventContextMock({
            context: eventContext.context,
            depth: eventContext.depth,
            eventArgs: new PostSaveEventArgumentsMock({
                entityReference: this.getEntityReference(),
                isSaveSuccess: true,
                saveErrorInfo: undefined
            }),
            eventSource: eventContext.eventSource,
            formContext: eventContext.formContext,
            sharedVariables: eventContext.sharedVariables
        });
    }
}

export interface IEntityComponents {
    id?: string;
    entityName?: string;
    primaryValue?: string;
    attributes?: ItemCollectionMock<Xrm.Attributes.Attribute>;
}
