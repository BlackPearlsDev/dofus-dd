import '../src/style/style.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header/Index";
import Main from "./Components/UI/Main/Index";
import Generation from './Components/Pages/Generation/Index';
import Capacity from './Components/Pages/Capacity/Index';
import MountParkObjects from './Components/Pages/MountParkObjects/Index';
import Footer from './Components/UI/Footer/Index';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route index path="/" element={<Main />} />
                <Route path="/generation" element={<Generation />} />
                <Route path="/capacity" element={<Capacity />} />
                <Route path="/mountparkobjects" element={<MountParkObjects />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;


// REAFACTO L'APP, FAIRE UN JSON DANS LE BACK QUI STOCK TOUTES LES INFOS DES DD, IMG, STATS, COMBINAISON EN CHAINAGE OPTIONNEL?