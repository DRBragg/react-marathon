import React from 'react'

const Song = (props) => {
  return(
    <div>
      <li onClick={props.handleSongSelect} className={props.className}>{props.song.name} - {props.song.artist} {props.className === "selected" && <div className="bar-c"><div id="bar-1" className="bar"></div><div id="bar-2" className="bar"></div><div id="bar-3" className="bar"></div></div>}</li>
    </div>
  )
}

export default Song
