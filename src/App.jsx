import React from "react";
import HelloWorld from "./components/HelloWorld";

//类组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React!",
      count: 0,
    };
  }
  //没有太理解，这里定义箭头函数的意义
  //public class fields语法 绑定事件，和静态属性是不一样的
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h2>类组件，有状态组件</h2>
        <h2>{message}</h2>
        <button onClick={this.changeCount}>changeCount</button>
        <h1>{count}</h1>
        <HelloWorld msg="我是传入的数据" />
      </div>
    );
  }
}

export default App;
