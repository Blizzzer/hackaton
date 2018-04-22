import {AnswerStatisticResponse} from "./answerStatisticResponse";

export class Statistic {
public id: number;
  public text: string;
  public answersCount: number;
  public attendantsCount: number;
public answersStatistics: AnswerStatisticResponse[];
}
