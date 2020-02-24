interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {  

    constructor(private location?: Point, private color?: string) {  }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this.location.x} Y: ${this.location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });



