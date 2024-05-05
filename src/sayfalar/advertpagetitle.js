import { Divider, Grid } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
function Advertpagetitle({ title }) {

    const [faceopen, setFaceopen] = useState("")
    const [Xopen, setXopen] = useState("")
    const [Epostaopen, setEpostaopen] = useState("")


    let underline = (e) => {
        e.target.style.textDecoration = "underline"
    }
    let notunderline = (e) => {
        e.target.style.textDecoration = "none"
    }



    return (
        <Grid container sx={12} style={{ paddingTop: "0px", width: "100%", height: "60px", display: "flex", justifyContent: "space-between" }}>
            <Grid xs={4.5} style={{ marginLeft: "250px", width: "500px", fontSize: "30px", textAlign: "center", marginTop: "5px" }}>
                <label>{title}</label>
            </Grid>
            <Grid container xs={4.5} sx={{}}>
                <Grid item xs={2.7} sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <StarIcon style={{ fontSize: "small" }} />
                    <button onMouseOver={underline} onMouseLeave={notunderline} style={{ border: "none", color: "#00339F", fontSize: "12px", backgroundColor: "white" }}>Favorilerime Ekle</button>
                </Grid>
                <Grid item xs={3} sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <PrintIcon />
                    <button onMouseOver={underline} onMouseLeave={notunderline} style={{ border: "none", color: "#00339F", fontSize: "12px", backgroundColor: "white" }}>Yazdır</button>
                </Grid>
                <Grid item xs={3} sx={{ gap: "20px", width: "100%", display: "flex", alignItems: "center" }}>
                    <FacebookIcon onMouseOver={() => setFaceopen(true)} onMouseLeave={() => setFaceopen(false)} style={{ cursor: "pointer", }}></FacebookIcon>
                    {faceopen && <button style={{ border: "1px solid", backgroundColor: "white", position: "absolute", marginBottom: "90px", marginLeft: "-50px", width: "130px", height: "30px", fontSize: "12px" }}>Facebook ile paylaş</button>}
                    <XIcon onMouseOver={() => setXopen(true)} onMouseLeave={() => setXopen(false)} style={{ fontSize: "large" }} />
                    {Xopen && <button style={{ border: "1px solid", backgroundColor: "white", position: "absolute", marginBottom: "90px", marginLeft: "-15px", width: "130px", height: "30px", fontSize: "12px" }}>X ile paylaş</button>}

                    <EmailIcon onMouseOver={() => setEpostaopen(true)} onMouseLeave={() => setEpostaopen(false)} />
                    {Epostaopen && <button style={{ border: "1px solid", backgroundColor: "white", position: "absolute", marginBottom: "90px", marginLeft: "25px", width: "130px", height: "30px", fontSize: "12px" }}>Eposta ile gönder</button>}

                </Grid>

            </Grid>
            <Divider sx={12} style={{ width: "1300px", marginLeft: "330px" }}></Divider>
        </Grid>
    )

} export default Advertpagetitle