import React from 'react'
import * as styles from '../styles/content.module.css'

export default function Content({content}) {

  return (
    <div className={styles.tableOfContent} dangerouslySetInnerHTML={{__html:content}}>
    </div>
  )
}

