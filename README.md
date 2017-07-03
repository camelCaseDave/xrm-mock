# xrm-mock

A mock implementation of the <a href="https://msdn.microsoft.com/en-gb/library/gg328474.aspx">Xrm.Page</a> object model. Written in TypeScript against <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm">@types/xrm</a> definitions.

|Build|Chat|NPM|Coverage|Vulnerabilities|Climate|
|-----|----|---|--------|---------------|-------|
|[![Build Status](https://travis-ci.org/camelCaseDave/xrm-mock.svg?branch=master)](https://travis-ci.org/camelCaseDave/xrm-mock)|[![Join the chat at https://gitter.im/xrm-mock/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/xrm-mock/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)|[![NPM](https://img.shields.io/npm/v/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)|[![Coverage Status](https://coveralls.io/repos/github/camelCaseDave/xrm-mock/badge.svg?branch=master)](https://coveralls.io/github/camelCaseDave/xrm-mock?branch=master)|[![Known Vulnerabilities](https://snyk.io/test/github/camelcasedave/xrm-mock/badge.svg)](https://snyk.io/test/github/camelcasedave/xrm-mock)|[![Code Climate](https://codeclimate.com/github/camelCaseDave/xrm-mock/badges/gpa.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock)|


## Usage:
 - [Clone](https://github.com/camelCaseDave/xrm-mock.git), Fork or install the repository via ```npm install xrm-mock```

 - Create a `.ts` file for your entity form:
 
 ```typescript
export namespace Company.Contact {
    export namespace MainForm {
        let contact: Contact;

        export function onLoad(xrm?: Xrm.XrmStatic): void {
            contact = new Contact(xrm || Xrm);
            contact.changeFirstName("Joe");
        }
    }

    class Contact {
        constructor(xrm?: Xrm.XrmStatic) {
            Xrm = xrm || Xrm;
        }

        changeFirstName(newName: string): void {
            Xrm.Page.getAttribute("firstname").setValue(newName);
        }
    }
}
 ```
 
 - Create a `.ts` file to test your entity form:

```typescript
import * as XrmMock from "xrm-mock";
import { Company } from "../src/contact";

describe("contact", () => {
    beforeEach(() => {
        let attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute> = new XrmMock.ItemCollectionMock([
            new XrmMock.AttributeMock("firstname", "Phil", false, "required")
        ]);

        this.Xrm = new XrmMock.XrmStaticMock(
            new XrmMock.PageMock(
                new XrmMock.DataMock(
                    new XrmMock.EntityMock(
                        attributes
                    )
                )
            ));
    });
    it("works", () => {
        Company.Contact.MainForm.onLoad(this.Xrm);
        let firstName: string = Xrm.Page.getAttribute("firstname").getValue();

        expect(firstName).toBe("Joe");
    });
});
```
