
interface Time {
    hour: number;
    minute: number;
}

export function splitTimeRange(startTimeStr: string, endTimeStr: string): string[] {
    if(!startTimeStr || !endTimeStr) { return [] }
    const startTime: Time = parseTime(startTimeStr);
    const endTime: Time = parseTime(endTimeStr);

    const intervals: string[] = [];

    let currentHour: number = startTime.hour;
    let currentMinute: number = startTime.minute;

    while (currentHour < endTime.hour || (currentHour === endTime.hour && currentMinute <= endTime.minute)) {
        const intervalStart: string = formatTime({ hour: currentHour, minute: currentMinute });

        currentMinute += 60;
        if (currentMinute >= 60) {
            currentHour++;
            currentMinute -= 60;
        }

        const intervalEnd: string = formatTime({ hour: currentHour, minute: currentMinute });
        intervals.push(`${intervalStart}-${intervalEnd}`);
    }

    return intervals;
}

function parseTime(timeStr: string): Time {
    const [hourStr, minuteStr] = timeStr.split(':').map(part => parseInt(part, 10));
    return { hour: hourStr, minute: minuteStr };
}

function formatTime(time: Time): string {
    const formattedHour: string = String(time.hour).padStart(2, '0');
    const formattedMinute: string = String(time.minute).padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
}
