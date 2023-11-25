// import { Component } from "react";
import kkrPlayers, { kkrInfo } from "../Teamdata/kkr";
// import cskPlayers, { cskInfo } from "../Teamdata/csk";

// import App from "../App";
import { Component } from "react";


export default class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      team: kkrPlayers,
    };
  }
  add = () => {
    alert("button pressed");
  };

  render() {
    console.log("captain Name", kkrInfo.captain[0].Name);
    // console.log("captain Name", cskInfo.captain[0].Name);
    return (
      <div className="playerInfo">
        <div>
          <div className="heading">
            <h3>Name</h3>
            <h3>Role</h3>
            <h3>Cost</h3>
          </div>
          <div className="content">
            {this.state.team.map((p, index) => (
              <div className="item">
                <p>
                  {index + 1} . {p.Name}
                </p>
                <p>
                  {p.isAlrounder
                    ? "AllRounder"
                    : p.isBatsman
                    ? "BatsMan"
                    : p.isBowler
                    ? "Bowler"
                    : ""}
                  {p.isWicketKeeper ? "(wc)" : ""}
                </p>
                <p>
                  {p.cost} <button onClick={this.add}> + </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
