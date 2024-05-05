import { Grid,Tooltip,Typography,Divider } from "@mui/material"
import HistoryIcon from "@mui/icons-material/History";
import React from "react";

const Advertpagedetails=({detail})=>{


    return(
        <Grid container xs={12}>
            <Grid xs={12} sx={{ paddingLeft: "3%" ,marginTop:"10px"}}>
                <Typography
                    sx={{
                        color: "blue",
                        fontWeight: "600",
                        alignItems: "center",
                        display: "flex",
                        gap: "7px",
                        fontSize: "20px",
                    }}
                >
                    170.000TL
                    <Tooltip title="Fiyat Tarihçesi">
                        <HistoryIcon sx={{ fontSize: "20px" }} />
                    </Tooltip>
                </Typography>
                <Typography sx={{ marginTop:"20px",color: "blue", fontWeight: "600" }}>
                    İstanbul / Bahçelievler / Şirinevler Mah.
                </Typography>
                <Divider />
                {detail.map((det) => (
                    <Grid container style={{ marginTop: "9%" }}>
                        <Grid xs={6}>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                }}
                            >
                                {det.title}{" "}
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography
                                sx={{
                                    color: det.title.includes("İlan No")
                                        ? "red"
                                        : "black",
                                }}
                            >
                                {det.value}{" "}
                            </Typography>
                        </Grid>
                        <Divider width="100%" style={{}} />
                    </Grid>
                ))}
            </Grid>

        </Grid>
    )
} 
export default Advertpagedetails