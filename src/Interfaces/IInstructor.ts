export interface timeSlot {
  day: string,
  start: string,
  end: string
}
export default interface IInstructor {
  id: number,
  name: string,
  image: string,
  availableTimes: timeSlot[]
}