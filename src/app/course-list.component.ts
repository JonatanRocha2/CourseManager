import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
        {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/forms.png',
            price: 'R$ 99.99',
            code: 'XPS-8521',
            duration: 120,
            rating: 4,
            releaseDate: 'August 8, 2021',
        },
        {
            id: 2,
            name: 'Angular: HTTP',
            imageUrl: '/assets/images/http.png',
            price: 'R$ 45.99',
            code: 'TKH-4723',
            duration: 80,
            rating: 3.5,
            releaseDate: 'December 14, 2019',   

        }]
    }

}