import React, { useContext } from 'react'
import styles from './WelcomeMsg.module.css'
import { TodoItemsContext } from '../store/todoItemsStore'
function WelcomeMsg() {

  const contextObj= useContext(TodoItemsContext)
    const todoItems=contextObj.todoItems;

  return (todoItems.length===0 &&  <p className={styles.para}>Enjoy Your Day</p>) 
}
export default WelcomeMsg