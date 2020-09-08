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
    return CashMachine;
}());
function printUser(user) {
    if (user) {
        console.log("\n            current user: " + user.account + "\n            money: " + user.money + "\n        ");
    }
    else {
        console.log('no user found');
    }
}
var machine = new CashMachine([
    { account: 'aaa', password: 'aaa', money: 10000 },
    { account: 'bbb', password: 'bbb', money: 10000 },
    { account: 'ccc', password: 'ccc', money: 10000 }
]);
// printUser(machine.currentUser)
machine.signIn('aaa', 'aaa');
// printUser(machine.currentUser)
machine.withdraw(5000);
// printUser(machine.currentUser)
machine.signOut();
// printUser(machine.currentUser)
