import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params['id'];
  }

}
