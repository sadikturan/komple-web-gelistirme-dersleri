interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    color: string;

    constructor(location?: Point, color?: string) {
        this.currentLocation = location;
        this.color = color;
    }

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.color = 'Red';
console.log(taxi_1.currentLocation);

let taxi_2 = new Taxi({ x: 2, y: 5 }, 'red');
let taxi_3 = new Taxi();