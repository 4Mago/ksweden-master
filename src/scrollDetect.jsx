import React from "react"
import VisibilitySensor from "react-visibility-sensor"

const ScrollDetect = (props) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => {
        return React.cloneElement(props.children, { inView: isVisible })
      }}
    </VisibilitySensor>
  )
}

export default ScrollDetect
