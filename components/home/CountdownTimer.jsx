import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
    const [time, setTime] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
    });
    const isMobile = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23;
                        if (days > 0) {
                            days--;
                        }
                    }
                }

                return { days, hours, minutes };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className={`flex ${
                isMobile ? "gap-2 text-sm" : "gap-4 text-lg"
            } items-center`}
        >
            <div className="flex items-center gap-1">
                <span className="font-bold text-white py-1 px-2 bg-primary rounded-md">
                    {String(time.days).padStart(2, "0")}
                </span>
                <span className="text-text-primary font-bold text-xs">
                    Days
                </span>
            </div>
            <span className="font-black">:</span>
            <div className="flex items-center gap-1">
                <span className="font-bold  text-white py-1 px-2 bg-primary rounded-md">
                    {String(time.hours).padStart(2, "0")}
                </span>
                <span className="text-text-primary font-bold text-xs">
                    Hours
                </span>
            </div>
            <span className="font-black">:</span>
            <div className="flex items-center gap-1">
                <span className="font-bold  text-white py-1 px-2 bg-primary rounded-md">
                    {String(time.minutes).padStart(2, "0")}
                </span>
                <span className="text-text-primary font-bold text-xs">
                    Minutes
                </span>
            </div>
        </div>
    );
}
