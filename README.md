    
                                Thiqaa Tutoring Application
- Steps to run the application:
    1- Clone the repo to you local machine
    2- (npm install )to install dependencies.
    3- npm run dev will run the application on http://localhost:5173/

  - Keynotes about the application:
      1- I wanted to build the backend also but duo to lack of time I've built only the front-end and used the browser localStorage API for string data (Another valid approach would been to use an in-memory solution like Redi).
      2- I modeled the data used in the application for simplicity as follows:

        The student entity: 
        { 
        id,
        studentName,
        userName,
        password,
        // Here should go additional information about the student
        };
  
        The Instructor entity: 
         {
            id: number,
            name: string,
            image: string,
            availableTimes: {
            day: string,
            start: string,
            end: string
            }
        }
  
        The session entity:
        {
          instructorId: number;
          // I added the instructor name here to make things a bit easier in the normal cases I will store only the instructor id and when the front-end requests the session data it will be populated with instructor info 
          instructorName: string;
          studentId: number,
          sessionsDate: Date;
          startTime: string;
          endTime: string
        }

My Notes on the application: 

    Technical Notes:
        1- I built a couple of custom components and used different styling techniques such as Styled Components that needs some refactoring to be as general as possible so here is a list of the components and what I think still needs:
            * The table component: I used the idea of Angular templating in creating components where I split the component to small main elements such as a TableRow, TableCell
              the table takes as input the data and the column interface, and it maps the fields in the columns interface to the data
              It also has a render function on each cell that can be used to manipulate data before displaying it in the table
              I got the idea from a component I built previously using angular and PrimeNG
              To enhance the component further I will make it accepts a config input that is responsible for displaying the columns and at the same time make the constructs the query to fetch the data from the backend
              with this approach the table will have an internal state so in cases like network errors, no data the table will be responsible for dealing with them.
              Also I would add a kind of row mutator so the user can perform actions on the each row.
            * The Form Component: The form component utilizes the children props to encapsulate the shared logic across all the forms in the application.
              I would refactor it a bit to make the form also accepts a mutation config to make the form capable of sending mutations requests to the back-end and also deal with it;s internal state such as errors and validation.
            * Duo to time limitation error handling is not well implemented and there are some code duplication that can be enhanced.

    Business Logic Notes:
        1- I split the instructor time into intervals that represents a session duration each one is one hour long I would probaly make it more flexible so the there will be other standard duration options.
        2- When the student opens the booking form currently I'm filtering based on the teacher avialable times in the future we should add a reschudule functionality and when a student's session times overlap show a warning to force the student to take actions
        3- When a teacher has not times left in a specific day I will disable selecting the day from the calender or show a message that states no times available 
