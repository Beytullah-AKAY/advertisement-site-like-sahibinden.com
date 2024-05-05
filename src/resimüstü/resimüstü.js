import { Divider, Grid } from "@mui/material";
import { useState } from "react";

let Resimüstü = () => {
  const [buton1underline, setButton1underline] = useState("none");
  const [buton1underline1, setButton1underline1] = useState("none");
  const [buton1underline2, setButton1underline2] = useState("none");

  return (
    <Grid
      container
      xs={12}
      sx={{ width: "100%", height: "100px", marginTop: "10px" }}
    >
      <Grid xs={12} style={{ display: "flex", justifyContent: "right" }}>
        <button
          onMouseOver={() => setButton1underline("underline")}
          onMouseOut={() => setButton1underline("none")}
          style={{
            backgroundColor: "white",
            border: "none",
            width: "200px",
            height: "20px",
            marginTop: "20px",
            marginRight: "50px",
            textDecoration: buton1underline,
            fontSize: "19px",
          }}
        >
          Reklamı Göster
        </button>
      </Grid>

      <Grid xs={12} style={{ display: "flex", justifyContent: "space-between",margin:"0px" }}>
        <p onMouseOut={()=>setButton1underline1("none")} onMouseOver={()=>setButton1underline1("underline")}      style={{paddingTop:"10px",marginBottom:"0px",marginLeft:"10px",textDecoration:buton1underline1}}>Anasayfa vitrini</p>
        <p   onMouseOut={()=>setButton1underline2("none")} onMouseOver={()=>setButton1underline2("underline")}   style={{paddingTop:"10px",marginBottom:"0px",marginRight:"10px",textDecoration:buton1underline2}} >Tüm Vitrin İlanlarını Göster</p>
            
          </Grid>
      <Divider style={{width:"98%",marginLeft:"10px"}}/>
    </Grid>
  );
};
export default Resimüstü;
