import { Component } from "react";
import product from "../Product/product";
import Template from "./Template";
import '../css/product.css'

export default class Productbar extends Component {
  constructor(props) {
      super();
     
      this.state = {
        selctedProduct: [],
      
      };
      
     
  }
    render() {
      
    return (
      <>
        <div id="product_bar">
          {this.props.selectedCat.length
            ? product
                .filter((pro) => this.props.selectedCat.includes(pro.category))
                .map((pro) => <Template product={pro}></Template>)
            : product.map((pro) => <Template product={pro}></Template>)}
        </div>
      </>
    );
  }
}
