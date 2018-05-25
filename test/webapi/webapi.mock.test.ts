import { ClientContextMock, WebApiMock, WebApiOfflineMock, WebApiOnlineMock } from "../../src/xrm-mock";

describe("Web API", () => {
  beforeEach(() => {
    const clientContext = new ClientContextMock("Web", "Online");

    this.offlineApi = new WebApiOfflineMock();
    this.onlineApi = new WebApiOnlineMock(this.offlineApi);
    this.webApi = new WebApiMock(clientContext, this.onlineApi, this.offlineApi);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should exist", () => {
    expect(this.webApi).toBeDefined();
  });

  it("should call online.createRecord when it's online", () => {
    const spy = jest.spyOn(this.onlineApi, "createRecord");
    expect(() => this.webApi.createRecord()).toThrow();
    expect(this.onlineApi.createRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.deleteRecord when it's online", () => {
    const spy = jest.spyOn(this.onlineApi, "deleteRecord");
    expect(() => this.webApi.deleteRecord()).toThrow();
    expect(this.onlineApi.deleteRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.retrieveRecord when it's online", () => {
    const spy = jest.spyOn(this.onlineApi, "retrieveRecord");
    expect(() => this.webApi.retrieveRecord()).toThrow();
    expect(this.onlineApi.retrieveRecord).toHaveBeenCalledTimes(1);
  });

  it("should call online.retrieveMultipleRecords when it's online", () => {
    const spy = jest.spyOn(this.onlineApi, "retrieveMultipleRecords");
    expect(() => this.webApi.retrieveMultipleRecords()).toThrow();
    expect(this.onlineApi.retrieveMultipleRecords).toHaveBeenCalledTimes(1);
  });

  it("should call online.updateRecord when it's online", () => {
    const spy = jest.spyOn(this.onlineApi, "updateRecord");
    expect(() => this.webApi.updateRecord()).toThrow();
    expect(this.onlineApi.updateRecord).toHaveBeenCalledTimes(1);
  });

  describe("online", () => {
    it("should throw for execute", () => {
      expect(() => this.onlineApi.execute()).toThrow();
    });

    it("should throw for executeMultiple", () => {
      expect(() => this.onlineApi.executeMultiple()).toThrow();
    });
  });
});
