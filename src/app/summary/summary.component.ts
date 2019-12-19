import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  summary: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getSummary().subscribe((response)=>{
      this.summary=response;
    })
  }

}
