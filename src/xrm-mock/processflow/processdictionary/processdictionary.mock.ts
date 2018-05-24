export class ProcessDictionaryMock implements Xrm.ProcessFlow.ProcessDictionary {
  [index: string]: string;

  constructor(index) {
    this.index = index;
  }
}
