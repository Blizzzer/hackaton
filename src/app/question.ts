import {Answer} from "./answer";

export class Question {
  public text: string;
  public isPublished: number;
  public lectureId: number;
  public answers: Answer[];
  public constructor(text: string, isPublished: number, lectureId: number, firstAnswer: string, secondAnswer: string, thirdAnswer: string, fourthAnswer: string, correct: number){
    this.text = text;
    this.isPublished = isPublished;
    this.lectureId = lectureId;
        this.answers = new Array(4);
    this.answers[0] = new Answer(firstAnswer,0, correct == 0);
    this.answers[1] = new Answer(secondAnswer,1,correct == 1);
    this.answers[2] = new Answer(thirdAnswer,2,correct == 2);
    this.answers[3] = new Answer(fourthAnswer,3,correct == 3);
  }
}

