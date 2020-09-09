"use strict";
// class extend
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

class D extends C {}

1. D 可使用 C class 非 private 模式的成員變數和方法
2. D 建構出來的物件，除了屬於 D class 同時也屬於 C class

*/
// 交通票務系統
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
        var _this = _super.call(this, startingPoint, destination, TransportTicketType.Train, departureTime) || this;
        _this.stations = [
            'Pingtung',
            'Kaohsiung',
            'Tainan',
            'Taichung',
            'Hsinchu',
            'Taipei'
        ];
        _this.stationsDetail = [
            { name: 'Pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
            { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 45, 30] },
            { name: 'Tainan', nextStop: 'Taichung', duration: [3, 20, 0] },
            { name: 'Taichung', nextStop: 'Hsinchu', duration: [2, 30, 0] },
            { name: 'Hsinchu', nextStop: 'Taipei', duration: [1, 30, 30] }
        ];
        return _this;
    }
    TrainTicket.prototype.isStationExist = function (station) {
        return this.stations.some(function (item) { return item === station; });
    };
    TrainTicket.prototype.deriveDuration = function () {
        var _this = this;
        if (this.isStationExist(this.startingPoint) && this.isStationExist(this.destination)) {
            var initValue = {
                time: [0, 0, 0],
                isFoundStartStation: false
            };
            var value = this.stationsDetail.reduce(function (acc, item) {
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
            console.log(value);
            var minutes = Math.floor(value.time[2] / 60);
            value.time[2] -= minutes * 60;
            value.time[1] += minutes;
            var hours = Math.floor(value.time[1] / 60);
            value.time[1] -= hours * 60;
            value.time[0] += hours;
            console.log(value.time);
            return value.time;
        }
        else {
            throw new Error('error');
        }
    };
    return TrainTicket;
}(TicketSystem));
var randomTicket = new TrainTicket('Tainan', 'Taipei', new Date(2020, 6, 6, 9, 0, 0));
randomTicket.printTicketInfo();
