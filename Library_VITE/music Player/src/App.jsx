import { Component } from "react";
import "./App.css";
import img from "./assets/pxfuel.jpg";
import genere from "./assets/music.png";
import album from "./assets/vinyl.png";
import playlist from "./assets/playlist.png";
import { songlist } from "./assets/song";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";

export default class App extends Component {
  constructor() {
    super();
    this.playoff = true;
    this.songList = songlist;
    this.num = 0;

    this.state = {
      songNo: this.num,
      progress: 0,
      volume: 0.2,
    };
  }

  // play  song
  play = (val = this.num) => {
    if (this.playoff) {
      this.audio = new Audio(this.songList[val].url);
      this.audio.play();
      this.audio.currentTime =
        window.document.getElementById("progressBar").value*2;
      this.audio.volume = this.state.volume;
      this.playoff = false;
      this.progressBarcall(this.playoff);
    }
  };
  // Pause Current song
  pause = () => {
    this.audio.pause();
    this.playoff = true;
    this.progressBarcall(this.playoff);
  };

  //Play next song
  next = (val) => {
    this.pause();
    const len = this.songList.length;
    this.num = this.num < len - 1 ? this.num + 1 : 0;
    this.setState({
      songNo: this.num,
    });
    this.progressReset();
    console.log("next", this.state.progress);
    val = this.num;
    this.play(val);
    // console.log("next", this.num, this.state.songNo);
  };
  progressReset = () => {
    this.setState({
      progress: 0,
    });
    window.document.getElementById("progressBar").value = 0;
  };
  // play Previous  song
  previous = (val) => {
    this.pause();
    const len = this.songList.length;
    this.num = this.num < 1 ? len - 1 : this.num - 1;
    this.setState({
      songNo: this.num,
    });
     this.progressReset();
     console.log("next", this.state.progress);
     val = this.num;
     this.play(val);
  };

  progressBar = () => {
    let myProgressBar = window.document.getElementById("progressBar");
    if (!this.playoff) {
      this.setState({
        progress: (this.audio.currentTime / this.audio.duration) * 100,
      });
      myProgressBar.value = this.state.progress;
      console.log(this.state.progress);
    }
  };

  progressBarcall = (bool) => {
    if (!bool) {
      var timer = setInterval(() => this.progressBar(), 200);
    } else {
      clearInterval(timer);
    }
  };

  volumecontroller = (e) => {
    this.setState({
      volume: e.target.value / 10,
    });
    this.audio.volume = this.state.volume;
    console.log();
  };

  playit = (val) => {
    if (!this.playoff) {
      this.pause();
      this.progressReset();
      this.play(val);
      this.num = val;
      this.setState({
        songNo: val,
      });
    } else {
      this.play(val);
      this.num = val;
      this.setState({
        songNo: val,
      });
    }
  };

  seek = (e) => {
    this.audio.currentTime = (e.target.value * this.audio.duration) / 100;
  };

  render() {
    return (
      <>
        {/* Nav Bar */}
        <div className="navbar">Spotify</div>
        {/* content-Area */}
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="content_area"
        >
          <div className="mainArea">
            <div id="div1" className="comman">
              <div
                style={{
                  background: `url(https://cdn-icons-png.flaticon.com/512/4889/4889072.png)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                }}
                className="templates"
              >
                <p>Artist</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${genere})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                }}
                className="templates"
              >
                <p>Geners</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${album})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                }}
                className="templates"
              >
                <p>Album</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${playlist})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                }}
                className="templates"
              >
                <p>Plylist</p>
              </div>
            </div>
            {/* Player section */}
            <div id="div2" className="comman">
              <div className="buttonBar">
                {" "}
                <button onClick={() => this.previous(this.num)}>{"<<"}</button>
                <button onClick={() => this.play(this.state.songNo)}>
                  <FaRegCirclePlay style={{ color: "orange" }} />
                </button>
                <button onClick={this.pause}>
                  <FaRegCirclePause
                    style={{
                      color: "orange",
                      backgroundColor: "rgba(0,0,0,0)",
                    }}
                  />
                </button>
                <button onClick={() => this.next(this.state.songNo)}>
                  {">>"}
                </button>
              </div>
            </div>
            <div id="div3" className="comman">
              {this.songList.map((obj, index) => (
                <div
                  className={
                    this.state.songNo == index
                      ? "songtag songtagRun"
                      : "songtag "
                  }
                  key={obj.songName}
                >
                  <p> {index + 1 + " - " + obj.songName} </p>
                  <div onClick={() => this.playit(index)}>
                    {this.state.songNo == index ? (
                      <FaRegCirclePause
                        style={{ color: "rgb(125, 220, 254)" }}
                      />
                    ) : (
                      <FaRegCirclePlay
                        style={{
                          color: "rgb(125, 220, 254)",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="div4">
            <div className="box" id="progress">
              <label htmlFor="" style={{ color: "orange" }}>
                Progress
              </label>
              <input
                type="range"
                id="progressBar"
                onChange={this.seek}
                value={this.state.progress}
              />{" "}
              <p
                style={{
                  fontSize: "50",
                  color: "orange",
                  display: "inline-block",
                }}
              >
                {this.state.progress.toFixed(2)}%
              </p>
            </div>
            <div className="box" id="Volume">
              <label htmlFor="" style={{ color: "orange" }}>
                Volume
              </label>
              <input
                onChange={this.volumecontroller}
                min={0}
                max={10}
                type="range"
                value={this.state.volume * 10}
              />{" "}
              <p
                style={{
                  fontSize: "50",
                  color: "orange",
                  display: "inline-block",
                }}
              >
                {this.state.volume * 10}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
