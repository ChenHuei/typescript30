"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../45/index"));
var NormalIterator = /** @class */ (function () {
    function NormalIterator(items) {
        this.items = items;
        this.currentItem = null;
        this.currentIndex = 0;
        this.currentItem = items[0];
    }
    Object.defineProperty(NormalIterator.prototype, "isDone", {
        get: function () {
            return this.currentIndex > this.items.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    NormalIterator.prototype.next = function () {
        if (this.isDone)
            throw new Error('Iterator out of bound');
        this.currentIndex++;
        this.currentItem = this.items[this.currentIndex];
    };
    return NormalIterator;
}());
var MyArray = /** @class */ (function () {
    function MyArray(items) {
        this.items = items;
    }
    MyArray.prototype.createIterator = function () {
        return new NormalIterator(this.items);
    };
    return MyArray;
}());
var IterableLinkedList = /** @class */ (function (_super) {
    __extends(IterableLinkedList, _super);
    function IterableLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IterableLinkedList.prototype.createIterator = function () {
        var elements = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return new NormalIterator(elements);
    };
    return IterableLinkedList;
}(index_1.default));
function forEachMock(iterator, callback) {
    while (!iterator.isDone) {
        callback(iterator.currentItem);
        iterator.next();
    }
}
var list1 = new index_1.default();
list1.insert(0, 1);
list1.insert(1, 3);
list1.insert(2, 4);
list1.insert(1, 2);
var currentNode = list1.head;
while (currentNode !== null) {
    console.log("Iterated list value " + currentNode.value);
    currentNode = currentNode.next;
}
var collection1 = new MyArray([1, 2, 3, 4, 5]);
var list2 = new IterableLinkedList();
list2.insert(0, 1);
list2.insert(1, 2);
list2.insert(2, 3);
var iterator1 = collection1.createIterator();
var iterator2 = list2.createIterator();
forEachMock(iterator1, function (v) { return console.log("v from collection1: " + v); });
forEachMock(iterator2, function (v) { return console.log("v from list2: " + v); });
