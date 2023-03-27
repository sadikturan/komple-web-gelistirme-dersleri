interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {  

    constructor(private _location?: Point, private _color?: string) {  }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }

    get location() {
        return this._location;
    }

    set location(value: Point) {
        if(value.x<0 || value.y <0) {
            throw new Error('koordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });

let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };




