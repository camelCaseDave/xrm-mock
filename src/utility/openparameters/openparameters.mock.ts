/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class OpenParametersMock implements Xrm.Utility.OpenParameters {
    [index: string]: string | undefined;
}