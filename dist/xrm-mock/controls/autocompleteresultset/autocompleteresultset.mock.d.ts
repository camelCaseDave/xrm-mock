/// <reference types="xrm" />
export declare class AutoCompleteResultSetMock implements Xrm.Controls.AutoCompleteResultSet {
    results: Xrm.Controls.AutoCompleteResult[];
    commands?: Xrm.Controls.AutoCompleteCommand;
    constructor(results: Xrm.Controls.AutoCompleteResult[], commands?: Xrm.Controls.AutoCompleteCommand);
}
