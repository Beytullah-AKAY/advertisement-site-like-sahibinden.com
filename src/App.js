
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import İlanver from "./main"
import Advertpage from "./sayfalar/advertpage";
import  Ücretsizilanver from "./sayfalar/ücretsizilanver"
import Hesapaç from "./sayfalar/hesapaç";
import Girişyap from "./sayfalar/girişyap"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<İlanver />} />
                <Route path="/ilan" element={<Advertpage />} />
                <Route path="/ilanver" element={<Ücretsizilanver />} />
                <Route path="/hesapaç" element={<Hesapaç />} />
                <Route path="/girişyap" element={<Girişyap />} />
               
            </Routes>
        </BrowserRouter>
    );
}

export default App;