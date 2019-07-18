import { UtilityMock } from "../../src/xrm-mock/utility/utility.mock";

describe("Xrm.Utility Mock", () => {
    let utility: UtilityMock;
    beforeEach(() => {
        utility = new UtilityMock();
    });

    it("should exist", () => {
        expect(utility).toBeDefined();
    });

    it("should alert", () => {
        const windowSpy = spyOn(window, "alert");
        utility.alertDialog("Are you sure?", () => true);

        expect(windowSpy).toHaveBeenCalledWith("Are you sure?");
    });

    describe("confirmDialog", () => {
        beforeEach(() => {
            this.confirmSpy = jest.spyOn(window, "confirm");
        });

        it("should confirm and call yes callback", () => {
            this.confirmSpy.mockReturnValueOnce(true);
            utility.confirmDialog("Are you sure?",
                () => {
                    expect(true);
                },
                () => {
                    fail();
                });
        });

        it("should confirm and call no callback", () => {
            this.confirmSpy.mockReturnValueOnce(false);
            utility.confirmDialog("Are you sure?",
                () => {
                    fail();
                },
                () => {
                    expect(true);
                });
        });
    });
});
