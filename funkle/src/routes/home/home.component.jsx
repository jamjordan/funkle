import PLAYER_DATA from "../../player-data.json";

import { useState } from "react";

import Game from "../../components/game/game.component";

const Home = () => {
  const playerOptions = PLAYER_DATA.map((player, index) => {
    return { value: index, text: player.Player };
  });

  const [answer, setAnswer] = useState(PLAYER_DATA[0]);

  const startGame = () => {
    const newAnswer =
      PLAYER_DATA[Math.floor(Math.random() * PLAYER_DATA.length)];
    setAnswer(newAnswer);
    setResults([]);
  };

  const defaultOptions = [{ value: "", text: "--Choose an option--" }];

  const options = defaultOptions.concat(playerOptions);

  const [selected, setSelected] = useState(options[0].value);

  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleSubmit = () => {
    const currentResults = results;
    const newResults = currentResults.concat([selected]);
    setResults(newResults);
    console.log(newResults);
    console.log(answer);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {results.map((player) => {
        return <Game guess={PLAYER_DATA[player]} answer={answer} />;
      })}

      <button onClick={startGame}>New Game</button>
    </div>
  );
};

export default Home;
