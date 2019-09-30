import { Component, OnInit } from '@angular/core';
import { TimeCardService } from '../time-card.service';
import { ITimeCard } from '../itime-card';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-timecard',
  templateUrl: './view-timecard.component.html',
  styleUrls: ['./view-timecard.component.css']
})
export class ViewTimecardComponent implements OnInit {

  timeCard = this._fb.group({
    file_number:['', Validators.required],
    date:['', Validators.required],
    sector:['', Validators.required],
    location:['', Validators.required],
    time_in:['', Validators.required],
    time_out:['', Validators.required],
    hours_code:['', Validators.required],
    hours_worked:['']
  })


  public timeCards: ITimeCard[] = [];
  public showtcForm: boolean = false;
  id: number;

  constructor(private _timeCardService: TimeCardService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._timeCardService.getTimeCards().subscribe(
      (data) => this.timeCards = data
    );
  }

  openEditForm(tc: ITimeCard) {
    this.showtcForm = !this.showtcForm;
    console.log(tc);
    if (this.showtcForm){
      this.id = tc.id;
      this.timeCard.get('file_number').setValue(tc.file_number);
      this.timeCard.get('date').setValue(tc.date);
      this.timeCard.get('sector').setValue(tc.sector);
      this.timeCard.get('location').setValue(tc.location);
      this.timeCard.get('time_in').setValue(tc.time_in);
      this.timeCard.get('time_out').setValue(tc.time_out);
      this.timeCard.get('hours_code').setValue(tc.hours_code);
    }
    else {
      this.timeCard.reset();
    }
  }

  parseTime(time_in, time_out): string {
    let time_arr1 = time_in.split(':');
    time_arr1[0] = parseInt(time_arr1[0]);
    time_arr1[1] = parseInt(time_arr1[1]);

    let time_arr2 = time_out.split(':');
    time_arr2[0] = parseInt(time_arr2[0]);
    time_arr2[1] = parseInt(time_arr2[1]);

    let time_arr3 = [];

    if (time_arr2[0] < time_arr1[0]) {
      time_arr3[0] = 24 - time_arr1[0] + time_arr2[0];
    }
    else {
      time_arr3[0] = time_arr2[0] - time_arr1[0];
    }
    if (time_arr2[1] < time_arr1[1]) {
      time_arr3[0] - 1;
      time_arr3[1] = time_arr1[1] - time_arr2[1];
    }
    else {
      time_arr3[1] = time_arr2[1] - time_arr1[1];
    }
    return `${time_arr3[0]}:${Math.trunc(time_arr3[1] / 10) !== 0 ? time_arr3[1] : "0" + time_arr3[1]}`;
  }
  
  onEditSubmit() {
    this.timeCard.get('hours_worked').setValue(this.parseTime(this.timeCard.get('time_in').value, this.timeCard.get('time_out').value));

    this._timeCardService.putTimeCard(
      this.id, this.timeCard.value
    ).subscribe(
      () => {
        this.openEditForm(
        {
          id: null,
          file_number: null,
          date: null,
          sector: null,
          location: null,
          time_in: null,
          time_out: null,
          hours_code: null,
          hours_worked: null
        });
        location.reload();
      }
    );
  }

  deleteTimeCard(tc: ITimeCard): void {
    if(confirm("Do you want to delete this Time Card?")){
      this.timeCards = this.timeCards.filter(h => h !== tc);
      this._timeCardService.deleteTimeCard(tc.id).subscribe(() => console.log("Deleted"));
    }
  }
  

}

