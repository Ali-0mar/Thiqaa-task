import ISession from "../../Interfaces/ISession.ts"
const getAllSessions = (): ISession[] => {
    const allSessions = localStorage.getItem("sessions");
    if(!allSessions) { return []; }
    return JSON.parse(allSessions)
};
const getStudentSessions = (id: number): ISession[] => {
    const allSessions = getAllSessions();
    return allSessions.filter((session: ISession) => session.studentId == id);
};
const getInstructorSessions = (id: number, sessionDate: Date): ISession[] => {
    const allSessions = getAllSessions();
    return allSessions.filter((session: ISession) =>
        session.instructorId == id && sessionDate.toDateString() == new Date(session.sessionsDate).toDateString()
    );
};
const bookNewSessions  = (sessionInfo: ISession) =>{
    const sessions = [...getAllSessions(), sessionInfo];
    localStorage.setItem(
        "sessions",
        JSON.stringify(sessions)
        );
    return sessions;
}
export {
    getAllSessions,
    bookNewSessions,
    getStudentSessions,
    getInstructorSessions
}