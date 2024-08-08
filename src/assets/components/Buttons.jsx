import React from 'react'

export default function Buttons(props) {
  return (
    <div>
        <button className={`px-8 py-2 text-semibold rounded ${props.className}`} style={{backgroundColor: props.bgColor, color:props.color, hover:props.hover}}>
            {props.text}
        </button>
    </div>
  )
}

