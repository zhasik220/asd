
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Vehicle} from './../vehicle';
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-car-display',
  templateUrl: './car-display.component.html',
  styleUrls: ['./car-display.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CarDisplayComponent {
  @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");

  @Output() removeItemEvent = new EventEmitter();
  @Output() editItemEvent = new EventEmitter();
}
