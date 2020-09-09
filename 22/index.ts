// class accessors

/*
類別的存取方法分為 取值(Getter) 和存值(Setter)

1. 若只有單純實踐某物件屬性的取值方法，可視為是 read-only 狀態
2. 取值方法不能有任何參數，且必須要有回傳值
3. 存值方法只能有一個參數

*/

class CircleGeometry {
    public readonly PI: number = 3.14

    constructor(public radius: number) {}

    get area() {
        return this.PI * this.radius ** 2
    }

    set area(value: number) {
        this.radius = (value / this.PI) ** 0.5
    }

    get circumference(): number{
        return 2 * this.PI * this.radius
    }

    set circumference(value: number) {
        this.radius = value / 2 / this.PI
    }
}

const circle = new CircleGeometry(2)

console.log(circle.area);

circle.area = 25 * circle.PI

console.log(circle.radius);
