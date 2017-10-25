|Build|Chat|NPM|Coverage|Vulnerabilities|Climate|
|-----|----|---|--------|---------------|-------|
|[![Build Status](https://travis-ci.org/camelCaseDave/xrm-mock.svg?branch=master)](https://travis-ci.org/camelCaseDave/xrm-mock)|[![Join the chat at https://gitter.im/xrm-mock/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/xrm-mock/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)|[![NPM](https://img.shields.io/npm/v/xrm-mock.svg)](https://www.npmjs.com/package/xrm-mock)|[![Coverage Status](https://coveralls.io/repos/github/camelCaseDave/xrm-mock/badge.svg?branch=master)](https://coveralls.io/github/camelCaseDave/xrm-mock?branch=master)|[![Known Vulnerabilities](https://snyk.io/test/github/camelcasedave/xrm-mock/badge.svg)](https://snyk.io/test/github/camelcasedave/xrm-mock)|[![Code Climate](https://codeclimate.com/github/camelCaseDave/xrm-mock/badges/gpa.svg)](https://codeclimate.com/github/camelCaseDave/xrm-mock)|

<b>xrm-mock</b> is a mock implementation of the <a href="https://msdn.microsoft.com/en-gb/library/gg328474.aspx">Xrm.Page</a> object model. Written in TypeScript against <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm">@types/xrm</a> definitions.

## :books: Usage:
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

## :heart:  Contributing and Project Roadmap:
 - Increase test coverage
 - Increase implementation
 - Include a project like [rewire](https://github.com/jhnns/rewire) so that non-exported classes can be tested
