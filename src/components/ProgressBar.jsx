import {useEffect, useState} from "react";

export default function ProgressBar({timer, freq}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - freq);
        }, freq);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<progress value={remainingTime} max={timer}/>);

}