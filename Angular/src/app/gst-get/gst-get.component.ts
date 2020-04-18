import { Component, OnInit,ViewChild } from '@angular/core';
import {Business} from '../Business';
import { BusinessService } from '../business.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})

export class GstGetComponent implements OnInit {

  itemcode= new FormControl ("");
  filterValues = {
    item_code: ''
  };
  displayedColumns = ['item_code', 'vendor_code','plant_code','edit','delete',
  'abcd','def','abcd','abcd','abcd','def','abcd','abcd','abcd','def','abcd','abcd'];
  itemRecords: void;
  copybusiness: any;
  tData: MatTableDataSource<any>;
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

this.getData();

    this.itemcode.valueChanges
    .subscribe(item_code => {
      this.filterValues.item_code = item_code
      this.tData.filter = JSON.stringify(this.filterValues)
    });
  }

getData(){
  this.bs
  .getBusinesses()
  .subscribe((data: Business[]) => {
    this.businesses = data;
    console.log( this.businesses);
    this.tData = new MatTableDataSource<any>(this.businesses);
    this.tData.filterPredicate = (data, filter: string) => {
      let serchTerms=JSON.parse(filter);
      return (!data.item_code || data.item_code.toLowerCase().indexOf(serchTerms.item_code.toLowerCase()) != -1);
    }
    
});
}

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
