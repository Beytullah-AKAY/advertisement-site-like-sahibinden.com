import { Divider, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Üstgövde from "../üstgövdem/üstgövde";
import Advertpageüstü from "./advetpageüstü";
import Advertpagetitle from "./advertpagetitle";
import { useState } from "react";
import Advertpagedetails from "./advertpagedetail";
import Enalt from "../sayfaaltı/enalt";

const Advertpage = () => {
    const { state } = useLocation();
    const { url, title,hesapadi } = state;
    const urldizi = [url];
   

    const [detail, setDetails] = useState({
        subDetails: [
            { title: "İlan No", value: "1525253" },
            { title: "İlan Tarihi", value: "04 mart 2024" },
            { title: "Araç tipi", value: "Panelvan" },
            { title: "Kimden", value: "Cüneyt'ten" },
        ],
        technicalProperties: [
            { title: "Araç Tipi", value: "SUV / Arazi aracı / I Segment" },
            { title: "Kasa Tipi / Kapı Sayısı", value: "SUV / 5 Kapı" },
            { title: "Motor Tipi", value: "Dizel / 6 silindir" },
            { title: "Üretim Yılı (İlk / Son)", value: "2013 / 2018" },
        ],
        description: "Bu fiyata piyasanın en uygun en temiz aracı, Absürd teklifler etmeyin lütfen Muayene 2025 mart ayına kadar vardır. Ses sistemi mevcuttur. Şimdiden hayırlı olsun",
    });

    const [button1Clicked, setButton1Clicked] = useState(false);
    const [button2Clicked, setButton2Clicked] = useState(false);
    const [button1Hovered, setButton1Hovered] = useState(false);
    const [button2Hovered, setButton2Hovered] = useState(false);
    const [ilandetayi, setİlandetayi] = useState(true)
    const [Konumu, setKonumu] = useState(false)


    const handleButton1Click = () => {
        if (button2Clicked) {

            console.log(hesapadi)
            console.log(url)
            console.log(title)

            setButton2Clicked(!button2Clicked);
            setButton1Clicked(true); // Diğer butonun tıklanmış durumunu sıfırla
            setİlandetayi(true)
            setKonumu(false)
            console.log("naber1")

        } else {
            console.log("nabernot1")
            setButton1Clicked(!button1Clicked);

        }
    };

    const handleButton2Click = () => {
        if (button1Clicked) {
            setButton1Clicked(!button1Clicked);
            setButton2Clicked(true); // Diğer butonun tıklanmış durumunu sıfırla
            setİlandetayi(false)
            console.log("naber2")
            setKonumu(true)


        } else {
            setButton2Clicked(!button2Clicked);
            setİlandetayi(false)
            setKonumu(true)
            console.log("nabernot2")



        }
    };
    const handleButton1HoverEnter = () => {
        setDetails(detail)
        setButton1Hovered(true);
    };

    const handleButton1HoverLeave = () => {
        setButton1Hovered(false);
    };

    const handleButton2HoverEnter = () => {
        setButton2Hovered(true);
    };

    const handleButton2HoverLeave = () => {
        setButton2Hovered(false);
    };

    return (
        <Grid container style={{ width: "100%", }}>
            <Grid item xs={12} style={{}}>
                <Üstgövde hesapadi={hesapadi} />
                <Advertpageüstü title={title} />
                <Advertpagetitle title={title} />
            </Grid>
            <Grid container sx={{  marginTop: "10px",height:"430px" }}>
                <Grid item xs={2.1} ></Grid>
                <Grid item xs={8.3} sx={{  display: "flex" }}>
                    {urldizi.map((url, index) => (
                        <Grid key={index} container xs={4} >
                            <img src={url} alt={title} style={{ width: "100%", height: "auto" }} />
                            {[...Array(3)].map((_, i) => (
                                <Grid key={i} item xs={2} sx={{ width: "250px", display: "flex", alignItems: "center", marginLeft: "5px" }} >
                                    <img style={{ height: "90%", width: "90%", objectFit: "cover" }} src={url} alt={`Thumbnail ${i}`} />
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                    <Grid container item xs={3} sx={{marginLeft:"30px"}}>
                        <Advertpagedetails detail={detail.subDetails} />
                    </Grid>
                    <Grid container item xs={3} sx={{}}>
                        {/* <Advertpagedetails detail={detail.subDetails} /> */}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ width: "100%", height: "30px", }}></Grid>
            <Grid container sx={{ marginTop:"80px",width: "100%", display: "flex", flexDirection: "column" }}>
                <Grid item xs={9} sx={{ display: "flex", marginLeft: "360px", gap: "20px" }}>
                    <button
                        onClick={handleButton1Click}
                        onMouseEnter={handleButton1HoverEnter}
                        onMouseLeave={handleButton1HoverLeave}
                        style={{
                            backgroundColor: button1Clicked ? '#FFD900' : (button1Hovered ? 'white' : '#F8F8F8'),
                            pointerEvents: button1Clicked ? 'none' : 'auto',
                            fontSize: '18px',
                            width: '130px',
                            height: '50px',
                            color: '#1064BC',
                            border: '1px solid',
                            cursor: 'pointer'
                        }}
                    >
                        İlan Detayları
                    </button>
                    <button
                        onClick={handleButton2Click}
                        onMouseEnter={handleButton2HoverEnter}
                        onMouseLeave={handleButton2HoverLeave}
                        style={{
                            backgroundColor: button2Clicked ? '#FFD900' : (button2Hovered ? 'white' : '#F8F8F8'),
                            pointerEvents: button2Clicked ? 'none' : 'auto',
                            fontSize: '18px',
                            width: '130px',
                            height: '50px',
                            color: '#1064BC',
                            border: '1px solid',
                            cursor: 'pointer'
                        }}
                    >
                        Konumu
                    </button>
                </Grid>
                <Divider xs={4} style={{ width: "69%", marginLeft: "340px", border: "1px solid #FFC000" }} />

            </Grid>
            {ilandetayi && <Grid container sx={{ display: "flex", marginTop: "5px" }}>
                <Grid item xs={2.2} style={{}}></Grid>
                <Grid xs={8.2} style={{ backgroundColor: "white", border: "1px solid #ccc" }}>
                    <Grid item style={{ border: "1px solid #ccc", backgroundColor: "#F5F5F5" }} ><Typography style={{ paddingLeft: "10px" }}>Açıklama</Typography>
                    </Grid>
                    <Grid style={{ height: "500px", margin: "30px 0px 0px 30px" }} >
                        {detail.description}
                    </Grid>
                </Grid>
            </Grid>}
            {Konumu && <Grid container sx={{ display: "flex", marginTop: "5px" }}>
                <Grid item xs={2.2} style={{}}></Grid>
                <Grid xs={9} style={{ backgroundColor: "white", border: "1px solid #ccc" }}>
                    <Grid style={{ height: "500px", margin: "30px 0px 0px 30px" }} >
                        harita
                    </Grid>
                </Grid>
            </Grid>}
            <Enalt></Enalt>
        </Grid>

    );
}

export default Advertpage;



