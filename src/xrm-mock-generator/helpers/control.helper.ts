import * as XrmMock from "../../xrm-mock/index";

export default class ControlHelpers
{
	public static setControlsParent(controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control | Xrm.Controls.Section>,
		parent: Xrm.Controls.Section | Xrm.Controls.Tab)
	{
		controls.forEach((control: XrmMock.ControlMock | XrmMock.SectionMock) =>
		{
			control.parent = parent;
		});
	}
}
