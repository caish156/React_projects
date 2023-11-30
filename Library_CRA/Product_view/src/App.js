import { Component } from "react";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Productbar from "./Component/Productbar";
import "./css/App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCat: [],
    };
  }

  changeCategories = (cat, status) => {
    if (status) {
      this.setState({
        selectedCat: [...this.state.selectedCat, cat],
      });
    } else {
      this.setState({
        selectedCat: this.state.selectedCat.filter((ct) => ct !== cat),
      });
    }
  };
  render() {
    return (
      <>
        <Header></Header>
        <div id="content">
          <Sidebar changeCategories={this.changeCategories}></Sidebar>
          <Productbar selectedCat={this.state.selectedCat}></Productbar>
        </div>
      </>
    );
  }
}
