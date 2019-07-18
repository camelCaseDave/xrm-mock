import * as sinon from "sinon";
import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";

describe("WebAPI", () => {
  let contact;

  beforeEach(() => {
    XrmMockGenerator.initialise();
    contact = {
      firstname: "Joe",
      id: "123",
      lastname: "Bloggs",
    };
  });

  it("should create a record", () => {
    const id = "123";
    const stub = sinon.stub(Xrm.WebApi, "createRecord");

    stub.withArgs("contact", contact).resolves({
      entityType: "contact",
      id,
    });

    return Xrm.WebApi.createRecord("contact", contact).then((result: any) => {
      expect(result.id).toBe(id);
    });
  });

  it("should delete a record", () => {
    const id = "456";
    const stub = sinon.stub(Xrm.WebApi, "deleteRecord");

    stub.withArgs("contact", id).resolves({
      entityType: "contact",
      id,
      name: "Joe Bloggs",
    });

    return Xrm.WebApi.deleteRecord("contact", id).then((result: any) => {
      expect(result.id).toBe(id);
    });
  });

  it("should retrieve a record", () => {
    const id = "123";
    const stub = sinon.stub(Xrm.WebApi, "retrieveRecord");

    stub.withArgs("contact", id, "?$select=fullname").resolves(contact);

    return Xrm.WebApi.retrieveRecord("contact", id, "?$select=fullname").then((result: any) => {
      expect(result.id).toBe(id);
    });
  });
});
