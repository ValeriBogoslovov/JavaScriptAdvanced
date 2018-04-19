
let expect = require("chai").expect;
let jsdom =  require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe("Testing sharedObject", function () {
    beforeEach(function () {
        document.body.innerHTML = `<body>
            <div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>
        </body>
        `;
    });
    describe("Testing initial values for name and income",function () {
       it("default value for name, should be null", function () {
           expect(sharedObject.name).to.be.null;
       });
        it("default value for income, should be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });
   describe("Testing changeName()", function () {
      it("should return name null for empty string", function () {
          sharedObject.changeName("");
          expect(sharedObject.name).to.be.null;
      });

      it("with valid parameter, should change name", function () {
          sharedObject.changeName("Vasko");
          expect(sharedObject.name).to.equal('Vasko');
      });

      it("with empty string, value of the input field should be empty", function () {
         sharedObject.changeName("");
         expect($('#name').val()).to.equal("");
      });

      it("with valid string, value of the input field should equal the string", function () {
           sharedObject.changeName("Sasho");
           expect($('#name').val()).to.equal("Sasho");
       });

   });
});