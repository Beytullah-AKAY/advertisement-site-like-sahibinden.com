
import { Button, Divider, Grid, TextField, Typography, MenuItem, } from "@mui/material";
import Üstgövde from "../üstgövdem/üstgövde";
import { useState } from "react";
import Enalt from "../sayfaaltı/enalt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import İlanverresim from "../ilanverresim/ilanverresim"
import { NumericFormat } from "react-number-format";

const Ücretsizilanver = () => {
    const [data, setData] = useState({
        subDetails: [
            { title: "İlan No", value: "" },
            { title: "İlan Tarihi", value: "" },
            { title: "Araç tipi", value: "" },
            { title: "Kimden", value: "" },
        ],
        technicalProperties: [
            { title: "Kasa Tipi / Kapı Sayısı", value: "" },
            { title: "Motor Tipi", value: "" },
            { title: "Üretim Yılı", value: "" },
        ],
        description: "",
        title: "",
        price: "",
        location: "",
        urls: [],

    });






    let handleteknik = (e, a) => {
        console.log("NABER")

        const updateteknik = data.technicalProperties;
        const index = updateteknik.findIndex(
            (item) => item.title === e.target.name
        );
        console.log(index)

        updateteknik[index].value = e.target.value;
        console.log(e.target.value)

        setData({ ...data, technicalProperties: updateteknik });
    };

    let handlesubdet = (e) => {

        const updatesub = data.subDetails;
        const index = updatesub.findIndex(
            (item) => item.title === e.target.name
        );
        console.log(index)
        console.log(updatesub)
        updatesub[index].value = e.target.value;
        setData({ ...data, subDetails: updatesub });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        console.log(files);

        const supportedTypes = ["image/jpeg", "image/png", "image/jpg"];
        for (const file of files) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const base64Data = event.target.result;
                setData((prevData) => ({
                    ...prevData,
                    urls: [...prevData.urls, base64Data],
                }));
            };
            if (supportedTypes.includes(file.type)) {
                fileReader.readAsDataURL(file);
            }
        }
    }


    return (
        <Grid container style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={12} style={{}}>
                <Üstgövde />
            </Grid>
            <Grid container xs={12} sx={{ width: "100%", height: "800px", display: "flex" }}>
                <Grid xs={2} ></Grid>
                <Grid container xs={8.3} sx={{ marginTop: "20px", marginLeft: "10px", width: "100%", height: "20px" }} >
                    <Grid xs={6} style={{ width: "100%", marginTop: "20px" }} >
                        <div
                         onDragOver={(e) => {
                           e.preventDefault()
                           e.stopPropagation()
                         }}
                         onDragEnter={(e) => {
                             e.preventDefault();
                             e.stopPropagation();
                         }}
                     
                        onDrop={(e)=>handleDrop(e)}
                            xs={12}
                            style={{
                                width: "100%",
                                height: "700px",
                                display: data.urls.length === 0 ? "flex" : "none",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >

                            <AddPhotoAlternateIcon style={{ fontSize: "45px" }} />
                            <Typography>Resimleri sürükleyip bu alana bırakın</Typography>
                        </div>
                        <İlanverresim style={{ display: data.urls.length === 0 ? "none" : "flex", height: "700px", width: "100%" }} urls={data.urls} page="add" seturls={(value)=>setData({...data,urls:value})} />
                    </Grid>
                    <Grid item xs={6} style={{ height: "100px", marginTop: "30px", display: "flex", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                        <TextField value={data.title} name="title" label="İlan başlığı" placeholder="İlan Başlığı Giriniz" style={{ color: "black", width: "50%", }} onChange={((e) => setData({ ...data, title: e.target.value }))} />
                        <NumericFormat prefix="₺" customInput={TextField} value={data.price} label="Fiyat" placeholder="İlan Fiyatı Giriniz" style={{ color: "black", width: "50%", }} onChange={((e) => setData({ ...data, price: e.target.value }))} />
                        <TextField value={data.location} label="Konum" placeholder="İlan Konum Giriniz" style={{ color: "black", width: "50%", }} onChange={((e) => setData({ ...data, location: e.target.value }))} />
                        <Divider style={{ width: "100%", marginLeft: "50px" }} />
                        {data.subDetails.map((detail, index) => (
                            <Grid key={index} xs={6} style={{ marginTop: "20px", width: "40%" }}>
                                <TextField
                                    onChange={(e) => handlesubdet(e)}
                                    name={detail.title}
                                    label={detail.title.includes("Tarihi") ? "" : detail.title}
                                    style={{
                                        width: "100%",
                                        display: detail.title.includes("Araç tipi") || detail.title.includes("Kimden") ? "none" : "flex"
                                    }}
                                    type={detail.title.includes("Tarihi") ? "date" : "text"}
                                >
                                    /</TextField>
                                <TextField
                                    name={detail.title}

                                    select
                                    label={detail.title}
                                    onChange={(e) => handlesubdet(e)}

                                    style={{
                                        width: "100%",
                                        display: detail.title.includes("Araç tipi") ? "flex" : "none"
                                    }}
                                    type={detail.title.includes("Tarihi") ? "date" : "text"}
                                >
                                    <MenuItem value="Otomobil">Otomobil</MenuItem>
                                    <MenuItem value="SUV">SUV</MenuItem>
                                    <MenuItem value="Kamyon">Kamyon</MenuItem>
                                    <MenuItem value="Motor">Motor</MenuItem>
                                    <MenuItem value="Karavan">Karavan</MenuItem>
                                    <MenuItem value="ATV">ATV</MenuItem>
                                    <MenuItem value="Ticari">Ticari</MenuItem>
                                </TextField>
                                <TextField
                                    select
                                    onChange={(e) => handlesubdet(e)}
                                    label={detail.title}
                                    name={detail.title}
                                    style={{
                                        width: "100%",
                                        display: detail.title.includes("Kimden") ? "flex" : "none"
                                    }}
                                    type={detail.title.includes("Tarihi") ? "date" : "text"}
                                >
                                    <MenuItem value="Sahibinden">Sahibinden</MenuItem>
                                    <MenuItem value="Galeriden">Galeriden</MenuItem>
                                </TextField>



                            </Grid>
                        ))}
                        <Divider style={{ width: "100%", marginTop: "30px", marginLeft: "60px" }} />

                    </Grid>
                </Grid>

            </Grid>
            <Grid container xs={12} style={{ marginTop: "-60px", height: "350px", width: "100%" }} >
                <Grid xs={2}></Grid>
                <Grid xs={3.8} sx={{ marginLeft: "10px", marginTop: "20px" }}>



                    <TextField maxRows={10} multiline style={{ width: "100%", marginTop: "10px" }} label="Açıklama giriniz" onChange={((e) => setData({ ...data, description: e.target.value }))} />

                </Grid>
                <Grid xs={5} sx={{ height: "10px", gap: "30px", marginLeft: "60px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {data.technicalProperties.map((property, index) => (

                        <Grid key={index} style={{ width: "50%", gap: "10px" }}>
                            <TextField
                                select
                                label={property.title}
                                name={property.title}
                                onChange={(e) => handleteknik(e)}
                                style={{ width: "100%", display: property.title.includes("Kasa Tipi / Kapı Sayısı") ? "flex" : "none" }} >
                                <MenuItem value="Hatchback 3 kapı" >Hatchback 3 kapı</MenuItem>
                                <MenuItem value="Hatchback 5 kapı" >Hatchback 5 kapı</MenuItem>
                                <MenuItem value="Sedan" >Sedan</MenuItem>
                                <MenuItem value="Station Wagon" >Station Wagon</MenuItem>
                                <MenuItem value="Roadster" >Roadster</MenuItem>

                            </TextField>
                            <TextField
                                select
                                label={property.title}
                                onChange={(e) => handleteknik(e)}
                                name={property.title}

                                style={{ width: "65%", display: property.title.includes("Motor Tipi") ? "flex" : "none" }} >
                                <MenuItem value="1.0 Motor" >1.0 Motor</MenuItem>
                                <MenuItem value="1.2 Motor" >1.2 Motor</MenuItem>
                                <MenuItem value="1.3 Motor" >1.3 Motor</MenuItem>
                                <MenuItem value="1.4 Motor" >1.4 Motor</MenuItem>
                                <MenuItem value="1.5 Motor" >1.5 Motor</MenuItem>
                                <MenuItem value="1.6 Motor" >1.6 Motor</MenuItem>

                            </TextField>
                            <TextField
                                select

                                name={property.title}
                                type="text"
                                label={property.title}
                                onChange={(e) => handleteknik(e)}
                                style={{ width: "65%", display: property.title.includes("Üretim Yılı") ? "flex" : "none" }}
                            >
                                {Array.from({ length: 2024 - 1969 }, (_, index) => (
                                    <MenuItem key={index} value={2024 - index}>{2024 - index}</MenuItem>

                                ))}
                            </TextField>

                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Button onClick={() => console.log(data)} variant="contained" type="submit" style={{ width: "500px", height: "100px", fontSize: "40px" }} > {" "}İLAN VER</Button>
            <Enalt></Enalt>
        </Grid>

    );
}
export default Ücretsizilanver;



