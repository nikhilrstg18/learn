import React from 'react'

export default function Content({content}) {

  return (
    <div style={{minWidth:'10%', maxWidth:'15%', padding:'.5rem'}} dangerouslySetInnerHTML={{__html:content}}>
    </div>
  )
}

