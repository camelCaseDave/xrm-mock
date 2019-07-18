[![Build Status](https://travis-ci.org/camelCaseDave/xrm-mock.svg?branch=master)](https://travis-ci.org/camelCaseDave/xrm-mock)
[![npm version](https://badge.fury.io/js/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)
[![Downloads](https://img.shields.io/npm/dm/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/camelCaseDave/xrm-mock.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock/test_coverage)

# :books:  xrm-mock
[![Join the chat at https://gitter.im/xrm-mock/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/xrm-mock/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<b>xrm-mock</b> is a fake implementation of the <a href="https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference">Dynamics 365 Client API</a> and Xrm object model. Written in TypeScript against <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm">@types/xrm</a> definitions.

<b>xrm-mock-generator</b> is an opinionated toolset for building fake Xrm objects.

## Installing 

For the latest stable version
 
```bash
npm install xrm-mock -D
```
     
## Usage
Import `XrmMockGenerator` in your unit test file
 
 ```typescript
 import { XrmMockGenerator } from "xrm-mock";
 ```
 
Initialise a global `Xrm` object
  
```typescript
XrmMockGenerator.initialise();
```
  
Customise your form by [adding attributes](https://github.com/camelCaseDave/xrm-mock/wiki/Adding-Attributes)
  
```typescript
XrmMockGenerator.Attribute.createBool("new_havingfun", true);
```
Invoke your code and make your assertions
 
 ```typescript
 Contact.onLoad();
 expect(Xrm.Page.getAttribute("new_havingfun").getValue()).toBe(true);
 ```

## Example

This example demonstrates a script with an onLoad event handler registered on a contact form. When invoked, it changes the `firstname` attribute's value to Bob. See [the Wiki](https://github.com/camelCaseDave/xrm-mock/wiki/Demo) for a visual demo.
 
 #### src/contact.ts
 ```typescript
export default class Contact {
  public static onLoad() {
    Xrm.Page.getAttribute("firstname").setValue("Bob");
  }
}
 ```
 

#### test/contact.test.ts
```typescript
import Contact from "../src/contact";
import { XrmMockGenerator } from "xrm-mock";

describe("Contact", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
  });

  it("should initially be called Joe", () => {
    let name = Xrm.Page.getAttribute("firstname").getValue();
    expect(name).toBe("Joe"); // Pass
  });

  it("should change name to Bob onLoad", () => {
    Contact.onLoad();
    let name = Xrm.Page.getAttribute("firstname").getValue();
    expect(name).toBe("Bob"); // Pass
  });
});
```

## Contribute
 - [Submit bugs](https://github.com/camelCaseDave/xrm-mock/issues)
 - Implement a new function by inheriting `@types/Xrm`
    - Test your code using `npm run test`
    - Lint your code using `npm run lint`
    - Build your code using `npm run build`

## Roadmap
 - Increased test coverage
 - Increased implementation against different versions of `@types/Xrm` (8.2 and 9)
 - Automatic generation of attributes from a given Dynamics organisation
