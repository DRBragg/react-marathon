import React from 'react'

const Song = (props) => {

  return(
    <div>
      <li>{props.song.name} - {props.song.artist}</li>
    </div>
  )
}

export default Song
