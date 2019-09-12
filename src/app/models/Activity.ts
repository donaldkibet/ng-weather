export class Activity {
    id?: number;
    time: string;
    date: Date;
    activity: string;

    constructor(data: any) {
        this.id = data.id || undefined;
        this.time = data.time;
        this.date = data.date;
        this.activity = data.activity;
    }
}
