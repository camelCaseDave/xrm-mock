/// <reference types="xrm" />
export default class ControlHelpers {
    static setControlsParent(controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control | Xrm.Controls.Section>, parent: Xrm.Controls.Section | Xrm.Controls.Tab): void;
}
