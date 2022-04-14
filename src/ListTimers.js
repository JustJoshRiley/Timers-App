import React from "react";
import { useSelector } from "react-redux";
import TimerView from "./TimerView";

export default function ListTimers() {
    const timers = useSelector(state => state.timers)
    return (
        <div>
            {timers.map((timer, index) => {
                return (
                    <TimerView
                        key={`timer-${index}`}
                        timer={timer}
                        index={index}
                    />
                )
            })}
        </div>
    )
}