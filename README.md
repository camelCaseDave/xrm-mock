[![Build Status](https://travis-ci.org/camelCaseDave/xrm-mock.svg?branch=master)](https://travis-ci.org/camelCaseDave/xrm-mock)
[![npm version](https://badge.fury.io/js/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)
[![Downloads](https://img.shields.io/npm/dm/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/camelCaseDave/xrm-mock.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock/test_coverage)

# :books:  xrm-mock
[![Join the chat at https://gitter.im/xrm-mock/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/xrm-mock/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<b>xrm-mock</b> is a mock implementation of the <a href="https://msdn.microsoft.com/en-gb/library/gg328474.aspx">Xrm.Page</a> object model. Written in TypeScript against <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm">@types/xrm</a> definitions.

## Usage 
 - [Clone](https://github.com/camelCaseDave/xrm-mock.git), Fork or install the repository via ```npm i xrm-mock```
 
 - Install generation tool ```npm i xrm-mock-generator``` [[link]](https://github.com/camelCaseDave/xrm-mock-generator) (_biased recommendation_)

 - Create a  file for your entity form:
 
 #### src/contact.js
 ```javascript
(function () {
    "use strict";
    
    var Contact = () => {  };
    
    Contact.prototype.onLoad = () => {
        Xrm.Page.getAttribute("firstname").setValue("Bob");
    }
    
    // node
    module.exports = new Contact();
    
    // browser
    global.Contact = new Contact();    
}());
 ```
 
 - Create a file to test your entity form:

#### test/contact.test.js
```javascript
describe("Contact Form", () => {
    var XrmMockGenerator = require("xrm-mock-generator");
    var ContactForm = require("../src/contact.js");
    
    beforeEach(() => {
        XrmMockGenerator.initialise();
        XrmMockGenerator.createString("firstname", "Joe");
    });
    
    describe("default", () => {
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe"); // true
    });
    
    describe("onLoad", () => {
        ContactForm.onLoad();        
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Bob"); // true
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
