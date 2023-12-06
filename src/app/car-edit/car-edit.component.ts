import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {Vehicle} from "../vehicle";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
  standalone:true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule],
})
export class CarEditComponent implements OnInit {



  ngOnInit(): void {
  }


  @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");

  @Output() editDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post<Vehicle>(
      "/gateway/car/vehicles",
      this.vehicle
    ).subscribe(data => {
      this.editDataEvent.emit(data);
    });
  }



}
