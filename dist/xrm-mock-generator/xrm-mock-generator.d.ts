import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import Form from "./form";
import Ui from "./ui";
export declare class XrmMockGenerator {
    static Attribute: Attribute;
    static Context: Context;
    static Control: Control;
    static Form: Form;
    static Ui: Ui;
    static initialise(): XrmMock.XrmStaticMock;
}
