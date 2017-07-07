export class AutoCompleteResultSetMock implements Xrm.Page.AutoCompleteResultSet {
    results: Xrm.Page.AutoCompleteResult[];
    commands?: Xrm.Page.AutoCompleteCommand;

    constructor(results: Xrm.Page.AutoCompleteResult[], commands?: Xrm.Page.AutoCompleteCommand) {
        this.results = results;
        this.commands = commands;
    }
}