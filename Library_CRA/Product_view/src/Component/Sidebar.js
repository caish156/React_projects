import { Component } from "react";
import product from "../Product/product";
import '../css/sidebar.css'

export default class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
        category: [],
        
    };
  }
  componentDidMount = () => {
    let category = [];
    for (let item of product) {
      if (item.category !== "" && !category.includes(item.category)) {
        category.push(item.category);
      }
    }
    this.setState({ category: [...category] });
  };

  getCategory=(e)=> {
    const cat = e.target.value;
    const status = e.target.checked;
    console.log(cat, status);
    this.props.changeCategories(cat, status);
  }
  render() {
    return (
      <>
        <div id="product_list">
          {this.state.category.map((cat) => (
            <div className="product_cat">
              <input
                type="checkbox"
                value={cat}
                onChange={this.getCategory}
              ></input>
              <b>{cat}</b>
            </div>
          ))}
        </div>
      </>
    );
  }
}
