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
  changeCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h2>类组件，有状态组件</h2>
        <h2>{message}</h2>
        <button onClick={() => this.changeCount()}>changeCount</button>
        <h1>{count}</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
