import {useEffect, useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ScheduleClass.scss';
import {splitTimeRange} from "../../Helpers/TimeHelpers";
import InstructorCard from "../../Components/InstructorCard/InstructorCard.tsx";
import TimeCard from "../../Components/TimeCard/TimeCard.tsx";
import {useUserContext} from "../../Context/AuthContext.tsx";
import ISession from "../../Interfaces/ISession.ts";
import IInstructor, {timeSlot} from "../../Interfaces/IInstructor.ts";
import instructors from "../../StaticData/Instructors.ts";
import {bookNewSessions, getInstructorSessions} from "../../Services/Sessions/SessionsService"
import {useNavigate} from "react-router-dom";
enum  daysOfWeek {
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "_",
  "saturday",
}


const BookingForm = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<IInstructor>();
  const [intervals, setIntervals] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const {activeUser} = useUserContext();
  const navigate = useNavigate();
  const handleInstructorSelect = (instructor: IInstructor) => {
    setIntervals([])
    setSelectedInstructor(instructor);
  }

  const filterDate = (date: Date): boolean =>{
    const day = new Date(date).getDay();
    const daysArr = selectedInstructor?.
                                  availableTimes.
                                  map((time: timeSlot) => daysOfWeek[time.day]) ?? [];
    return daysArr.includes(day)
  }
  const handleDatePickerChanged = (e: Date) => {
    console.log()
    const selectedDay: string = daysOfWeek[e.getDay()];
    setSelectedDate(e)
    calculateHours(selectedDay)
  }
  const calculateHours = (day: string ) =>{
    if(!selectedInstructor || !selectedDate) {
      return;
    }
    const availableTimes = selectedInstructor?.availableTimes.
              filter((time: timeSlot) =>time.day == day) ?? [];
    const [{start, end}] = availableTimes;
    const instructorIntervals = splitTimeRange(start, end);
    const instructorBookedSessions = getInstructorSessions(selectedInstructor.id, selectedDate).map((session)=>
      `${session.startTime}-${session.endTime}`
    );
    const availableInstructorIntervals = instructorIntervals.filter((interval: string)=>
        !instructorBookedSessions.includes(interval))
     setIntervals(availableInstructorIntervals);
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
      const sessionInfo: ISession = {
        instructorId: selectedInstructor!.id,
        // I Added the constructor name to the session entity for simplicity in the normal case I will store the id only
        // and populate the instructor using on the DB server or use provide in case I'm using GraphQL
        instructorName: selectedInstructor!.name,
        studentId: activeUser!.id!,
        sessionsDate: sessionDate,
        startTime: start,
        endTime: end
    }
      bookNewSessions(sessionInfo);
      navigate("/classes")
      console.log(sessionInfo)
  }
  useEffect(() => {
    if (selectedDate) {
      calculateHours(daysOfWeek[selectedDate.getDay()]);
    }
  }, [selectedDate]);
  return (
      <div className='booking-container'>
        <span> Please select an instructor:</span>
        <div className="instructors-container">
          {
            instructors && instructors.map((ins) => {
              return <InstructorCard
                  key={ins.id}
                  image={ins.image}
                  name={ins.name}
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