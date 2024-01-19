import styles from "./Display.module.css"
function Display({displayValue}) {
    // console.log(displayValue)


    return (

        <>
            <input className={styles.display} type="text" value={displayValue}
            readOnly
            
             />
        </>
    )
}
export default Display;