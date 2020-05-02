import { ControlMock } from "../control/control.mock";

export class QuickFormControlMock extends ControlMock implements Xrm.Controls.QuickFormControl {
    getControlType(): "quickform"  {
        return "quickform";
    }
    getControl(): any {
        throw new Error("Method not implemented.");
    }
    isLoaded(): boolean {
        throw new Error("Method not implemented.");
    }
    refresh(): void {
        throw new Error("Method not implemented.");
    }
    setFocus(): void {
        throw new Error("Method not implemented.");
    }
    getDisabled(): boolean {
        throw new Error("Method not implemented.");
    }
    setDisabled(disabled: boolean): void {
        throw new Error("Method not implemented.");
    }
    setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }    
}
