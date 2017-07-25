/// <reference types="xrm" />
export declare class AutoCompleteResultSetMock implements Xrm.Page.AutoCompleteResultSet {
    results: Xrm.Page.AutoCompleteResult[];
    commands?: Xrm.Page.AutoCompleteCommand;
    constructor(results: Xrm.Page.AutoCompleteResult[], commands?: Xrm.Page.AutoCompleteCommand);
}
