import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./components/characterDetail/CharacterDetail";
import { CharacterList } from "./components/characterList/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">REACT Rick And Morty - FrankyRios</h1>
      <h1><span></span></h1>
      <Switch>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
        <CharacterList />
      </Switch>
    </div>
  );
}

export default App;
