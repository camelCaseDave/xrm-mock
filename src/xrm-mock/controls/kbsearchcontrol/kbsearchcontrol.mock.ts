import { ControlMock } from "../control/control.mock";

export class KbSearchControlMock extends ControlMock {
    public addOnPostSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    public addOnResultOpened(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    public addOnSelection(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    public getDisabled(): boolean {
        throw new Error("Method not implemented.");
    }

    public getSearchQuery(): string {
        throw new Error("Method not implemented.");
    }

    public getSelectedResults(): any {
        throw new Error("Method not implemented.");
    }

    public getTotalResultCount(): number {
        throw new Error("Method not implemented.");
    }

    public openSearchResult(resultNumber: number, mode: string): boolean {
        throw new Error("Method not implemented.");
    }

    public removeOnPostSearch(handler: () => void): void {
        throw new Error("Method not implemented.");
    }

    public removeOnResultOpened(handler: () => void): void {
        throw new Error("Method not implemented.");
    }

    public removeOnSelection(handler: () => void): void {
        throw new Error("Method not implemented.");
    }

    public setFocus(): void {
        throw new Error("Method not implemented.");
    }

    public setSearchQuery(searchString: string): void {
        throw new Error("Method not implemented.");
    }

    public setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }

    public setDisabled(value: boolean): void {
        throw new Error("Method not implemented.");
    }
}
