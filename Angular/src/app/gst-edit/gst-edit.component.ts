import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
  // updateBusiness(item_code: HTMLInputElement,vendor_code:HTMLInputElement, plant_code: HTMLInputElement): boolean 
  // {
  //  console.log(`Adding article title: ${item_code.value},${vendor_code.value}and link: ${plant_code.value}`);
  //  return false;
  // };         
  // ***for the above function in updateBusiness function at html remove .value***

  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        item_code: ['', Validators.required ],
        vendor_code: ['', Validators.required ],
        plant_code: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
  

  updateBusiness(item_code,vendor_code,plant_code) {
   this.route.params.subscribe(params => {
      this.bs.updateBusiness(item_code, vendor_code, plant_code, params['id']);
      this.router.navigate(['business']);
   });
}
}
