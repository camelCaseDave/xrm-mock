/// <reference types="xrm" />
import { ControlMock } from "../control/control.mock";
export declare class KbSearchControlMock extends ControlMock {
    addOnPostSearch(handler: Xrm.Events.ContextSensitiveHandler): void;
    addOnResultOpened(handler: Xrm.Events.ContextSensitiveHandler): void;
    addOnSelection(handler: Xrm.Events.ContextSensitiveHandler): void;
    getDisabled(): boolean;
    getSearchQuery(): string;
    getSelectedResults(): any;
    getTotalResultCount(): number;
    openSearchResult(resultNumber: number, mode: string): boolean;
    removeOnPostSearch(handler: () => void): void;
    removeOnResultOpened(handler: () => void): void;
    removeOnSelection(handler: () => void): void;
    setFocus(): void;
    setSearchQuery(searchString: string): void;
    setVisible(visible: boolean): void;
    setDisabled(value: boolean): void;
}
