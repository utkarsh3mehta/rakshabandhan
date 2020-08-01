import React from 'react'
import styles from './image.module.css'

const image = props => {
    return <div className={styles.container}>
        <p>{props.description}</p>
        <hr />
        <iframe src={props.path} height="480" title={props.path}></iframe>
    </div>
}

export default image