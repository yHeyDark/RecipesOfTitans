import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Receitas from "./pages/receitas";
import Dicas from "./pages/dicas";
import Risoto from "./pages/risoto";
import Churrasco from "./pages/churras";
import Lasanha from "./pages/lasanha";
import Torta from "./pages/Torta";
import RisotoDeCogumelos from "./pages/risoto_cogumelo";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> }>home</Route>
            <Route path="/receitas" element={ <Receitas/> }>receitas</Route>
            <Route path="/dicas" element={ <Dicas/> }>Dicas</Route>
            <Route path="/risoto" element={ <Risoto/> }>Risoto</Route>
            <Route path="/churrasco" element={ <Churrasco/> }>Churrasco</Route>
            <Route path="/lasanha" element={ <Lasanha/> }>Lasanha</Route>
            <Route path="/torta" element={ <Torta/> }>Torta</Route>
            <Route path="/cogumelo" element={ <RisotoDeCogumelos/> }>Risoto De Cogumelos</Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes