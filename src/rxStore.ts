import { BehaviorSubject } from "rxjs";

const initialHistory = [Array(9).fill("")];
export const historyStream = new BehaviorSubject<string[][]>(initialHistory);

export const currentMoveStream = new BehaviorSubject<number>(0);
