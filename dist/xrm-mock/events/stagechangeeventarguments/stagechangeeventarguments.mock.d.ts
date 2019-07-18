/// <reference types="xrm" />
export declare class StageChangeEventArgumentsMock implements Xrm.Events.StageChangeEventArguments {
    getDirection(): Xrm.ProcessFlow.StageChangeDirection;
    getStage(): Xrm.ProcessFlow.Stage;
}
