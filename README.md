# xrm-mock 

[![Join the chat at https://gitter.im/xrm-mock/Lobby](https://badges.gitter.im/xrm-mock/Lobby.svg)](https://gitter.im/xrm-mock/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/camelCaseDave/xrm-mock.svg?branch=master)](https://travis-ci.org/camelCaseDave/xrm-mock)
[![Coverage Status](https://coveralls.io/repos/github/camelCaseDave/xrm-mock/badge.svg?branch=master)](https://coveralls.io/github/camelCaseDave/xrm-mock?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/camelcasedave/xrm-mock/badge.svg)](https://snyk.io/test/github/camelcasedave/xrm-mock)
[![Issue Count](https://codeclimate.com/github/camelCaseDave/xrm-mock/badges/issue_count.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock)
[![Code Climate](https://codeclimate.com/github/camelCaseDave/xrm-mock/badges/gpa.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock)

A mock implementation of the <a href="https://msdn.microsoft.com/en-gb/library/gg328474.aspx">Xrm.Page</a> object model. Written in TypeScript against <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm">@types/xrm</a> definitions.

## Usage:
 - [Clone](https://github.com/camelCaseDave/xrm-mock.git) the repository
 
 - Install node dependencies with `cd repo-dir` and `npm i` from a command line
 
 - Create a `.ts` file for your entity form:
 
 ```typescript
 module ProjectName {
     export class Contact {
         Xrm: Xrm.Static;
     }
     
     constructor(xrm?: Xrm.XrmStatic) {
         this.Xrm = xrm;
     }
     
     onLoad(): void {
         if (this.Xrm) { Xrm = this.Xrm; }
         // ...
     }
}
 ```
 
 - Create a `.ts` file to test your entity form:

```typescript
// This example uses Jasmine
describe('Contact', function() {
    beforeEach(function () {
        let attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock('firstname', 'Joe', false, 'none'));
        attributes.push(new AttributeMock('lastname', 'Bloggs', true, 'recommended', 'always'));

        this.XrmMock = new XrmStaticMock(
            new PageMock(
                new DataMock(
                    new EntityMock(
                        new ItemCollectionMock<AttributeMock>(attributes)))));

        this.contact = new ProjectName.Contact(this.XrmMock);
        this.contact.onLoad();
    });
    
    // Describe the expected behaviour of the Contact form after onLoad() is invoked.
    describe('onLoad', function () {
        it('behaves like this', function () {
            expect(this.contact).toBeDefined();  
            // ...
        });
    });
}
```
