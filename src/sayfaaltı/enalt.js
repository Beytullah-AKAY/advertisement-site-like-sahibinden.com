import { Grid, TextField } from "@mui/material"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";
import güven from "../güven.png"
import karekod from "../karekod.png"





let Enalt = () => {


    const [turkis, setTurkis] = useState("flex")
    const [englis, setEnglis] = useState("none")
    const [isclikedturkis, setİsclikedturkis] = useState(false)
    const [isclikedenglis, setİsclikedenglis] = useState(false)


    const DashedSquare = () => {
        return (
          <div
            style={{
              width: '100px',
              height: '100px',
              border: '2px dashed black',
            }}
          ></div>
        );
      }

    let label = (e) => {
        e.target.style.textDecoration = "underline"
    }
    let notlabel = (e) => {
        e.target.style.textDecoration = "none"
    }

    let Languageturkis = (e) => {
        setİsclikedturkis(true)
        setEnglis("flex")
        if (isclikedturkis === true) {
            setEnglis("none")
            setİsclikedturkis(false)
        }

    }
    let Languageenglis = (e) => {
        setTurkis("flex")
        setİsclikedenglis(true)
        if (isclikedenglis === true) {
            setTurkis("none")
            setİsclikedenglis(false)
            e.target.style.margintop = "-10px"
        }

    }

    return (
        <Grid container style={{ marginTop: "30px", borderTop: "1px solid #ccc", backgroundColor: "#F5F5F5", width: "100%", height: "550px" }}>
            <Grid xs={2.2} ></Grid>
            <Grid item xs={8.3} sx={{ marginTop: "35px" }}>
                <Grid container xs={12} style={{ gap: "45px", width: "100%", display: "flex", }}>
                    <Grid xs={2} style={{ width: "100%", height: "240px", display: "flex", flexDirection: "column", gap: "10px" }} >
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "FFF", fontWeight: "500" }} >Kurumsal</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }} >Hakkımızda</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Sürdürülebilirlik</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>İnsan Kaynakları</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Haberler</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Site Haritası</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>İletişim</label>

                    </Grid>
                    <Grid xs={2} style={{ width: "100%", height: "240px", display: "flex", flexDirection: "column", gap: "10px" }} >
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "FFF", fontWeight: "500" }} >Hizmetlerimiz</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }} >Doping</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>S - Param Güvende</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Güvenli e-Ticaret (GeT)</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Reklam</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Mobil</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Auto King</label>

                    </Grid><Grid xs={2} style={{ width: "100%", height: "240px", display: "flex", flexDirection: "column", gap: "10px" }} >
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "FFF", fontWeight: "500" }} >Mağazalar</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }} >Neden Mağaza?</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Mağaza Açmak İstiyorum</label>
                    </Grid><Grid xs={2} style={{ width: "100%", height: "240px", display: "flex", flexDirection: "column", gap: "10px" }} >
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "FFF", fontWeight: "500" }} >Gizlilik ve Kullanım</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }} >Güvenli Alışverişin İpuçları</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Sözleşmeler ve Kurallar</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Hesap Sözleşmesi</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Kullanım Koşulları</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Kişisel Verilerin Korunması</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Çerez Yönetimi</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Çerez Yardım ve İşlem Rehberi</label>
                    </Grid><Grid xs={2} style={{ width: "100%", height: "240px", display: "flex", flexDirection: "column", gap: "10px" }} >
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "FFF", fontWeight: "500" }} >Bizi Takip Edin</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }} >Facebook</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>X</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Linkedin</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Instagram</label>
                        <label onMouseOver={label} onMouseOut={notlabel} style={{ color: "#888888" }}>Youtube</label>
                    </Grid>
                </Grid>
                <Grid item sx={{  width: "100%", marginTop: "50px", display: "flex", gap: "30px", alignItems: "center" }}>
                    <Grid xs={2} style={{  width: "100%", height: "100px", alignItems: "center", display: "flex" }}>
                        <p style={{ width: "50px", height: "50px", backgroundColor: "#D52D38", borderRadius: "50px" }}>
                            <PhoneEnabledIcon style={{ width: "40px", height: "50px" }} />
                        </p>
                        <label>  <span style={{ color: "red" }}>7/24 Müşteri Hizmetleri </span>0850 222 44 44</label>
                    </Grid>
                    <Grid xs={2} style={{  width: "100%", height: "100px", alignItems: "center", display: "flex" }}>
                        <p style={{ width: "50px", height: "50px", backgroundColor: "#D52D38", borderRadius: "50px" }}>
                            <NotListedLocationIcon style={{ width: "40px", height: "50px" }} />
                        </p>
                        <label>  <span style={{ color: "red" }}>Yardım Merkezi </span> <span onMouseOver={label} onMouseOut={notlabel} >yardim.sahibinden.com</span></label>
                    </Grid>
                    <Grid style={{ marginLeft: "500px", width: "150px", height: "50px", }}>
                        <Button onClick={Languageturkis}
                            variant="contained"
                            style={{ position: "relative", width: "180px", height: "50px", display: turkis, flexDirection: "column",  color: "black" ,backgroundColor:"white"}}
                        >
                            <Typography style={{ fontSize: "10px", width: "150px" }}>Dil Seçimi (Language)</Typography>
                            {turkis && <Typography style={{ fontSize: "13px", fontWeight: "700" }}>Türkçe (Turkish)</Typography>}

                        </Button>
                        <Button onClick={Languageenglis}
                            variant="contained"
                            style={{ position: "absolute", width: "180px", height: "50px", display: englis, flexDirection: "column",  color: "black" ,backgroundColor:"white"}}
                        >
                            <Typography style={{ fontSize: "10px", width: "150px" }}>Dil Seçimi (Language)</Typography>
                            {englis && <Typography style={{ fontSize: "13px", fontWeight: "700", }}>İngilizce (English)</Typography>}
                        </Button>
                    </Grid>
                    <Grid >
                        <img src={güven} style={{ width: "50px", marginLeft: "80px" }}></img>
                    </Grid>
                </Grid>

                    <Grid container style={{width:"100%",height:"85px",marginTop:"5px",display:"flex",textAlign:"start"}}>
                        <Grid xs={11} style={{border:"1px dashed black",width:"100%",height:"65px",backgroundColor:"white",marginTop:"10px",padding:"0px" }}>
                        <label style={{fontSize:"15px",height:"65px",padding:"10px"}}>The ad creator is solely responsible for the content, correctness, accuracy and legal obligation of all posted ads, entries, ideas and information. sahibinden.com is not in any way responsible for the quality or legality of content created and posted by its users. You should contact the ad creator directly with your questions.</label>
                        </Grid>
                        <Grid xs={1} >
                            <img src={karekod} style={{position:"absolute",marginLeft:"10px",width:"100px",height:"100px"}}></img>
                        </Grid>
                    </Grid>
                    <Grid item xs ={11} style={{display:"flex",justifyContent:"space-between"}}>
                    <label>Copyright © 2000-2024 sahibinden.com</label>
                    <label>(*) In limited quantities, specific categories and specific offers</label>
                    </Grid>





            </Grid>
        </Grid>
    )
}
export default Enalt