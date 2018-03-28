export declare class AutoCompleteCommandMock implements Xrm.Page.AutoCompleteCommand {
    id: string;
    icon?: string;
    label: string;
    constructor(id: string, label: string, icon?: string, action?: () => void);
    action(): void;
}
