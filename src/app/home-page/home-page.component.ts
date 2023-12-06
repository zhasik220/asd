import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../vehicle";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  carList:Vehicle[]=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCars()
  }


  getCars(): void {
    this.http.get<Vehicle[]>(
      "/gateway/car/vehicles",
    ).subscribe(data => {
      this.carList=data
    },
      (error) => {
        console.error('Error fetching cars', error);
      });
  }


  removeItem(vehicleId: number): void {
    this.http.delete(
      "gateway/car/vehicles/" + vehicleId,
    ).subscribe(data => this.carList = this.carList.filter((vehicle: Vehicle) => vehicle.id != vehicleId));
  }







}
