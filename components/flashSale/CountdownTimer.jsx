"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ hours, minutes, seconds }) {
    const [time, setTime] = useState({
        hours,
        minutes,
        seconds,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if (time.seconds > 0) {
                setTime((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
            } else if (time.minutes > 0) {
                setTime((prev) => ({
                    minutes: prev.minutes - 1,
                    seconds: 59,
                    hours: prev.hours,
                }));
            } else if (time.hours > 0) {
                setTime((prev) => ({
                    hours: prev.hours - 1,
                    minutes: 59,
                    seconds: 59,
                }));
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-xl font-bold">
                        {String(time.hours).padStart(2, "0")}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Hours</span>
                </div>
                <span className="mx-1 text-xl font-bold text-gray-900">:</span>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-xl font-bold">
                        {String(time.minutes).padStart(2, "0")}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Min</span>
                </div>
                <span className="mx-1 text-xl font-bold text-gray-900">:</span>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-xl font-bold">
                        {String(time.seconds).padStart(2, "0")}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">Sec</span>
                </div>
            </div>
        </div>
    );
}
