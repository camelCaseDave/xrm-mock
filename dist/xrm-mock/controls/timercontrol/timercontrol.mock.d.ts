import { ControlMock } from "../control/control.mock";
export declare class TimerControlMock extends ControlMock {
    getState(): number;
    refresh(): void;
    getDisabled(): boolean;
    setDisabled(value: boolean): void;
    setFocus(): void;
    setVisible(visible: boolean): void;
}
