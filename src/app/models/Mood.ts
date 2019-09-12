export class Mood {
    id?: number;
    time: string;
    date: Date;
    mood: string;

    constructor(data) {
        this.id = data.id || undefined;
        this.time = data.time;
        this.date = data.date;
        this.mood = data.mood;

    }
}
