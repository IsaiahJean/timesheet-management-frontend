import { Component, OnInit } from '@angular/core';
import { TimeCardService } from '../time-card.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IDoctor } from '../doctor';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-timecard',
  templateUrl: './new-timecard.component.html',
  styleUrls: ['./new-timecard.component.css']
})
export class NewTimecardComponent implements OnInit {

  public monthTimeCards: Date[] = [];
  public doctros: IDoctor[] = [];
  public cardDate;
  
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
  
  constructor(private _timeCardService: TimeCardService, private _fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    // this.getDoctros();
  }

  getDoctros() {
    this._userService.getDoctors().subscribe(
      (data) => this.doctros = data
    );
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

  onSubmit() {
    this.timeCard.get('hours_worked').setValue(this.parseTime(this.timeCard.get('time_in').value, this.timeCard.get('time_out').value));
    this._timeCardService.setTimeCard(this.timeCard.value).subscribe(() => this.timeCard.reset());
  }
}
