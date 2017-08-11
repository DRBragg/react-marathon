import React from 'react'

const Song = (props) => {

  return(
    <div>
      <li className={props.className}>{props.song.name} - {props.song.artist}</li>
    </div>
  )
}

export default Song
