export class AutoCompleteResultSetMock implements Xrm.Controls.AutoCompleteResultSet {
    public results: Xrm.Controls.AutoCompleteResult[];
    public commands?: Xrm.Controls.AutoCompleteCommand;

    constructor(results: Xrm.Controls.AutoCompleteResult[], commands?: Xrm.Controls.AutoCompleteCommand) {
        this.results = results;
        this.commands = commands;
    }
}
