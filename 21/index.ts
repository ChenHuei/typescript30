// class static property & method

/*
class 的靜態屬性與方法

不需要經由建構物件的過程，而是直接呼叫類別本身提供的屬性與方法，皆稱之為靜態屬性與方法 aka 靜態成員

因此，
不管物件被建立多少次，靜態成員只會有一個版本

通常會使用靜態成員的狀況：
1. 不會隨著物件建構的不同而改變
2. 靜態成員可作為 class 本身提供的工具，不需要經過建構物件的程序

*/

class CircleGeometry {
    private PI: number = 3.14

    constructor (public radius: number) {}

    public area(): number {
        return this.PI * (this.radius ** 2)
    }

    public circumference(): number {
        return 2 * this.PI * this.radius
    }
}

const circle1 = new CircleGeometry(2)

console.log(circle1.area());
console.log(circle1.circumference());

class StaticCircleGeometry {
    private static PI: number = 3.14

    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2)
    }

    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius
    }

    static getPI(): number {
        return StaticCircleGeometry.PI
    }
}

console.log(StaticCircleGeometry.area(2));
console.log(StaticCircleGeometry.circumference(2));

// modify 20 folder example for static

enum TransportTicketType {
    Train,
    MRT,
    aviation
} 

type TimeFormat = [number, number, number]

type TrainStation = {
    name: string,
    nextStop: string,
    duration: TimeFormat
}

class TicketSystem {
    constructor(
        protected startingPoint: string,
        protected destination: string,
        private type: TransportTicketType,
        private departureTime: Date,
    ) {}

    protected  deriveDuration(): TimeFormat {
        return [1, 0, 0]
    }

    private deriveArrivalTime(): Date {
        const [hours, minutes, seconds] = this.deriveDuration()
        
        const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds
        const durationMilliseconds = durationSeconds * 1000

        const arrivalMilliseconds = this.departureTime.getTime() + durationMilliseconds

        return new Date(arrivalMilliseconds)
    }

    public printTicketInfo(): void {
        const ticketName = TransportTicketType[this.type]
        const arrivalTime = this.deriveArrivalTime()

        console.log(`
            Ticket Type: ${ticketName}
            Station:     ${this.startingPoint} - ${this.destination}
            Departure:   ${this.departureTime}
            Arrival:     ${arrivalTime}
        `)
    }
}

class TrainTicket extends TicketSystem {
    constructor(
        startingPoint: string,
        destination: string,
        departureTime: Date
    ) {
        super(
            startingPoint,
            destination,
            TransportTicketType.Train,
            departureTime,
        )
    }

    private static stations: string[] = [
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei'
    ]

    private static stationsDetail: TrainStation[] = [
        { name: 'Pingtung', nextStop: 'Kaohsiung' , duration: [2, 30, 0] },
        { name: 'Kaohsiung', nextStop: 'Tainan' , duration: [1, 45, 30] },
        { name: 'Tainan', nextStop: 'Taichung' , duration: [3, 20, 0] },
        { name: 'Taichung', nextStop: 'Hsinchu' , duration: [2, 30, 0] },
        { name: 'Hsinchu', nextStop: 'Taipei' , duration: [1, 30, 30] }
    ]

    private isStationExist(station: string): boolean {
        return TrainTicket.stations.some(item => item === station)
    }

    // override
    protected deriveDuration(): TimeFormat {
        if (this.isStationExist(this.startingPoint) && this.isStationExist(this.destination)) {
            type duration = {
                time: TimeFormat,
                isFoundStartStation: boolean 
            }

            const initValue: duration = {
                time: [0, 0, 0],
                isFoundStartStation: false
            } 
            const value: duration = TrainTicket.stationsDetail.reduce((acc, item) => {
                if (!acc.isFoundStartStation) {
                    if (item.name === this.startingPoint) {
                        acc.isFoundStartStation = true
                    } else {
                        return acc
                    }
                }

                const [hours, minutes, seconds] = item.duration
                acc.time[0] += hours
                acc.time[1] += minutes
                acc.time[2] += seconds

                return acc
            }, initValue)

            const minutes = Math.floor(value.time[2] / 60)
            value.time[2] -= minutes * 60
            value.time[1] += minutes

            const hours = Math.floor(value.time[1] / 60)
            value.time[1] -= hours * 60
            value.time[0] += hours

            return value.time

        } else {
            throw new Error('error')
        }

    }
}

const randomTicket = new TrainTicket(
    'Tainan',
    'Taipei',
    new Date(2020, 6, 6, 9, 0, 0),
)

randomTicket.printTicketInfo()