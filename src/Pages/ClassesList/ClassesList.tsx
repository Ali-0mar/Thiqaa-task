import "@fontsource/anek-telugu";
// import { styled } from "@stitches/react";
import "./ClassessList.scss"
import { Table, IColumnType } from "../../Components/Table/Table";
import {useNavigate} from "react-router-dom";
import {getStudentSessions} from "../../Services/Sessions/SessionsService";
import {useEffect, useState} from "react";
import ISession from "../../Interfaces/ISession.ts";
import {useUserContext} from "../../Context/AuthContext.tsx";
const ClassesList = () => {
    const [classes, setClasses]=  useState<ISession[]>([]);
    const {activeUser}= useUserContext();
    const navigate = useNavigate();
    const handleNavigate = ()=> {
        navigate("/new-session")
    }


    const columns: IColumnType<ISession>[] = [
        {
            key: "instructorName",
            title: "Instructor Name",
            width: 200,
        },
        {
            key: "sessionDate",
            title: "Session Date",
            width: 200,
            render: (_,i) => {
                return new Date(i.sessionsDate).toLocaleDateString()
            }
        },
        {
            key: "time",
            title: "Time",
            width: 200,
            render: (_,i) =>{
                return `${i.startTime} - ${i.endTime}`
            }
        },
    ];


    useEffect(() =>{
        if(activeUser && activeUser.id !==  undefined) {
            const sessions = getStudentSessions(activeUser.id);
            setClasses(sessions);
        }
    },[])
    return (
        <div className="classes-list-page">
            <div className='header-3'>
                <h3>Your upcoming classes: </h3>
            </div>
            <div className="table-container">
                <Table data={classes} columns={columns} />
            </div>
            <div className="button-container">
                <button
                  onClick={handleNavigate}
                  className="btn"
                >Book another class</button>
            </div>
        </div>
    )
};

export default ClassesList;