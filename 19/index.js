"use strict";
// 存取修飾子 Access Modifiers
var CashMachine = /** @class */ (function () {
    function CashMachine(users) {
        this.users = users;
    }
    CashMachine.prototype.signIn = function (account, password) {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.account === account && user.password === password) {
                this.currentUser = user;
                break;
            }
        }
        if (!this.currentUser) {
            throw new Error('User not found');
        }
    };
    CashMachine.prototype.signOut = function () {
        this.currentUser = undefined;
    };
    CashMachine.prototype.deposit = function (amount) {
        if (this.currentUser) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error('Not signed in!!');
        }
    };
    CashMachine.prototype.withdraw = function (amount) {
        if (this.currentUser) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error('Not signed in!!');
        }
    };
    CashMachine.prototype.printUser = function () {
        if (this.currentUser) {
            console.log("\n                current user: " + this.currentUser.account + "\n                money: " + this.currentUser.money + "\n            ");
        }
        else {
            console.log('no user found');
        }
    };
    return CashMachine;
}());
var machine = new CashMachine([
    { account: 'aaa', password: 'aaa', money: 10000 },
    { account: 'bbb', password: 'bbb', money: 10000 },
    { account: 'ccc', password: 'ccc', money: 10000 }
]);
machine.printUser();
machine.signIn('aaa', 'aaa');
machine.printUser();
// printUser(machine.currentUser)
machine.withdraw(5000);
machine.printUser();
// printUser(machine.currentUser)
machine.signOut();
machine.printUser();
// printUser(machine.currentUser)
