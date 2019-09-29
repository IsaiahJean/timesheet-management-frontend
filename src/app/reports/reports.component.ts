import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort'
import { ReportService } from './../report.service';
import { Ireport } from '../ireport';
import { delay } from 'q';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public timeCards: Ireport[] = [];
  date_val = new Date();
  sortedData: Ireport[];

  constructor(private _reportService: ReportService) {
  }

  sortData(sort: Sort) {
    const data = this.timeCards.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'name': return compare(a.file_number.last_Name, b.file_number.last_Name, isAsc);
        case 'time_in': return compare(a.daytime_in, b.daytime_in, isAsc);
        case 'time_out': return compare(a.daytime_out, b.daytime_out, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'sector': return compare(a.sector, b.sector, isAsc);
        case 'hours_code': return compare(a.hours_code, b.hours_code, isAsc);
        case 'hours_worked': return compare(a.hours_worked, b.hours_worked, isAsc);
        default: return 0;
      }
    });
  }

  async ngOnInit() {
    this._reportService.getTimeCards().subscribe(
      (data) => this.timeCards = data
    );
    await delay(500);
    this.sortedData = this.timeCards.slice();
  }

}

  function compare (a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

