interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;   
}

class Taxi implements Vehicle  {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }  
}

class Bus implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }  
}

// taxi_1 => 41 abc 41
// taxi_1.currentLocation
// taxi_1.travelTo()

// taxi_2 => 41 abd 41
// taxi_2.currentLocation
// taxi_2.travelTo()
