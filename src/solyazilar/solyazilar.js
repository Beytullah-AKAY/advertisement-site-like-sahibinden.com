import { Divider, Grid } from "@mui/material";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import HouseIcon from '@mui/icons-material/House';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { useState } from "react";
function Solyazilar() {

  const [oto360,setOto360]=useState("Tümünü Göster")
  const [oto360display,setOto360display]=useState("none")
  const [oto360grdi,setOto360grdi]=useState("70px")

  const [vasita,setVasita]=useState("Tümünü Göster")
  const [vasitadisplay,setVasitadisplay]=useState("none")
  const [vasitagrdi,setVasitagrdi]=useState("70px")



  let lineunder = (e) => {
    e.target.style.textDecoration = "underline";
  };
  let notlineunder = (e) => {
    e.target.style.textDecoration = "none";
  };

  let oto=()=>{
    setOto360display(oto360display==="flex" ? "none":"flex")
    setOto360(oto360==="Tümünü Göster" ? "Kapat":"Tümünü Göster")
    setOto360grdi(oto360grdi==="240px" ? "70px":"240px")
  }
  let Vasita=()=>{
    setVasitadisplay(vasitadisplay==="flex" ? "none":"flex")
    setVasita(vasita==="Tümünü Göster" ? "Kapat":"Tümünü Göster")
    setVasitagrdi(vasitagrdi==="240px" ? "70px":"240px")
  }

  return (
    <Grid
      container
      xs={8}
      style={{
        marginTop: "75px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid
        container
        style={{
          height: "100px",
          width: "110%",
          display: "flex",
          gap: "0px",
        }}
      >
        <Grid
          item
          style={{
            height: "40px",
            width: "100%",
            gap: "10px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            //  backgroundColor: "red",
          }}
        >
          <button
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "30px",
              backgroundColor: "#9E9E9E",
              fontSize: "20px",
              color: "white",
            }}
          >
            !!
          </button>
          <button
            style={{
              width: "100px",
              height: "45px",
              color: "#003399",
              backgroundColor: "white",
              border: "none",
              textAlign: "left",
            }}
            onMouseEnter={lineunder}
            onMouseLeave={notlineunder}
          >
            Acil Acil
          </button>
        </Grid>
        <Grid
          item
          style={{
            height: "40px",
            width: "100%",
            gap: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <button
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "30px",
              backgroundColor: "#9E9E9E",
              fontSize: "18px",
              color: "white",
            }}
          >
            <span style={{ marginLeft: "8px" }}>L</span>
          </button>
          <button
            style={{
              width: "280px",
              height: "45px",
              color: "#003399",
              backgroundColor: "white",
              border: "none",
              marginLeft: "0px",
              paddingLeft: "1px",
            }}
            onMouseEnter={lineunder}
            onMouseLeave={notlineunder}
          >
            Son 48 Saat / 1 Hafta / 1 Ay
          </button>
        </Grid>
      </Grid>
      <Divider sx={{ width: "300px" }} />
      <Grid container style={{ width:"180px",display: "flex", marginTop: "10px",height:oto360grdi, }}>
        <CarRepairIcon />
        <Grid sx={{backgroundColor:"white",width:"150px",display:"flex",flexDirection:"column",marginLeft:"2px",gap:"5px"}}>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{fontWeight:"700",marginLeft:"0px",border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Oto360</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Oto Ekspertiz </button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>S-Aracım</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Araç Hasar Sorgulama</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Araç Karşılaştırma</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Araç Değerleme</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Araç Alım Rehberi</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Araç Satış Rehberi</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Kredi</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",display:oto360display,textAlign:"left"}}>Sıfır Araç Dünyası</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} onClick={oto} style={{border:"none",color:"#003399",backgroundColor:"white",textAlign:"left"}}>{oto360}</button>
        </Grid>
      </Grid>
      <Divider style={{marginTop:"10px",width:"300px"}}/>
      <Grid style={{backgroundColor:"white",height:"30px",alignItems:"center",display:"flex",marginTop:"5px",gap:"5px"}}><HouseIcon></HouseIcon>   
        <button style={{fontWeight:"700",border:"none",backgroundColor:"white",color:"#003399"}}>Emlak 360</button></Grid>
        <Divider style={{marginTop:"5px",width:"300px"}}/>



        <Grid container  style={{ width:"150px",backgroundColor:"white", display: "flex", marginTop: "10px", }}>
        <OtherHousesIcon />
        <Grid sx={{width:"100px",display:"flex",flexDirection:"column",marginLeft:"5px",gap:"5px",justifyContent:"left",}}>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{fontWeight:"700",border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Emlak</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Konut</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>İş Yeri</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Arsa</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Konut Projeleri</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Bina</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Devre Mülk </button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Turistik Tesis</button>
      </Grid>
      <Divider style={{marginTop:"5px",width:"290px"}}/>
    </Grid>

    <Grid container  style={{ width:"180px",backgroundColor:"white", display: "flex", marginTop: "5px", }}>
      <AttractionsIcon></AttractionsIcon>
      <Grid sx={{width:"150px",display:"flex",flexDirection:"column",marginLeft:"5px",gap:"5px",justifyContent:"left",}}>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{marginTop:"3px",fontWeight:"700",border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Vasıta</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Otomobil</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Arazi,SUV,Pickup</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Motosiklet</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Miniva</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Ticari Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Elektrikli Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Kiraliık Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Deniz Araçları</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left"}}>Hasarlı Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>Karavan</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>Klasik Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>Hava Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>ATV</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>SUV</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} style={{border:"none",backgroundColor:"white",color:"#003399",textAlign:"left",display:vasitadisplay}}>Engelli Plakalı Araçlar</button>
          <button onMouseEnter={lineunder} onMouseLeave={notlineunder} onClick={Vasita} style={{border:"none",color:"#003399",backgroundColor:"white",textAlign:"left"}}>{vasita}</button>

    </Grid>
    </Grid>
    </Grid>


  );
}

export default Solyazilar;
