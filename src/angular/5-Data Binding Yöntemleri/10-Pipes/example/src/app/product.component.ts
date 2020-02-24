import { Component } from "@angular/core";
import { ProductRepository } from './repository.model';

@Component({
    selector: "app",
    template: `
        <h4> Lower-Upper-Title CasePipe </h4>  
        <p> {{ title }} </p> 
        <p> {{ title | lowercase }} </p> 
        <p> {{ title | uppercase }} </p> 
        <p> {{ title | titlecase }} </p> 
        
        <h4> Date Pipe </h4>   
        <p> {{ today }} </p> 
        <p> {{ today | date }} </p> 
        <p> {{ today | date: 'fullDate' }} </p> 
        <p> {{ today | date: 'medium' }} </p> 
        <p> {{ today | date: 'shortTime' }} </p> 
        <p> {{ today | date: 'h:mm:ss' }} </p> 

        <h4> Decimal Pipe </h4>  
        <p> {{ students }} </p> 
        <p> {{ students | number }} </p> 
        <p> {{ price | number: '1.1-1' }} </p> 

        <h4> Currency Pipe </h4>
        <p> {{ price | currency: 'EUR' }} </p> 

        <h4> Percent Pipe </h4>     
        <p> {{ completed | percent }} </p>   
        <p> {{ completed | percent: '2.2-2' }} </p>   
    `,
    styleUrls: ["product.component.css"]
})
export class ProductComponent {
    today: number = Date.now();
    title: string = 'Angular Kursu';
    students: number = 21536;
    price: number = 395.9756;
    completed: number = 0.26;
}