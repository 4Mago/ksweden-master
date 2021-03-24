import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"

const ScrollDetect = (props) => {

//   const [] = useState(false) 
//   return (
//     <VisibilitySensor partialVisibility>
//       {({ isVisible }) => {
//         return React.cloneElement(props.children, { inView: isVisible })
//       }}
//     </VisibilitySensor>
//   )
// }

const [isVisible, setIsVisible] = useState({visible: false})

const onChangeVisibility = isActive => {
    setIsVisible({ ...isVisible, visible: isActive })
}
return (
<VisibilitySensor partialVisibility onChange={e => onChangeVisibility(e)} active={!isVisible.visible}>
     {(React.cloneElement(props.children, { inView: isVisible.visible }))}
 </VisibilitySensor>
)
}
 
export default ScrollDetect
