import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-car-wrapper',
  templateUrl: './car-wrapper.component.html',
  styleUrls: ['./car-wrapper.component.css']
})
export class CarWrapperComponent implements OnInit {

  @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");
  @Output() removeItemEvent = new EventEmitter();
  editable: boolean = false;

  ngOnInit() {
  }

  handleEditClick(): void {
    this.editable = true;
  }

  handleSaveEdition(vehicle: Vehicle): void {
    this.editable = false
    this.vehicle = vehicle;
  }

}
