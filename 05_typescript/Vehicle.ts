import { Point } from './Point';

export interface Vehicle {
    travelTo(point: Point): void;
}