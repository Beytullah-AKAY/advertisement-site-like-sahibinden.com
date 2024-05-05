import "../App.css";
import { Grid } from "@mui/material";
import { faker, } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Üstgövde from "../üstgövdem/üstgövde";
import Smallpictur from "../smallpicture/smallpicture";
import Resimüstü from "../resimüstü/resimüstü";
import Solyazilar  from "../solyazilar/solyazilar"
import Textvideo from "../Textvideo/textvideo";
import Enalt from "../sayfaaltı/enalt";
import Girişyap from "./girişyap";


function Homepage({hesapadi}) {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [çikişyamak,setÇikişyapmak]=useState(hesapadi)

  useEffect(() => {
  
    imageBuild();
  }, []);

  const imageBuild = () => {
    const images = [];

    for (let i = 0; i < 90; i++) {

      images.push({
        url: faker.image.transport(null, null, true),
        title: faker.vehicle.manufacturer(""),
      });
      console.log(images)

      setList(images);
      setFilterList(images);
    }
  };


  let oninputchance=(e)=>{
    console.log(hesapadi)
    console.log("homedayızzz")
     
    setFilterList(list.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase())))

  }

  let çikişyap=()=>{

  }


  return (
    <Grid container xs={12}>
      <Grid item xs={12} style={{height:"8vh"}}>
      <Üstgövde oniputchange={oninputchance} hesapadi={hesapadi} çikişyap={çikişyap} />
      </Grid>
      <Grid xs={2}></Grid>
      <Grid container xs={2} >
        <Solyazilar/>
      </Grid>

      <Grid container xs={6} spacing={1} style={{display:"flex"}} >
      <Grid  xs={12} >
        <Resimüstü/>
      </Grid>

        {filterList.map((advert) => (
          <Grid item xs={2} style={{width:"100px",height:"130px",margin:"0px"}}>
            <Smallpictur url={advert.url} title={advert.title}  hesapadi={hesapadi}/>
          </Grid>
        ))}

        <Grid xs={12} style={{with:"100%",height:"200px",marginTop:"40px",}} >
          <Textvideo/>
        </Grid>
      </Grid>
      <Grid xs={2}></Grid>
      <Grid style={{display:"flex",marginBottom:"0px"}}>
      <Enalt></Enalt>

      </Grid>
    </Grid>
  );
}

export default Homepage;
