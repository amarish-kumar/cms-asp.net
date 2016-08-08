import { Component } from '@angular/core';
import {CSSCarouselComponent} from './carousel.component/carousel.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard.component.html',
    directives: [CSSCarouselComponent]
})
export class DashboardComponent { } 