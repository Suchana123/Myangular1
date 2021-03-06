import { Component } from '@angular/core';

@Component ({
    selector: 'courses',
    template: `
                <h2>{{getTitle()}}</h2>
                <ul>
                    <li *ngFor="let i of courses">
                    {{i}}
                    </li>
                </ul>
                `
})

export class CoursesComponent{
        title="List of Courses of Angular";
        courses=["course1", "course2", "course3"];
        getTitle()
        {
            return this.title;
        }
}