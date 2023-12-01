import React from "react";
import HelloWorld from "./components/HelloWorld";
import ProductList from "./components/productList";

//类组件--有状态组件--setState来控制状态 注意this的指向和使用
// 有生命周期
class App extends React.Component {
  //挂载阶段
  constructor() {
    // console.log("constructor");
    super();
    this.state = {
      message: "Hello React!",
      count: 0,
    };
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // //在项目中用的很多
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  //public class fields语法 绑定事件，和静态属性是不一样的
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    // console.log("render");
    const { message, count } = this.state;
    return (
      <div>
        <h2>类组件，有状态组件</h2>
        <h2>{message}</h2>
        <button onClick={this.changeCount}>changeCount</button>
        <HelloWorld msg="我是传入的数据" count={count} />
        <ProductList />
      </div>
    );
  }
}

export default App;
