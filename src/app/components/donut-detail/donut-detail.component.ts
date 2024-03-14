import { Component } from '@angular/core';
import { DonutDetailModel } from '../../models/donut-detail';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-donut-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './donut-detail.component.html',
  styleUrl: './donut-detail.component.css'
})
export class DonutDetailComponent {
  constructor(private activatedRoute:ActivatedRoute, private donutService:DonutService, private router:Router, private cartService:CartService){}
  
  donutResult:DonutDetailModel = {} as DonutDetailModel;
  search:number = 1;

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let id = Number(paramMap.get("id"));
      
      this.callApi(id)
      if(this.donutResult == undefined){
        this.router.navigate(["/DonutNotFound"]);
      }
    })
  }

  callApi(id: number){
    this.donutService.getById(id).subscribe((response:DonutDetailModel) => {
      console.log(response);
      this.donutResult = response;
    });
  }

  sendDonutToCart(donut:DonutDetailModel) {
    this.cartService.addByDonut(donut);
  }

}
