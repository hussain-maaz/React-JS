import React from "react";

class Product extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      ProductID: "",
      qty: 0,
    };
  }
  addToCart = (pid) => {
    console.log(pid + " PID ");
    this.setState({
      ProductID: pid,
      qty: this.state.qty + 1,
    });
  };
  render() {
    console.log("component rendered to DOM");
    return (
      <div>
        <button
          onClick={() => {
            this.addToCart(1);
          }}
        >
          addToCart
        </button>
        <Card ProductID={this.state.ProductID} qty={this.state.qty}></Card>{" "}
      </div>
    );
  }
}
export default Product;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props.qty);
    console.log(state.qty);
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null;
  }
  //   updateQty() {
  //     this.setState({
  //       qty: this.state.qty + 1,
  //     });
  //   }
  componentDidMount() {
    console.log("component Mount after rendering component to DOM");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component Updated");
  }
  render() {
    return (
      <div>
        <h1>CART:{this.state.qty}</h1>
        {/* <button onClick={this.updateQty}>Update quantity</button> */}
      </div>
    );
  }
}
