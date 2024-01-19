import React from 'react'
import styles from "./Container.module.css"
function Container(props) {
  console.log(props)
  return (
    <div className={styles.Container}>
      {/* children is a special prop for passing elements into components */}
      {props.children}
    </div>
  )
}

export default Container