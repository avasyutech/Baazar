import React, { useState, useEffect } from "react";
import "./Countdown-clock.scss";

function CountdownClock(props) {
    const targetDate = props.targetDate;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [IntervalId,setIntervalId] = useState(null)

    useEffect(() => {
        if (targetDate) {
            const startCountdown = () => {
                setInterval(() => {
                    const now = new Date();
                    const inputTime = new Date(targetDate)
                    const timeDifference = inputTime.getTime() - now.getTime();

                    if (timeDifference <= 0) {
                        setDays(0);
                        setHours(0);
                        setMinutes(0);
                        setSeconds(0);
                    } else {
                        const totalSeconds = Math.floor(timeDifference / 1000);
                        setDays(Math.floor(totalSeconds / (60 * 60 * 24)));
                        setHours(
                            Math.floor(
                                (totalSeconds % (60 * 60 * 24)) / (60 * 60)
                            )
                        );
                        setMinutes(Math.floor((totalSeconds % (60 * 60)) / 60));
                        setSeconds(totalSeconds % 60);
                    }
                }, 1000);
            };

            startCountdown();
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(setIntervalId);
    }, [targetDate]);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num)

    return (
        <div className="count-down-blk">
            <span className="count-down-item body-medium-400">{formatNumber(days)}d</span>
            <span className="count-down-item body-medium-400">:</span>
            <span className="count-down-item body-medium-400">{formatNumber(hours)}h</span>
            <span className="count-down-item body-medium-400">:</span>
            <span className="count-down-item body-medium-400">{formatNumber(minutes)}m</span>
            <span className="count-down-item body-medium-400">:</span>
            <span className="count-down-item body-medium-400">{formatNumber(seconds)}s</span>
        </div>
    );
}

export default CountdownClock;
