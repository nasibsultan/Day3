import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';


//decorator function
@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor = "let course of courses">
            {{course}}
        </li>
    </ul>
    
    <img [src]="imageUrl" /> 
    <table>
        <tr>
            <td [attr.colspan] = "colSpan"> </td>
        </tr>
    </table>
    <button class="btn btn-primary" [class.active] = isActive >Save</button>
    <button [style.backgroundColor] = "isActive ? 'blue' : 'white'" >Ok</button>
    
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
    </div>

    <input (keyup.enter) = "onKeyUp()" />
    
    <input #email (keyup.enter) = "onKeyUpTemplate(email.value)" />
    
    
    `
    //<input [(ngModel)]="email" (keyup.enter)="onKeyUpTwoWayBinding()" />
    //<img src="{{imageUrl}}" />
})
export class CoursesComponent{
    title = "List of courses";
    courses: any;
    imageUrl = "https://cdn.videvo.net/videvo_files/video/free/2021-04/customThumbnails/210329_06B_Bali_1080p_013_6089761f10c35_small.jpg";
    colSpan =2;
    isActive = true;
    email = "nasib@selise.ch";
    constructor(service: CoursesService ){
        this.courses = service.getCourses();
    }
    onDivClicked(){
        console.log("Div was clicked");
    }
    onSave(event:any){
        event.stopPropagation();
        console.log("Button was clicked",event);
    }
    onKeyUp(){
        console.log("ENTER was pressed");
    }
    
    onKeyUpTemplate(email:any){
        console.log(email);
    }
    onKeyUpTwoWayBinding(){
        console.log(this.email);
    }

}