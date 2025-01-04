import React from "react"

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}

function Button(props: ButtonProps) {
  const {type = "button"} = props;

  return (
    <button className="p-1 bg-green-400 rounded-md hover:bg-green-600" type={type}>
        {props.children}
    </button>
  )
}

export default Button