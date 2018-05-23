import { AttributeMock, AttributeReturnType } from "../../attributes/attribute/attribute.mock";
import { UiKeyPressableMock } from "../../controls/uikeypressable/uikeypressable.mock";
import { IAttStandardControlComponents,
         IStandardControlComponents,
         StandardControlMock } from "../standardcontrol/standardcontrol.mock";

export class AutoLookupControlMock<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>,
                                   TAttribute extends AttributeMock<TControl, TValue>,
                                   TValue extends AttributeReturnType>
                                   extends StandardControlMock<TControl, TAttribute, TValue>
                                   implements Xrm.Page.AutoLookupControl {

    public uiKeyPressable: UiKeyPressableMock;
    /**
     * Allows for testing the value typed into the control, but not yet saved
     */
    public uncommittedText: string;

    constructor(components: IAutoLookupControlComponents<TControl, TAttribute, TValue>) {
        super(components);
        this.uncommittedText = components.uncommittedText;
        this.uiKeyPressable = new UiKeyPressableMock(components.keyPressHandlers);
    }

    public getValue(): string {
        return this.uncommittedText;
    }

    public hideAutoComplete(): void {
        throw new Error(("hide autocomplete not implemented"));
    }

    public showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void {
        throw new Error(("show autocomplete not implemented"));
    }

    public addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.addOnKeyPress(handler);
    }

    public fireOnKeyPress(): void {
        this.uiKeyPressable.fireOnKeyPress();
    }

    public removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.removeOnKeyPress(handler);
    }
}

export interface IAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>,
                                              TAttribute extends AttributeMock<TControl, TValue>,
                                              TValue extends AttributeReturnType>
                                              extends IStandardControlComponents<TControl, TAttribute, TValue>,
                                                      IAttAutoLookupControlComponents<TControl, TAttribute, TValue> {
    name: string;
}

export interface IAttAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>,
                                              TAttribute extends AttributeMock<TControl, TValue>,
                                              TValue extends AttributeReturnType>
                                              extends IAttStandardControlComponents<TControl, TAttribute, TValue> {
    keyPressHandlers?: Xrm.Page.ContextSensitiveHandler[];
    /**
     * Auto Lookup allows for getting the value that has currently been typed in,
     * but not necessarily saved to the attribute
     */
    uncommittedText?: string;
}
