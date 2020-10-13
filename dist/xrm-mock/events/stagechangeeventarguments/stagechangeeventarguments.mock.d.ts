/// <reference types="xrm" />
export declare class StageChangeEventArgumentsMock implements Xrm.Events.StageChangeEventArguments {
    preventDefault(): void;
    getDirection(): Xrm.ProcessFlow.StageChangeDirection;
    getStage(): Xrm.ProcessFlow.Stage;
}
