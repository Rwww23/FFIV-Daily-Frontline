//to review
//先美化、公开之后再做订阅吧
import fs from "fs";
import { frontlineALL, getMap, baseDate } from "../utils/getMap";

const events = frontlineALL.map((_, index) => {
    const startDate = new Date(baseDate);
    startDate.setDate(startDate.getDate() + index);

    const dtStart = startDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(".000", "");

    return `BEGIN:VEVENT
UID:frontline-${index}@ffiv-daily
DTSTAMP:20260907T000000Z
DTSTART:${dtStart}
SUMMARY:${getMap(startDate)}
RRULE:FREQ=DAILY;INTERVAL=8
END:VEVENT`;
});

const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//FFIV Daily Frontline//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events.join("\n")}
END:VCALENDAR
`;

fs.writeFileSync("public/calendar.ics", ics);
