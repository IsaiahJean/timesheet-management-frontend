export interface ITimeCard {
    id: number;
    file_number: number;
    date: Date;
    sector: string;
    location: string;
    time_in: number;
    time_out: number;
    hours_code: string;
    hours_worked: number;
}
