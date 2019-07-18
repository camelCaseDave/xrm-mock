/// <reference types="xrm" />
export declare class AutoCompleteCommandMock implements Xrm.Controls.AutoCompleteCommand {
    id: string;
    icon?: string;
    label: string;
    constructor(id: string, label: string, icon?: string, action?: () => void);
    action(): void;
}
