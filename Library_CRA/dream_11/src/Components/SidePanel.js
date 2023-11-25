// import { Component } from "react";
// import App from "../App";
import { cskInfo } from "../Teamdata/csk";
import { kkrInfo } from "../Teamdata/kkr";
import "../Css/Sidepanel.css";
import App from "../App";

export default class Sidepanel extends App {
  constructor() {
    super()
    this.state = {
teamdata : [cskInfo,kkrInfo]
    }
  }
  
  team = (name) => {
    console.log(name)
  };
  render() {
    return (
      <div className="sidePanel">
        {this.teamdata.map((obj) => (
          <div onClick={() => this.team(obj.name)} className="teamtemplate">
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
    );
  }
}
