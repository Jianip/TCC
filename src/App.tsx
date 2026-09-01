import { Route, Routes } from "react-router-dom";
import AchadosPerdidos from "./paginas/achados-perdidos";
import Agenda from "./paginas/agenda";
import Clubes from "./paginas/clubes";
import Eventos from "./paginas/eventos";
import Horarios from "./paginas/horarios";
import Inicio from "./paginas/inicio";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/clubes" element={<Clubes />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route
          path="/achados-e-perdidos"
          element={<AchadosPerdidos />}
        />
      </Routes>
    </main>
  );
}
