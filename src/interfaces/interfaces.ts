export interface IEvent {
  name:string,
  date:string,
  time:string,
  location:string,
  description:string,
  assist: Asisst[],
}

interface Asisst {
  name:string,
  surname:string,
}