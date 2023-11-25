import { Component } from "react";
import { bg } from "./Components/imageLink";
import { logo } from "./Components/imageLink";
import kkrPlayers, { kkrInfo } from "./Teamdata/kkr";
import cskPlayers, { cskInfo } from "./Teamdata/csk";
import "./Css/InfoBox.css";
import "./Css/Sidepanel.css";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      team: cskPlayers,
      teamdata: [cskInfo, kkrInfo],
      myTeam: [],
      playerid: [],
    };
  }

  // for changing teamdata to view players list
  teamchange = (name) => {
    const info = this.state.teamdata.filter((obj) => obj.name === name);
    if (info[0].name === "KOLKATA KNIGHT RIDERS") {
      this.setState({
        team: kkrPlayers,
      });
    } else {
      this.setState({
        team: cskPlayers,
      });
    }
  };
  //  for add new Players in Myteam
  add = (p) => {
    if (this.state.myTeam.length < 11) {
      if (this.state.myTeam.some((obj) => obj.Name === p.Name)) {
        // console.log("old player added");
      } else {
        this.setState({
          myTeam: [...this.state.myTeam, p],
        });
      }
    } else {
    }
  };
  //  For Change Background inside teamList on adding
  themechanger = (id) => {
    if (this.state.playerid.length < 11) {
      this.setState({
        playerid: [...this.state.playerid, id],
      });
    }
  };

  // Remove Players from MyTeam
  remove = (p) => {
    this.setState({
      myTeam: this.state.myTeam.filter((obj) => obj !== p),
      playerid: this.state.playerid.filter((obj) => obj !== p.Name),
    });
  };

  validationwc = () => {
    // wicketKeeper available or Not
    if (this.state.myTeam.some((obj) => obj.isWicketKeeper === true)) {
      return true;
    } else {
      return false;
    }
  };

  validation2bowler = () => {
    // Atleast 2 Bowler from same Team
    let countcsk = 0;
    let countkkr = 0;
    let csk = 0;
    let kkr = 0;
    for (let obj of this.state.myTeam) {
      if (obj.isBowler && !obj.isAlrounder) {
        kkr =
          obj.teamName === "KOLKATA KNIGHT RIDERS" ? (countkkr += 1) : countkkr;
        csk =
          obj.teamName === "CHENNAI SUPER KINGS" ? (countcsk += 1) : countcsk;
      }
    }
    console.log("countbowler", kkr, csk);
    if (countcsk >= 2 || countkkr >= 2) {
      return true;
    }
    return false;
  };

  validation3Allrounde = () => {
    const AllRounder = this.state.myTeam.filter(
      (obj) => obj.isAlrounder === true
    );
    if (AllRounder.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  playerCard = (p) => {
    document.getElementById("playerimg").src = p.image;
    document.getElementById("pi1").innerText = p.Name;
    document.getElementById("pi2").innerText = p.isAlrounder
      ? "AllRounder"
      : p.isBatsman
      ? "BatsMan"
      : p.isBowler
      ? "Bowler"
      : "";
    document.getElementById("pi3").innerText =
      "Indian Premier League (IPL) is a professional......";
    document.getElementById("pi4").innerText =
      p.Name +
      " was acquired by KKR in 2018 for INR 80 lakh. Even though the first season didn’t turn out to be great, his potential was considered and he was retained for IPL 2019 as well. Rinku has worked on his batting with KKR Assistant Coach Abhishek Nayar at the KKR Academy during the off season and the results were pretty visible in his 2018-19 Ranji Trophy outing for Uttar Pradesh, where he ended up being the third highest run getter (953 runs in 10 innings) of the tournament with four hundreds (163*, 149, 149 and 150) in his kitty. He does not have the best of numbers in the IPL but he would be looking to make the most of the opportunities he gets this year.";
  };

  removeCard = () => {
    document.getElementById("playerimg").src = "";
    document.getElementById("pi1").innerText = "";
    document.getElementById("pi2").innerText = "";
    document.getElementById("pi3").innerText = "";
    document.getElementById("pi4").innerText = "";
  };

  render() {
    return (
      <div className="app">
        <nav className="Navbar  app">
          <div className="">
            <a className="" href="./">
              <img
                id="logo"
                src={logo}
                alt=""
                width="12%"
                height="100%"
                className=""
              ></img>
            </a>
          </div>
        </nav>
        {/* main BG */}
        <div className="panel">
          <img src={bg} alt=""></img>
          {/* SidePanel */}
          <div className="sidePanel">
            {this.state.teamdata.map((obj) => (
              <div
                onClick={() => this.teamchange(obj.name)}
                className="teamtemplate"
              >
                <div>
                  <img src={obj.image} alt=""></img>
                </div>
                <div className="teaminfo">
                  <p className="p1">{obj.name}</p>
                  <p className="p2">Captain : {obj.captain[0].Name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* player InfoBox */}
          <div className="playerInfo">
            <div>
              <div className="heading">
                <h3>Name</h3>
                <h3>Role</h3>
                <h3>Cost</h3>
              </div>

              <div className="content">
                {this.state.team.map((p, index) => (
                  <div
                    id={p.Name}
                    className={
                      this.state.playerid.includes(p.Name)
                        ? `item dark`
                        : `item`
                    }
                    onMouseEnter={() => this.playerCard(p)}
                    onMouseLeave={this.removeCard}
                  >
                    <p id={p.isCaptain ? "captain" : ""}>
                      {index + 1} . {p.isCaptain ? p.Name + "(c)" : p.Name}
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
                      {p.cost}
                      <div
                        onClick={() => this.themechanger(p.Name)}
                        id="addButton"
                      >
                        <button onClick={() => this.add(p)}> + </button>
                      </div>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Playerinfo finish */}

          {/* Player Card */}
          <div className="playercard">
            <div className="Playertemplate">
              <div id="plycardimg">
                <img id="playerimg" alt=""></img>
              </div>
              <div className="Playerinfo">
                <p
                  id="pi1"
                  style={{
                    backgroundColor: "rgba(84, 84, 124, 0.7)",
                    marginLeft: "0",
                    paddingLeft: "10px",
                  }}
                  className="p1"
                ></p>
                <p id="pi2" className="p2"></p>
                <p
                  id="pi3"
                  style={{ paddingLeft: "10px", fontSize: "1rem" }}
                ></p>
                <p
                  id="pi4"
                  style={{
                    paddingLeft: "10px",
                    fontSize: "0.7rem",
                    color: "black",
                  }}
                ></p>
                <p id="pi5" className="p2"></p>
              </div>
            </div>
          </div>
          {/* Player Card finish */}

          {/* MY Playerinfo Start */}
          <div className="myPlayerInfo">
            <div>
              <div className="heading">
                <h3>Name</h3>
                <h3>Role</h3>
                <h3>Cost</h3>
              </div>

              <div className="content">
                {this.state.myTeam.map((p, index) => (
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
                      {p.cost}{" "}
                      <button
                        id="remove"
                        ref={(ob) => (this.addButton = ob)}
                        onClick={() => this.remove(p)}
                      >
                        {" "}
                        X{" "}
                      </button>
                    </p>
                  </div>
                ))}

                <div
                  className="warning_panel"
                  style={{ backgroundColor: "rgba(84, 59, 84, 0.8)" }}
                >
                  <p
                    className={this.validation2bowler() ? "green" : "red"}
                    id="p11"
                  >
                    Note:1- Needs Two bowler from same Team
                  </p>
                  <p
                    className={this.validation3Allrounde() ? "green" : "red"}
                    id="p22"
                  >
                    Note:2- Need Atleast 3 Alounder
                  </p>
                  <p className={this.validationwc() ? "green" : "red"} id="p33">
                    Note:3- Need 1 WicketKeeper
                  </p>

                  <p
                    className={this.state.myTeam.length < 11 ? "red" : "green"}
                    id="p44"
                  >
                    Note:4- Minimum 11 Players required
                  </p>
                  <p className="warn">
                    {" "}
                    {/* {this.state.myTeam.length < 11
                      ? ""
                      : "Warming:- Only 11 players Allowed"} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
