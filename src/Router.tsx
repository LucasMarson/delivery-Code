import { Adresses } from "./pages/adresses";
import { Favorites } from "./pages/favorites";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Solicitations } from "./pages/solicitation";
import { Search } from "./pages/search";
import { Carte } from "./pages/carte";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastre } from "./pages/cadastre";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/carte" element={<Carte />} />
      <Route path="/solicitation" element={<Solicitations />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adresses" element={<Adresses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastre" element={<Cadastre />} />
    </Routes>
  );
}
