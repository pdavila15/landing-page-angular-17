import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
  }
}
