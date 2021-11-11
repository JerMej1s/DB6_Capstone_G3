import { DatePipe } from "@angular/common";

export interface Event {
  idEvent: number,
  idUser: number,
  eventName: string,
  date: DatePipe,
  city: string,
  state: string
}
