import { Grid } from "@mui/material";
import "./textvideo.css";
import { useEffect, useState } from "react";
import { Gradient } from "@mui/icons-material";

function Textvideo() {
    const [playsecondanimatin, setPlaysecondanimatin] = useState(false);
    const [playThirdAnimation, setPlayThirdAnimation] = useState(false);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setPlaysecondanimatin(true);
        }, 0);
        const intervalId1 = setInterval(() => {
            setPlayThirdAnimation(true);
        }, 0);

        return () => clearInterval(intervalId); // Interval'i temizle
    }, []);

    return (
        <Grid container xs={12} className="text-video-container" style={{ background: 'linear-gradient(to right bottom,#F1D816, #FFEF8C)' }}>

            <p className="movin-text">2.el alışverişte</p>
            {playsecondanimatin && <p className="movin-text2">KOMİSYON</p>}
            {playThirdAnimation && <p className="movin-text3">YOK!</p>}

        </Grid>
    );
}

export default Textvideo;
