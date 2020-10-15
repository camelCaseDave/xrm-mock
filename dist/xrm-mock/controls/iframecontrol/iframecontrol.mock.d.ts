/// <reference types="xrm" />
import { ControlMock } from "../control/control.mock";
export declare class IframeControlMock extends ControlMock implements Xrm.Controls.IframeControl {
    setVisible(visible: boolean): void;
    getObject(): any;
    getContentWindow(): Promise<Window>;
    getSrc(): string;
    setSrc(src: string): void;
    getInitialUrl(): string;
    getDisabled(): boolean;
    setDisabled(value: boolean): void;
    setFocus(): void;
}
