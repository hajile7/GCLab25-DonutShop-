import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Donut } from '../../models/donut';
import { DonutService } from '../../services/donut.service';
import { DonutDetailModel } from '../../models/donut-detail';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  donutResult:Donut = {} as Donut;

  constructor(private donutService:DonutService){}

  ngOnInit() {
    this.donutService.getDonuts().subscribe((response:Donut) => {
      console.log(response);
      this.donutResult = response;
    }); 
  }
  
}
