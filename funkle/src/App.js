import { Routes, Route } from "react-router-dom";
import Game from "./components/game/game.component";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Game />} />
      </ Route>
    </Routes>
    </div>
  );
};

export default App;
