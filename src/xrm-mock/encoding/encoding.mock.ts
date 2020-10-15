export class EncodingMock implements Xrm.Encoding {
  public xmlAttributeEncode(arg: string): string {
    throw new Error("Not implemented");
  }
  public xmlEncode(arg: string): string {
    throw new Error("Not implemented");
  }

  public htmlAttributeEncode(arg: string): string {
    throw new Error("Not implemented");
  }

  public htmlDecode(arg: string): string {
    throw new Error("Not implemented");
  }

  public htmlEncode(arg: string): string {
    throw new Error("Not implemented");
  }
}
