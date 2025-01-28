import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { NavLinks } from "./utils/NavLinks";
// import { CharacterDetails } from "./pages/CharacterDetails";
// import { Home, Contact } from "../pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {NavLinks.map((link, index) => (
              <Route
                path={link.path}
                element={link.element}
                index={link.isIndex}
                key={index}
              />
            ))}
            {/* <Route path="/characters/:id" element={<CharacterDetails />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
