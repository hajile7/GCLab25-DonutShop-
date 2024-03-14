import { Injectable } from '@angular/core';
import { Donut } from '../models/donut';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonutDetailModel } from '../models/donut-detail';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonuts():Observable<Donut> {
    return this.http.get<Donut>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }

  getById(id:number):Observable<DonutDetailModel> {
    return this.http.get<DonutDetailModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

}
