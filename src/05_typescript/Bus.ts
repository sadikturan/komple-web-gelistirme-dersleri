import { Vehicle } from './Vehicle';
import { Point } from './Point';

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        throw new Error("Method not implemented.");
    }    
}