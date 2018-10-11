import React from "react"


const NestedTable = (props) => {
  console.log(props);
  return (
    <div>This is my custom component! {props.content}</div>
  )
}

export default NestedTable
