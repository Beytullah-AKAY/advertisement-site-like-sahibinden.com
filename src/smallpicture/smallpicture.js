import { Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate,  } from "react-router-dom";

const Smallpictur = ({ url, title,hesapadi }) => {
  const [imgHover, setİmgHover] = useState(false);
  const Navigate=useNavigate()


  const handleclick = () => {
  
        console.log(hesapadi)
        console.log(url)
        console.log(title)
        console.log("smallpct")
        Navigate(`/ilan`, { state: { url: url, title: title,hesapadi:hesapadi } })
    }

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <Grid
        item
        style={{
          width: "150px",
          height: "100px",
          marginTop: imgHover ? "0px" : "20px",
        }}
      >
        <img
          onClick={handleclick}
          onMouseEnter={() => setİmgHover(true)}
          onMouseLeave={() => setİmgHover(false)}
          src={url}
          style={{
            width: imgHover ? "170px" : "150px",
            height: imgHover ? "120px" : "100px",
            margin: "0px",
          }}
          alt={title}
        />
      </Grid>
      <Grid sx={{ marginTop: imgHover ? "20px" : "2px" }}>
        <p
          style={{
            width: imgHover ? "170px" : "160px",
            height: "20px",
            margin: "0px",
          }}
        >
          {title}
        </p>
      </Grid>
    </Grid>
  );
};

export default Smallpictur;
