export class EncodingMock implements Xrm.Encoding {
  public xmlAttributeEncode(arg: string): string {
    throw new Error("Not implemented");
  }
  public xmlEncode(arg: string): string {
    throw new Error("Not implemented");
  }
}
