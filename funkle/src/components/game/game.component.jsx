import { Fragment } from "react";
import "./game.styles.scss";

const Game = ({ guess, answer }) => {
  if (guess.Player === answer.Player) {
    return (
      <div>
        <h1>{guess.Player}</h1>
        <h1>Correct</h1>
      </div>
    );
  }

  return (
    <Fragment>
    <div>
      <h1 className="player-name">{guess.Player}</h1>
      <div className="player-flex">
        <div
          className={`player-result ${guess.Team === answer.Team ? "yes" : "no"}`}
        >
          <p>Team:</p>
          <p>{guess.Team}</p>
        </div>
        <div className={`player-result ${guess.Owners === answer.Owners ? "yes" : "no"}`}>
          <p>Owners:</p>
          <p>{guess.Owners}</p>
          {guess.Owners > answer.Owners ? (<h6>lower</h6>) : ''}
          {guess.Owners < answer.Owners ? (<h6>higher</h6>) : ''}
        </div>

        <div className={`player-result ${guess.MaxScore === answer.MaxScore ? "yes" : "no"}`}>
          <p>Max Score:</p>
          <p>{guess.MaxScore}</p>
          {guess.MaxScore > answer.MaxScore ? (<h6>lower</h6>) : ''}
          {guess.MaxScore < answer.MaxScore ? (<h6>higher</h6>) : ''}
        </div>

        <div className={`player-result ${guess.MinScore === answer.MinScore ? "yes" : "no"}`}>
          <p>Min Score:</p>
          <p>{guess.MinScore}</p>
          {guess.MinScore > answer.MinScore ? (<h6>lower</h6>) : ''}
          {guess.MinScore < answer.MinScore ? (<h6>higher</h6>) : ''}
          
        </div>

        <div className={`player-result ${guess.Benched === answer.Benched ? "yes" : "no"}`}>
          <p>Benched:</p>
          <p>{guess.Benched}</p>
          {guess.Benched > answer.Benched ? (<h6>lower</h6>) : ''}
          {guess.Benched < answer.Benched ? (<h6>higher</h6>) : ''}
        </div>

        <div className={`player-result ${guess.Games === answer.Games ? "yes" : "no"}`}>
          <p>Games:</p>
          <p>{guess.Games}</p>
          {guess.Games > answer.Games ? (<h6>lower</h6>) : ''}
          {guess.Games < answer.Games ? (<h6>higher</h6>) : ''}
        </div>

        <div className={`player-result ${guess.Finals === answer.Finals ? "yes" : "no"}`}>
          <p>Finals:</p>
          <p>{guess.Finals}</p>
          {guess.Finals > answer.Finals ? (<h6>lower</h6>) : ''}
          {guess.Finals < answer.Finals ? (<h6>higher</h6>) : ''}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Game;
