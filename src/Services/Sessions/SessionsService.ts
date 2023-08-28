interface ISession {
    instructorId: string;
    studentId: string;
    sessionsDate: Date;
    startTime: string;
    endTime: string
}
const getAllSessions = () => {
    const allSessions = localStorage.getItem("sessions");
    return allSessions ?  JSON.parse(allSessions) : []
};

const bookNewSessions  = (sessionInfo: ISession) =>{
    const sessions = [...getAllSessions(), sessionInfo];
    localStorage.setItem(
        "sessions",
        JSON.stringify(sessions)
        );
    return sessions;
}
export {getAllSessions, bookNewSessions}