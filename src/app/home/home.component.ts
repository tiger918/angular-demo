import { Component, OnInit } from '@angular/core';
import * as getISOWeek from 'date-fns/get_iso_week';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'John Brown',
      age     : 32,
      address : 'New York No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Jim Green',
      age     : 42,
      address : 'London No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Joe Black',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Disabled User',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit(): void{
    this.updateEditCache();
  }
  // 日期
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
  // 日期end
  // 表格 start
  i = 1;
  editCache = {};
  dataSet = [
    {
      key    : '0',
      name   : 'Edward King 0',
      age    : '32',
      address: 'London, Park Lane no. 0'
    },
    {
      key    : '1',
      name   : 'Edward King 1',
      age    : '32',
      address: 'London, Park Lane no. 1'
    },
    {
      key    : '2',
      name   : 'Edward King 2',
      age    : '32',
      address: 'London, Park Lane no. 2'
    }
  ];

  addRow(): void {
    this.i++;
    this.dataSet = [ ...this.dataSet, {
      key    : `${this.i}`,
      name   : `Edward King ${this.i}`,
      age    : '32',
      address: `London, Park Lane no. ${this.i}`
    } ];
    this.updateEditCache();
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  finishEdit(key: string): void {
    this.editCache[ key ].edit = false;
    this.dataSet.find(item => item.key === key).name = this.editCache[ key ].name;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }
  // 表格end


}
