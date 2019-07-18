import * as XrmMock from "../xrm-mock/index";

export default class Form {
  public static createBlankForm(): XrmMock.FormItemMock {
    const formItem = new XrmMock.FormItemMock({
      currentItem: true,
      formType: 1,
      id: "{00000000-0000-0000-0000-000000000000}",
      label: "",
    });

    return formItem;
  }
}
