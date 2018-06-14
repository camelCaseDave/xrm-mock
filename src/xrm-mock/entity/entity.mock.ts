import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";

export class EntityMock implements Xrm.Entity {
    public id: string;
    public entityName: string;
    public attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    public saveEventHandlers: Xrm.Events.ContextSensitiveHandler[];

    constructor(id: string, entityName: string, attributes: ItemCollectionMock<Xrm.Attributes.Attribute>) {
        this.id = id;
        this.entityName = entityName;
        this.attributes = attributes;
        this.saveEventHandlers = [];
    }

    public addOnSave(handler: Xrm.Events.ContextSensitiveHandler): void {
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
            name: "",
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
        throw new Error(("getPrimaryAttributeValue not implemented"));
    }

    public isValid(): boolean {
        throw new Error("isValid not implemented.");
    }

    public removeOnSave(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index: number = this.saveEventHandlers.indexOf(handler);

        this.saveEventHandlers.splice(index);
    }

    public save(saveMode?: Xrm.EntitySaveMode): void {
        const context = this.getSaveContext(saveMode);

        for (const handler of this.saveEventHandlers) {
            const index: number = this.saveEventHandlers.indexOf(handler);
            context.getDepth = () => index;

            handler(context);
        }
    }

    private getSaveContext(saveMode: Xrm.EntitySaveMode): Xrm.Events.SaveEventContext {
        return {
            getContext: (): Xrm.GlobalContext => {
                throw new Error("getContext not implemented.");
            },
            getDepth: null, // implemented separately for each handler
            getEventArgs: (): Xrm.Events.SaveEventArguments => {
                return this.getSaveEventArgs(saveMode);
            },
            getEventSource: (): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity => {
                throw new Error("getEventSource not implemented.");
            },
            getFormContext: (): Xrm.FormContext => {
                throw new Error("getFormContext not implemented.");
            },
            getSharedVariable: (): any => {
                throw new Error("getSharedVariable not implemented.");
            },
            setSharedVariable: (): void => {
                throw new Error("setSharedVariable not implemented.");
            },
        };
    }

    private getSaveEventArgs(saveMode): Xrm.Events.SaveEventArguments {
        return {
            getSaveMode: () => {
                let mode: XrmEnum.SaveMode;

                if (saveMode == null) {
                    mode = XrmEnum.SaveMode.Save;
                } else if (saveMode === "saveandclose") {
                    mode = XrmEnum.SaveMode.SaveAndClose;
                } else if (saveMode === "saveandnew") {
                    mode = XrmEnum.SaveMode.SaveAndNew;
                }

                return mode;
            },
            isDefaultPrevented: () => false,
            preventDefault: (): void => {
                throw new Error("preventDefault not implemented.");
            },
        };
    }
}
