import { NavigationStaticMock } from "../../src/xrm-mock";
import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";

describe("XrmMockGenerator.Navigation", () => {
    let _sut: NavigationStaticMock;
    const _sizeOptions: Xrm.Navigation.DialogSizeOptions = { height: 100, width: 100 };

    beforeEach(() => {
        _sut = XrmMockGenerator.initialise().Navigation;
    });

    it("should record openAlertDialog call", async () => {
        const alert = {
            text: "This is an alert message"
        }

        const promise = _sut.openAlertDialog(alert, _sizeOptions);
        expect(_sut.alertDialogCalls.length).toBe(0);
        await promise;

        expect(_sut.alertDialogCalls.length).toBe(1);
        expect(_sut.alertDialogCalls[0].alertStrings).toBe(alert);
        expect(_sut.alertDialogCalls[0].alertOptions).toBe(_sizeOptions);
    });

    it("should record navigateTo call", async () => {
        const input: Xrm.Navigation.PageInputEntityList = { entityName: "contact", pageType: "entitylist" };
        const options: Xrm.Navigation.NavigationOptions = { target: 1 };

        const promise = _sut.navigateTo(input, options);
        expect(_sut.navigateToCalls.length).toBe(0);
        await promise;

        expect(_sut.navigateToCalls.length).toBe(1);
        expect(_sut.navigateToCalls[0].pageInput).toBe(input);
        expect(_sut.navigateToCalls[0].navigationOptions).toBe(options);
    });

    it("should record openConfirmDialog call", async () => {
        const confirmStrings: Xrm.Navigation.ConfirmStrings = {
            confirmButtonLabel: "Yes",
            cancelButtonLabel: "No",
            text: "Are you sure?",
        };

        const promise = _sut.openConfirmDialog(confirmStrings, _sizeOptions);
        expect(_sut.confirmDialogCalls.length).toBe(0);
        await promise;

        expect(_sut.confirmDialogCalls.length).toBe(1);
        expect(_sut.confirmDialogCalls[0].confirmStrings).toBe(confirmStrings);
        expect(_sut.confirmDialogCalls[0].confirmOptions).toBe(_sizeOptions);
    });

    it("should record openErrorDialog call", async () => {
        const error = { message: "An error occurred" };

        const promise = _sut.openErrorDialog(error);
        expect(_sut.errorDialogCalls.length).toBe(0);
        await promise;

        expect(_sut.errorDialogCalls.length).toBe(1);
        expect(_sut.errorDialogCalls[0].errorOptions).toBe(error);
    });

    it("should record openFile call", () => {
        const details: Xrm.Navigation.FileDetails = {
            fileContent: "file content",
            fileName: "test.txt",
            fileSize: 100,
            mimeType: "text/plain",
        };
        const options: Xrm.Navigation.OpenFileOptions = {
            openMode: XrmEnum.OpenFileOptions.Open
        }

        _sut.openFile(details, options);

        expect(_sut.fileDialogCalls.length).toBe(1);
        expect(_sut.fileDialogCalls[0].file).toBe(details);
        expect(_sut.fileDialogCalls[0].openFileOptions).toBe(options);
    });

    it("should record openForm call", async () => {
        const options: Xrm.Navigation.EntityFormOptions = {};
        const parameters: Xrm.Utility.OpenParameters = {};

        const promise = _sut.openForm(options, parameters);
        expect(_sut.formCalls.length).toBe(0);
        await promise;

        expect(_sut.formCalls.length).toBe(1);
        expect(_sut.formCalls[0].entityFormOptions).toBe(options);
        expect(_sut.formCalls[0].formParameters).toBe(parameters);
    });

    it("should record openUrl call", () => {
        const url = "http://www.google.com";
        _sut.openUrl(url, _sizeOptions);

        expect(_sut.urlCalls.length).toBe(1);
        expect(_sut.urlCalls[0].url).toBe(url);
        expect(_sut.urlCalls[0].openUrlOptions).toBe(_sizeOptions);
    });

    it("should record openWebResource call", () => {
        const name = "something.html";
        const options: Xrm.Navigation.OpenWebresourceOptions = {
            height: 100,
            openInNewWindow: true,
            width: 100,
        };
        const data = "data";

        _sut.openWebResource(name, options, data);

        expect(_sut.webResourceCalls.length).toBe(1);
        expect(_sut.webResourceCalls[0].webResourceName).toBe(name);
        expect(_sut.webResourceCalls[0].windowOptions).toBe(options);
        expect(_sut.webResourceCalls[0].data).toBe(data);
    });
});
