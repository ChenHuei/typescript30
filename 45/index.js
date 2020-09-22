"use strict";
// 泛型宣告下 class 與 interface 綁定時的規則與特點
var MyGenericLinkedListNode = /** @class */ (function () {
    function MyGenericLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return MyGenericLinkedListNode;
}());
var MyGenericLinkedList = /** @class */ (function () {
    function MyGenericLinkedList() {
        this.head = null;
    }
    MyGenericLinkedList.prototype.at = function (index) {
        var length = this.length();
        if (index >= length)
            throw new Error('Index out of bound');
        var currentIndex = 0;
        var currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    };
    MyGenericLinkedList.prototype.insert = function (index, value) {
        var length = this.length();
        var newListNode = new MyGenericLinkedListNode(value);
        if (index > length) {
            throw new Error('Index out of bound');
        }
        else if (index === length) {
            if (index === 0) {
                this.head = newListNode;
            }
            else {
                var node = this.at(index - 1);
                node.next = newListNode;
            }
        }
        else {
            if (index === 0) {
                var originHead = this.head;
                this.head = newListNode;
                this.head.next = originHead;
            }
            else {
                var preListNode = this.at(index - 1);
                var originListNode = preListNode.next;
                preListNode.next = newListNode;
                newListNode.next = originListNode;
            }
        }
    };
    MyGenericLinkedList.prototype.remove = function (index) {
        throw new Error("Method doesn't implemented yet");
    };
    MyGenericLinkedList.prototype.length = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    };
    MyGenericLinkedList.prototype.getInfo = function () {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentNode !== null) {
            console.log("Index " + currentIndex + ": " + currentNode.value);
            currentNode = currentNode.next;
            currentIndex++;
        }
    };
    return MyGenericLinkedList;
}());
var L = new MyGenericLinkedList();
L.insert(0, 1);
L.insert(1, 3);
L.insert(2, 4);
L.insert(1, 2);
L.getInfo();
var M = new MyGenericLinkedList();
M.insert(0, '1');
M.insert(1, '3');
M.insert(2, '4');
M.insert(1, '2');
M.getInfo();
