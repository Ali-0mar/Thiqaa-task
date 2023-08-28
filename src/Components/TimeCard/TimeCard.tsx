import React from 'react';

interface TimeCardProps {
    timeRange: string
    clickHandler: () =>void
}
const TimeCard: React.FC<TimeCardProps> = ({ timeRange, clickHandler }) => {
    const [start, end] = timeRange?.split("-")
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                textAlign: "center",
                fontSize: "18px",
                marginRight: "10px"
            }}
            onClick={clickHandler}>
            <p>{`${start} - ${end}`}</p>
        </div>
    );
};

export default TimeCard;