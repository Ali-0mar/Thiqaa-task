import IInstructor from "../Interfaces/IInstructor.ts";

const instructors: IInstructor[] = [
  {
    id: 0,
    name: 'Instructor1',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '11:00',
        end: '21:00'
      },
      {
        day: 'sunday',
        start: '11:00',
        end: '21:00'
      },
      {
        day: 'monday',
        start: '11:00',
        end: '21:00'
      },
      {
        day: 'tuesday',
        start: '11:00',
        end: '21:00'
      },
      {
        day: 'wednesday',
        start: '11:00',
        end: '21:00'
      },
      {
        day: 'thursday',
        start: '11:00',
        end: '21:00'
      },
    ]
  },
  {
    id: 1,
    name: 'Instructor2',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '16:00',
        end: '21:00'
      },
      {
        day: 'sunday',
        start: '16:00',
        end: '21:00'
      },
      {
        day: 'monday',
        start: '16:00',
        end: '21:00'
      },
      {
        day: 'tuesday',
        start: '16:00',
        end: '21:00'
      },
      {
        day: 'wednesday',
        start: '16:00',
        end: '21:00'
      },
      {
        day: 'thursday',
        start: '16:00',
        end: '21:00'
      },
    ]
  },
  {
    id: 2,
    name: 'Instructor3',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '10:00',
        end: '22:00'
      },
      {
        day: 'monday',
        start: '17:00',
        end: '23:00'
      },
      {
        day: 'tuesday',
        start: '17:00',
        end: '23:00'
      },
      {
        day: 'wednesday',
        start: '17:00',
        end: '23:00'
      },
    ]
  }
];
export default instructors