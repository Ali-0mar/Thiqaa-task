import  { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ScheduleClass.scss';
import {splitTimeRange} from "../../Helpers/TimeHelpers";
import InstructorCard from "../../Components/InstructorCard/InstructorCard.tsx";
import TimeCard from "../../Components/TimeCard/TimeCard.tsx";
import {useUserContext} from "../../Context/AuthContext.tsx";
interface IInstructor {id: number, value: string, label: string, image: string, availableTimes: object[]};
const instructors: IInstructor[] = [
  {
    id: 0,
    value: 'instructor1',
    label: 'Instructor 1',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '11:00',
        to: '21:00'
      },
      {
        day: 'sunday',
        start: '11:00',
        to: '21:00'
      },
      {
        day: 'monday',
        start: '11:00',
        to: '21:00'
      },
      {
        day: 'tuesday',
        start: '11:00',
        to: '21:00'
      },
      {
        day: 'wednesday',
        start: '11:00',
        to: '21:00'
      },
      {
        day: 'thursday',
        start: '11:00',
        to: '21:00'
      },
    ]
  },
  {
    id: 1,
    value: 'instructor2',
    label: 'Instructor 2',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '16:00',
        to: '21:00'
      },
      {
        day: 'sunday',
        start: '16:00',
        to: '21:00'
      },
      {
        day: 'monday',
        start: '16:00',
        to: '21:00'
      },
      {
        day: 'tuesday',
        start: '16:00',
        to: '21:00'
      },
      {
        day: 'wednesday',
        start: '16:00',
        to: '21:00'
      },
      {
        day: 'thursday',
        start: '16:00',
        to: '21:00'
      },
    ]
  },
  {
    id: 2,
    value: 'instructor3',
    label: 'Instructor 3',
    image: "user",
    availableTimes: [
      {
        day: 'saturday',
        start: '10:00',
        to: '22:00'
      },
      {
        day: 'monday',
        start: '17:00',
        to: '23:00'
      },
      {
        day: 'tuesday',
        start: '17:00',
        to: '23:00'
      },
      {
        day: 'wednesday',
        start: '17:00',
        to: '23:00'
      },
    ]
  }
];

const  daysOfWeek = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  6: "saturday",
  }


const BookingForm = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<IInstructor>();
  const [intervals, setIntervals] = useState([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const {activeUser} = useUserContext();
  const handleInstructorSelect = (e) => {
    setIntervals([])
    setSelectedInstructor(e);
  }

  const filterDate = (date: Date) =>{
    const day = new Date(date).getDay();
    return day != 5 && (selectedInstructor &&
        !selectedInstructor?.availableTimes.map((time: any) => daysOfWeek[time.day]).includes(day)
    )
  }
  const handleDatePickerChanged = (e: Date) => {
    setSelectedDate(e)
    const selectedDay: string = daysOfWeek[e.getDay()];
    calculateHours(selectedDay)
  }
  const calculateHours = (day: string ) =>{
    const [{start, to}] = selectedInstructor && selectedInstructor.availableTimes.filter((time: any) =>time.day == day
    );
     setIntervals(splitTimeRange(start, to));
    console.log(intervals)
  }
  const handleTimeChange = (interval: string) => {
    const [start, end] = interval.split("-");
    const sessionDate = new Date(
        selectedDate!.getFullYear(),
        selectedDate!.getMonth(),
        selectedDate?.getDate(),
        parseInt(start)
    )
    console.log(activeUser)
    const sessionInfo = {
      instructorId: selectedInstructor?.id,
      studentId: activeUser?.id,
      date: sessionDate,
      start,
      end

    }
    console.log(sessionInfo)
  }
  return (
      <div className='booking-container'>
        <span> Please select an instructor:</span>
        <div className="instructors-container">
          {
            instructors && instructors.map((ins) => {
              return <InstructorCard
                  image={ins.image}
                  name={ins.label}
                  clickHandler={() =>handleInstructorSelect(ins)}
              />
              })
          }
        </div>
        <div className="dates">
          <div className="datePicker-container">
            {
              selectedInstructor &&
                  <ReactDatePicker
                      onChange={handleDatePickerChanged}
                      filterDate={filterDate}
                      minDate={new Date()}
                      inline
                      showDisabledMonthNavigation
                  />
            }
          </div>
          <div className="intervals-container">
          {
            intervals && intervals.map((interval: string) =>{
              return <TimeCard key={interval} timeRange={interval} clickHandler={() => handleTimeChange(interval)} />
              } )
          }
        </div>
        </div>
      </div>
  );
};

export default BookingForm;