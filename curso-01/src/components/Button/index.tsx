import React from "react"

interface ButtonProps {
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button className="">
        {props.children}
    </button>
  )
}

export default Button