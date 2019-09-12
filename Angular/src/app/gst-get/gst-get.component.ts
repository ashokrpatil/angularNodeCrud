import { Component, OnInit,ViewChild } from '@angular/core';
import {Business} from '../Business';
import { BusinessService } from '../business.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})

export class GstGetComponent implements OnInit {
  displayedColumns = ['item_code', 'vendor_code','plant_code','edit','delete',
  'abcd','def','abcd','abcd','abcd','def','abcd','abcd','abcd','def','abcd','abcd'];
  // businesses: MatTableDataSource<Business>;

    // businesses= new MatTableDataSource<Business>(data);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private bs: BusinessService) { 
    // const businesses: Business[] = [];
    // this.businesses = new MatTableDataSource(businesses);
  }
  businesses: Business[];
  ngOnInit() {

    // this.businesses.paginator = this.paginator;

    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
