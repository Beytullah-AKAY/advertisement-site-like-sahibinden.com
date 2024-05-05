import "./App.css";
import { Grid } from "@mui/material";
import Homepage from "./sayfalar/homepage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function İlanver() {
    const [useeffectkontor, Setuseeffectkontro] = useState(false)
    const [hesapadikontrol, setHesapadıkontrol] = useState("")

    const { state } = useLocation()
    let { hesapadi } = state || {}

    useEffect(() => {
        console.log("useeffect")

        girişçikişyap()
    }, [useeffectkontor])

    let girişçikişyap = () => {


        if (hesapadi !== null) {
            if(hesapadi==="çık"){
                setHesapadıkontrol("")
            }
            else{
            console.log(hesapadi)

            console.log("ifteyiz")
            setHesapadıkontrol(hesapadi)
            console.log(hesapadikontrol)

            Setuseeffectkontro(true)

            }
        } else {
            console.log("naberyaaaaa")
        }

    }




    return (
        <Grid container>
            <Grid item xs={12}>
                <Homepage hesapadi={hesapadikontrol} />
            </Grid>
            <Grid
                item
                xs={12}
                style={{}}
            ></Grid>
        </Grid>
    );
}


export default İlanver;
