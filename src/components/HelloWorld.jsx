import React from "react";

//函数式组件--无状态组件
function HelloWorld(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
      <h1>{props.count}</h1>
    </div>
  );
}

export default HelloWorld;
