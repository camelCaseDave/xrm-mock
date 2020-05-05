import { ControlMock } from "../control/control.mock";

export class QuickFormControlMock extends ControlMock implements Xrm.Controls.QuickFormControl {
    public getControlType(): "quickform"  {
        return "quickform";
    }

    public getControl(): any {
        throw new Error("Method not implemented.");
    }

    public isLoaded(): boolean {
        throw new Error("Method not implemented.");
    }

    public refresh(): void {
        throw new Error("Method not implemented.");
    }

    public setFocus(): void {
        throw new Error("Method not implemented.");
    }

    public getDisabled(): boolean {
        throw new Error("Method not implemented.");
    }

    public setDisabled(disabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    public setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }
}
