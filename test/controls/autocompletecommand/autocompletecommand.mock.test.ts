import { AutoCompleteCommandMock } from "../../../src/xrm-mock/";

describe("Xrm.Controls.AutoCompleteCommand Mock", () => {
  let autoCompleteCommand: AutoCompleteCommandMock;

  beforeEach(() => {
    autoCompleteCommand = new AutoCompleteCommandMock("1", "Done", "/png/someImage.png", () => { alert("Action."); });
  });

  it("should exist", () => {
    expect(autoCompleteCommand).toBeDefined();
  });
});
