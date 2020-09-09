// class extend

/*

class D extends C {}

1. D 可使用 C class 非 private 模式的成員變數和方法
2. D 建構出來的物件，除了屬於 D class 同時也屬於 C class

*/

// 交通票務系統

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

    private stations: string[] = [
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei'
    ]

    private stationsDetail: TrainStation[] = [
        { name: 'Pingtung', nextStop: 'Kaohsiung' , duration: [2, 30, 0] },
        { name: 'Kaohsiung', nextStop: 'Tainan' , duration: [1, 45, 30] },
        { name: 'Tainan', nextStop: 'Taichung' , duration: [3, 20, 0] },
        { name: 'Taichung', nextStop: 'Hsinchu' , duration: [2, 30, 0] },
        { name: 'Hsinchu', nextStop: 'Taipei' , duration: [1, 30, 30] }
    ]

    private isStationExist(station: string): boolean {
        return this.stations.some(item => item === station)
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
            const value: duration = this.stationsDetail.reduce((acc, item) => {
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


