import { Component } from "react";
import { logo } from "./imageLink";

export default class NavBar extends Component {
  render() {
    return (
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
    );
  }
}
