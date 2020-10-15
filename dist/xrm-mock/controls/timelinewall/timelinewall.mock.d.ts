/// <reference types="xrm" />
import { ControlMock } from "../control/control.mock";
export declare class TimelineWallMock extends ControlMock implements Xrm.Controls.TimelineWall {
    refresh(): void;
    getDisabled(): boolean;
    setDisabled(value: boolean): void;
    setFocus(): void;
    setVisible(visible: boolean): void;
}
