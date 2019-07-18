/// <reference types="xrm" />
export declare class ProcessControlMock implements Xrm.Controls.ProcessControl {
    private displayState;
    private getVisibleElement;
    private setVisibleElement;
    constructor(displayState: Xrm.DisplayState, getVisibleElement: Xrm.Controls.UiCanGetVisibleElement, setVisibleElement: Xrm.Controls.UiCanSetVisibleElement);
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    setDisplayState(displayState: Xrm.DisplayState): void;
    getDisplayState(): Xrm.DisplayState;
    reflow(updateUI: boolean, parentStage: string, nextStage: string): void;
}
