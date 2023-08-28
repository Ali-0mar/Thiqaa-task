import "@fontsource/anek-telugu";
// import { styled } from "@stitches/react";
import "./ClassessList.scss"
import { Table, IColumnType } from "../../Components/Table/Table";
import {useNavigate} from "react-router-dom";
const ClassesList = () => {
const navigate = useNavigate();
    const handleNavigate = ()=> {
        navigate("/new-session")
    }
    interface IData {
        subject: string;
        instructor: string;
        day: string;
        time: string
    }

    // const Span = styled("span", {
    //     background: "#596b7e",
    //     color: "white",
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     borderRadius: 99999,
    // });

    const columns: IColumnType<IData>[] = [
        {
            key: "subject",
            title: "Subject",
            width: 200,
        },
        {
            key: "instructor",
            title: "Instructor",
            width: 200,
        },
        {
            key: "day",
            title: "Day",
            width: 200,
        },
        {
            key: "time",
            title: "Time    ",
            width: 200,
        },
    ];

    const data: IData[] = [
        {
            subject: "Math",
            instructor: "Francisco Mendes",
            day: "Monday 28-8-2023",
            time: '11:00 - 12:00'
        },
        {
            subject: "English",
            instructor: "Francisco Mendes",
            day: "Monday 28-8-2023",
            time: '12:00 - 13:00'
        },
        {
            subject: "Physics",
            instructor: "Francisco Mendes",
            day: "Monday 28-8-2023",
            time: '13:00 - 14:00'
        },
    ];

    return (
        <div className="classes-list-page">
            <div className='header-3'>
                <h3>Your upcoming classes: </h3>
            </div>
            <div className="table-container">
                <Table data={data} columns={columns} />
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