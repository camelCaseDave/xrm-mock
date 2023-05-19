import { GridControlMock } from "../../../src/xrm-mock/controls/gridcontrol/gridcontrol.mock";

describe("Xrm.Controls.GridControl Mock", () => {
    let gridControl: GridControlMock;

    beforeEach(() => {
        gridControl = new GridControlMock({
            contextType: 2,
            entityName: "lead",
            name: "myGridControl"
        });

    });

    it("should add onLoad handler ", () => {
        expect(gridControl.onLoadHandlers.length).toBe(0);
        gridControl.addOnLoad(() => { /**/ });
        expect(gridControl.onLoadHandlers.length).toBe(1);
        gridControl.addOnLoad(() => { /**/ });
        expect(gridControl.onLoadHandlers.length).toBe(2);
    });

    it("should get context type", () => {
        expect(gridControl.getContextType()).toBe(2);
    });

    it("should get entity name", () => {
        expect(gridControl.getEntityName()).toBe("lead");
    });

    it("should get visible", () => {
        expect(gridControl.getVisible()).toBe(true);
    })

    it("should remove onLoad handler ", () => {
        const a = () => "a";
        const b = () => "b";
        const c = () => "c";
        gridControl.addOnLoad(a);
        gridControl.addOnLoad(b);
        gridControl.addOnLoad(c);
        expect(gridControl.onLoadHandlers.length).toBe(3);
        gridControl.removeOnLoad(c);
        expect(gridControl.onLoadHandlers.length).toBe(2);
        gridControl.removeOnLoad(c);
        expect(gridControl.onLoadHandlers.length).toBe(2);
        gridControl.removeOnLoad(a);
        expect(gridControl.onLoadHandlers.length).toBe(1);
        gridControl.removeOnLoad(b);
        expect(gridControl.onLoadHandlers.length).toBe(0);
    });

    it("should set visible", () => {
        gridControl.setVisible(false);
        expect(gridControl.getVisible()).toBe(false);
    })
});
