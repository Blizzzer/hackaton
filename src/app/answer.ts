export class Answer {
  public text: string;
  public order: number;
  public isCorrect: number;
  public constructor(text: string, order: number, isCorrect: boolean){
    this.text = text;
    this.order = order;
    if(isCorrect)
      this.isCorrect = 1;
    else
      this.isCorrect = 0;
  }
}
