import {Answer} from "./answer";

export class DownloadedQuestion {
  public id: number;
  public content: string;
  public published: number;
  public lectureId: number;
  public answers: Answer[];
}
