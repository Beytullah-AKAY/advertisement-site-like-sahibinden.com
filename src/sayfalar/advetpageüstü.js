import { Grid } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

function Advertpageüstü({ title }) {
    const [vasitaBackground, setVasitaBackground] = useState("#F2F2F2");
    const [EmlakBackground, setEmlakBackground] = useState("#F2F2F2");
    const [vasitaOpen, setVasitaOpen] = useState(false);
    const [emlakOpen, setEmlakOpen] = useState(false);
    const [arrowDisplay, setArrowDisplay] = useState("flex");
    const [arrowDisplay2, setArrowDisplay2] = useState("none");
    const [arrowDisplay3, setArrowDisplay3] = useState("flex");
    const [arrowDisplay4, setArrowDisplay4] = useState("none");

    const handleVasitaOver = () => {
        setVasitaBackground("white");
        setArrowDisplay("none");
        setArrowDisplay2("flex");
        setVasitaOpen(true);
    };

    const handleVasitaOut = () => {
        setVasitaBackground("#F2F2F2");
        setArrowDisplay("flex");
        setArrowDisplay2("none");
        setVasitaOpen(false);
    };
    const handleEmlakOver = () => {
        setEmlakBackground("white");
        setArrowDisplay3("none");
        setArrowDisplay4("flex");
        setEmlakOpen(true);

    };

    const handleEmlakOut = () => {
        setEmlakBackground("#F2F2F2");
        setArrowDisplay4("none");
        setArrowDisplay3("flex");
        setEmlakOpen(false);

    };

    const handleLiOver = (e) => {
        e.target.style.textDecoration = "underline";
    };

    const handleLiOut = (e) => {
        e.target.style.textDecoration = "none";
    };

    let underline = (e) => {
        e.target.style.textDecoration = "underline"
    }
    let notunderline = (e) => {
        e.target.style.textDecoration = "none"
    }



    return (
        <Grid container xs={12} style={{ backgroundColor: "#F2F2F2", width: "100%", height: "30px", display: "flex", justifyContent: "center" }}>
            <Grid container xs={8.3} style={{ width: "100%", height: "30px", marginLeft: "45px", }}>
                <Grid item xs={0.7} style={{ backgroundColor: vasitaBackground, position: "relative", width: "10%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                        onMouseOver={handleVasitaOver}
                        onMouseOut={handleVasitaOut}
                        style={{ fontSize: "12px", position: "absolute", border: "none", backgroundColor: "transparent" }}
                    >
                        Vasıta
                    </button>
                    <KeyboardArrowRightIcon style={{ fontSize: "large", position: "relative", marginLeft: "50px", color: "#003399", display: arrowDisplay }} />
                    <KeyboardArrowDownIcon style={{ fontSize: "large", position: "absolute", marginLeft: "50px", color: "#003399", display: arrowDisplay2 }} />
                    {vasitaOpen && (
                        <div onMouseOver={handleVasitaOver} onMouseOut={handleVasitaOut} style={{ position: "absolute", width: "250px", top: "25px", marginRight: "-183px", backgroundColor: "#fff", border: "1px solid #ccc", borderTop: "none", padding: "5px", zIndex: 999 }}>
                            <ul style={{ listStyle: "none", margin: "0", padding: "0", textAlign: "left" }}>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Emlak</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Vasıta</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Yedek parça</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>İkinci el ve 0 alışveriş</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Vİş Makineleri & Sanayi</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Ustalar ve Hizmetler</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Özel Ders Verenler</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>İş İlanları</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Yardımcı Arayanlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Hayvanlar Alemi</li>
                            </ul>
                        </div>
                    )}
                </Grid>
                <Grid item xs={0.7} style={{ backgroundColor: EmlakBackground, position: "relative", width: "10%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                        onMouseOver={handleEmlakOver}
                        onMouseOut={handleEmlakOut}
                        style={{ fontSize: "12px", position: "absolute", border: "none", backgroundColor: "transparent" }}
                    >
                        emlak
                    </button>
                    <KeyboardArrowRightIcon style={{ fontSize: "large", position: "relative", marginLeft: "50px", color: "#003399", display: arrowDisplay3 }} />
                    <KeyboardArrowDownIcon style={{ fontSize: "large", position: "absolute", marginLeft: "50px", color: "#003399", display: arrowDisplay4 }} />
                    {emlakOpen && (
                        <div onMouseOver={handleEmlakOver} onMouseOut={handleEmlakOut} style={{ position: "absolute", width: "250px", top: "25px", marginRight: "-183px", backgroundColor: "#fff", border: "1px solid #ccc", borderTop: "none", padding: "5px", zIndex: 999 }}>
                            <ul style={{ listStyle: "none", margin: "0", padding: "0", textAlign: "left" }}>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Otomobil</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Arazi,SUV</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Motosiklet</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Minivan</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Ticari Araçlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Elektrikli Araçlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Kiraliık Araçlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Deniz Araçlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Hasarlı Araçlar</li>
                                <li onMouseOver={handleLiOver} onMouseOut={handleLiOut} style={{ color: "#003399", marginBottom: "8px" }}>Karavan</li>
                            </ul>
                        </div>
                    )}

                </Grid>
                <Grid item xs={1.3} style={{ backgroundColor: EmlakBackground, position: "relative", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button

                        style={{ fontSize: "12px", position: "absolute", border: "none", backgroundColor: "transparent" }}
                    >
                        {title}
                    </button>
                    <KeyboardArrowRightIcon style={{ fontSize: "large", position: "relative", marginLeft: "75px", color: "#003399", display: "flex" }} />


                </Grid>
            </Grid>
            <Grid container xs={3.5} style={{ height: "30px", position: "absolute", marginLeft: "850px" }}>
                <Grid onMouseOver={underline} onMouseOut={notunderline} style={{ alignItems: "center", display: "flex", color: "#003399" }}><button style={{ color: "#003399", border: "none" }}>Favori İlanlarım</button></Grid>
                <Grid onMouseOver={underline} onMouseOut={notunderline} style={{ alignItems: "center", display: "flex", color: "#003399" }}><button style={{ color: "#003399", border: "none" }}>Favori Aramalarım</button></Grid>
                <Grid onMouseOver={underline} onMouseOut={notunderline} style={{ alignItems: "center", display: "flex", color: "#003399" }}><button style={{ color: "#003399", border: "none" }}>Sizin İçin Seçilmiş Reklamlar</button></Grid>
                <Grid onMouseOver={underline} onMouseOut={notunderline} style={{ alignItems: "center", display: "flex", color: "#003399" }}><button style={{ color: "#003399", border: "none" }}>Reklamları Karşılaştır</button></Grid>

            </Grid></Grid>
    );
}

export default Advertpageüstü;
