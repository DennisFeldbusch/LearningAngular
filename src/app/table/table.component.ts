import { Component, OnInit } from '@angular/core';
import { JSONBean } from '../models/JSONBean';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  jsonBean: JSONBean;
  displayedColumns: string[] = ['open', 'close', 'high'];
  displayedData: any;

  constructor(private tableService: TableService) {  }

  ngOnInit(): void {
    this.getTeams();
  }

  // store the response from the GET request from table.service in the jsonBeans variable
  getTeams() {
    this.tableService.getData().subscribe((result) => {
      this.jsonBean = result;
      this.displayedData = this.jsonBean.Data.Data;
    });
  }
}
