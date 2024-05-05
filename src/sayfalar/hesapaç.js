import { Button, Divider, Grid, TextField } from "@mui/material";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import logo from "../logo.png";
import Hesapaçalt from "../sayfaaltı/hesapaçalt";
import { useNavigate } from "react-router-dom";

function Hesapaç() {
    const [useeposta, setUseeposta] = useState("");
    const [useepassword, setUseepassword] = useState("");
    const [useepasswordagain, setUseepasswordagain] = useState("");
    const [error, setError] = useState("");
    const [erroreposta, setErrorepost] = useState("");

    const Navigate = useNavigate()
    const admin = { eposta: "akaybeytullah@hotmail.com", password: "1959" }

    const epostachange = (e) => {
        setUseeposta(e.target.value);
    };

    const passwordchange = (e) => {
        setUseepassword(e.target.value);
    };

    const passwordagainchange = (e) => {
        setUseepasswordagain(e.target.value);
    };

    const handleformsubmit = (e) => {
        e.preventDefault(); // Formun sayfayı yeniden yüklemesini önlemek için

        if (useeposta.includes("@")) {
            setErrorepost("")
            console.log(useeposta)
            if (useepassword === useepasswordagain) {
                if (useeposta === admin.eposta) {
                    console.log("eposta tmm")
                    if (useepassword === admin.password) {
                        console.log("tmm")
                        Navigate(`/`, { state: { hesapadi: "zehra" } })
                    } return
                }
                else {
                    alert("Kullanıcı Bilgileriniz Doğru Değil")
                }


            } else {

                setError("Şifreler aynı değil!!!");
                console.log("naber")
                console.log(useepassword)
            }
        } else {
            setErrorepost("lütfen eposta adresinizi doğru giriniz")

        }




        // Burada formun diğer verilerini işleyebilirsiniz
    };

    return (
        <Grid container style={{ width: "100%", height: "100%", backgroundColor: "#F8F8F8", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={logo} alt="" style={{ position: "absolute", width: "300px", height: "100px", marginTop: "-1200px" }} alt="Logo" />
            <Grid xs={3.5} style={{ border: "1px solid #AAAAAA", display: "flex", flexDirection: "column", backgroundColor: "white", height: "550px", textAlign: "center", alignItems: "center", justifyContent: "center", marginTop: "200px" }}>
                <label style={{ color: "#333333", fontWeight: "700" }}>HESAP AÇ</label>
                <form onSubmit={handleformsubmit} style={{ marginTop: "20px", display: "flex", flexDirection: "column", width: "500px" }}>
                    <TextField onChange={epostachange} margin="normal" value={useeposta} variant="outlined" label="E-posta" placeholder="E-posta adresinizi giriniz" />
                    {erroreposta && <p style={{ color: "red" }}>{erroreposta}</p>}
                    <TextField type="password" onChange={passwordchange} margin="normal" value={useepassword} variant="outlined" label="Şifre" placeholder="Şifrenizi giriniz" />
                    <TextField type="password" onChange={passwordagainchange} margin="normal" value={useepasswordagain} variant="outlined" label="Şifre Tekrarı" placeholder="Şifrenizi tekrar giriniz" />
                    <Button variant="contained" type="submit" >KAYIT OL</Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Divider style={{ width: "100%", height: "10px" }} />
                </form>
                <Button variant="outlined" style={{ marginTop: "20px", gap: "10px", width: "480px" }}> <GoogleIcon /> Google ile Hesap Aç</Button>
                <Button variant="outlined" style={{ marginTop: "20px", gap: "10px", width: "480px" }}> <AppleIcon /> Apple ile Hesap Aç </Button>
            </Grid>
            <Hesapaçalt />
        </Grid>
    );
}

export default Hesapaç;
