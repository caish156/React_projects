import { Component } from "react";
import '../css/template.css'
export default class Template extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="template">
          <div
            className="imagediv"
            style={{ backgroundImage: `url(${this.props.product.image})` }}
          ></div>
          <div>
            {" "}
            <p className="title">{this.props.product.Title}</p>
            <p className="amount">
              {this.props.product.amount
                ? `Rs.${this.props.product.amount}.00`
                : ""}
            </p>
            <p className="desc">{this.props.product.description}</p>{" "}
          </div>
        </div>
      </>
    );
  }
}
