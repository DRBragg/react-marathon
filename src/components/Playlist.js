import React from 'react'

const Playlist = (props) => {

  return(
    <div>
      <li className={props.className}>{props.playlist.name}</li>
    </div>
  )
}

export default Playlist
