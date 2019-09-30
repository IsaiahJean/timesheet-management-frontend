import { Time } from '@angular/common';

export interface Ireport {
    id: number;
    file_number: {
        id: number;
        first_Name: string;
        last_Name: string;
        pay_roll: string;
    }
    date: any;
    sector: string
    location: string;
    time_in: any;
    daytime_in: string;
    time_out: any;
    daytime_out: string;
    hours_code: string;
    hours_worked: any;
}
