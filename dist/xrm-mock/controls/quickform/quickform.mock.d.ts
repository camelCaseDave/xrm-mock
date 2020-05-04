/// <reference types="xrm" />
import { ControlMock } from "../control/control.mock";
export declare class QuickFormControlMock extends ControlMock implements Xrm.Controls.QuickFormControl {
    getControlType(): "quickform";
    getControl(): any;
    isLoaded(): boolean;
    refresh(): void;
    setFocus(): void;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setVisible(visible: boolean): void;
}
