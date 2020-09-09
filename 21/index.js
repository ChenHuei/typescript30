"use strict";
// class static property & method
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
/*
class 的靜態屬性與方法

不需要經由建構物件的過程，而是直接呼叫類別本身提供的屬性與方法，皆稱之為靜態屬性與方法 aka 靜態成員

因此，
不管物件被建立多少次，靜態成員只會有一個版本

通常會使用靜態成員的狀況：
1. 不會隨著物件建構的不同而改變
2. 靜態成員可作為 class 本身提供的工具，不需要經過建構物件的程序

*/
var CircleGeometry = /** @class */ (function () {
    function CircleGeometry(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    CircleGeometry.prototype.area = function () {
        return this.PI * (Math.pow(this.radius, 2));
    };
    CircleGeometry.prototype.circumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleGeometry;
}());
var circle1 = new CircleGeometry(2);
console.log(circle1.area());
console.log(circle1.circumference());
var StaticCircleGeometry = /** @class */ (function () {
    function StaticCircleGeometry() {
    }
    StaticCircleGeometry.area = function (radius) {
        return StaticCircleGeometry.PI * (Math.pow(radius, 2));
    };
    StaticCircleGeometry.circumference = function (radius) {
        return 2 * StaticCircleGeometry.PI * radius;
    };
    StaticCircleGeometry.getPI = function () {
        return StaticCircleGeometry.PI;
    };
    StaticCircleGeometry.PI = 3.14;
    return StaticCircleGeometry;
}());
console.log(StaticCircleGeometry.area(2));
console.log(StaticCircleGeometry.circumference(2));
var TransportTicketType;
(function (TransportTicketType) {
    TransportTicketType[TransportTicketType["Train"] = 0] = "Train";
    TransportTicketType[TransportTicketType["MRT"] = 1] = "MRT";
    TransportTicketType[TransportTicketType["aviation"] = 2] = "aviation";
})(TransportTicketType || (TransportTicketType = {}));
var TicketSystem = /** @class */ (function () {
    function TicketSystem(startingPoint, destination, type, departureTime) {
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.type = type;
        this.departureTime = departureTime;
    }
    TicketSystem.prototype.deriveDuration = function () {
        return [1, 0, 0];
    };
    TicketSystem.prototype.deriveArrivalTime = function () {
        var _a = this.deriveDuration(), hours = _a[0], minutes = _a[1], seconds = _a[2];
        var durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        var durationMilliseconds = durationSeconds * 1000;
        var arrivalMilliseconds = this.departureTime.getTime() + durationMilliseconds;
        return new Date(arrivalMilliseconds);
    };
    TicketSystem.prototype.printTicketInfo = function () {
        var ticketName = TransportTicketType[this.type];
        var arrivalTime = this.deriveArrivalTime();
        console.log("\n            Ticket Type: " + ticketName + "\n            Station:     " + this.startingPoint + " - " + this.destination + "\n            Departure:   " + this.departureTime + "\n            Arrival:     " + arrivalTime + "\n        ");
    };
    return TicketSystem;
}());
var TrainTicket = /** @class */ (function (_super) {
    __extends(TrainTicket, _super);
    function TrainTicket(startingPoint, destination, departureTime) {
        return _super.call(this, startingPoint, destination, TransportTicketType.Train, departureTime) || this;
    }
    TrainTicket.prototype.isStationExist = function (station) {
        return TrainTicket.stations.some(function (item) { return item === station; });
    };
    // override
    TrainTicket.prototype.deriveDuration = function () {
        var _this = this;
        if (this.isStationExist(this.startingPoint) && this.isStationExist(this.destination)) {
            var initValue = {
                time: [0, 0, 0],
                isFoundStartStation: false
            };
            var value = TrainTicket.stationsDetail.reduce(function (acc, item) {
                if (!acc.isFoundStartStation) {
                    if (item.name === _this.startingPoint) {
                        acc.isFoundStartStation = true;
                    }
                    else {
                        return acc;
                    }
                }
                var _a = item.duration, hours = _a[0], minutes = _a[1], seconds = _a[2];
                acc.time[0] += hours;
                acc.time[1] += minutes;
                acc.time[2] += seconds;
                return acc;
            }, initValue);
            var minutes = Math.floor(value.time[2] / 60);
            value.time[2] -= minutes * 60;
            value.time[1] += minutes;
            var hours = Math.floor(value.time[1] / 60);
            value.time[1] -= hours * 60;
            value.time[0] += hours;
            return value.time;
        }
        else {
            throw new Error('error');
        }
    };
    TrainTicket.stations = [
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei'
    ];
    TrainTicket.stationsDetail = [
        { name: 'Pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
        { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 45, 30] },
        { name: 'Tainan', nextStop: 'Taichung', duration: [3, 20, 0] },
        { name: 'Taichung', nextStop: 'Hsinchu', duration: [2, 30, 0] },
        { name: 'Hsinchu', nextStop: 'Taipei', duration: [1, 30, 30] }
    ];
    return TrainTicket;
}(TicketSystem));
var randomTicket = new TrainTicket('Tainan', 'Taipei', new Date(2020, 6, 6, 9, 0, 0));
randomTicket.printTicketInfo();
