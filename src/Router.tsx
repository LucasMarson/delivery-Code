import { Adresses } from "./pages/adresses";
import { Favorites } from "./pages/favorites";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Solicitations } from "./pages/solicitation";
import { Carte } from "./pages/carte";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastre } from "./pages/cadastre";
import { Search } from "./pages/search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<Search />} />
      <Route path="/cardapio/:id" element={<Carte />} />
      <Route path="/solicitation" element={<Solicitations />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adresses" element={<Adresses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastre" element={<Cadastre />} />
    </Routes>
  );
}
