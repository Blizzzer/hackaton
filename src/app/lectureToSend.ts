export class LectureToSend {
  public name: string;
  public day: string;
  public startHour: number;
  public finishHour: number;
  constructor(name: string, day: string, startHour: number, finishHour: number) {
    this.name = name;
    this.day = day;
    this.startHour = startHour;
    this.finishHour = finishHour;
  }
}
