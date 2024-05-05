import { Button, Grid } from "@mui/material"
import { useState,useEffect } from "react"


let İlanverresim = ({ style, urls, seturls }) => {
  //  const  [resimler,setResimler] =useState (["https://www.artmajeur.com/medias/standard/m/o/mourad-lila/artwork/13327106_img-20200421-185940.jpg?v=1590401889", "https://i.ytimg.com/vi/s9EZyn7ZOQA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDI-633QVbgh5UjRgeHqbix7conGA", "https://bczl.meb.k12.tr/meb_iys_dosyalar/34/06/969693/resimler/2021_04/02102222_2118fbf0-51e6-477f-b6f7-175761b15217.jpg", "https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg"])
    const [buttondisplay,setButtondisplay]=useState("none")
    const [değişenresimindex,setindex]=useState("")



    const [list, setList] = useState(urls);
    useEffect(() => {
        setList(urls);
        console.log("URLs", urls);
        console.log("URL",urls);
    }, [urls]);

    let anaresim=(index)=>{
        if(değişenresimindex!==0){
            setButtondisplay("flex")
            setindex(index)
        }else{
            setButtondisplay("none  ")
        }}

    let anaresimyap=()=>{
           let anaresim= list[değişenresimindex]
           list.splice(değişenresimindex,1)
           list.unshift(anaresim)
            seturls(list)
           setButtondisplay("none")
           return
    }

    return (
        <Grid xs={12} style={style}>

            <Grid xs={12} sx={{  height: "100%" }}>
                {list.map((resim, index) => (
                    <img onClick={()=>anaresim(index)} key={index} src={resim} alt="list" style={{ height: index === 0 ? "550px" : "130px", width: index === 0 ? "100%" : "120px", marginTop: index === 0 ? "0px" : "8px", marginLeft: index === 0 ? "0px" : "8px" }}></img>

                ))}
                <Button onClick={anaresimyap}  style={{width:"150px",height:"50px",backgroundColor:"whitesmoke",position:"absolute",marginLeft:"660px",marginTop:"-90px",display:buttondisplay,fontSize:"17px"}} >Ana resim yap</Button>

            </Grid>




        </Grid>


    )
}
export default İlanverresim


