import { Component } from "react";
import '../css/Header.css'

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="header">
          <b>F</b>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shopping</li>
                    <li>Products</li>
                    <li>Brands</li>
            </ul>
        </div>
      </>
    );
  }
}
