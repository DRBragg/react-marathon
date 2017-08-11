import React from 'react';
import Song from './Song'

const SongCollection = (props) => {
  let songs = props.songs.map(song => {
    let className = song.id === props.playing ? "selected" : ""

    let handleSongSelect = () => props.handleSongSelect(song.id)

    return(
      <Song
        key={song.id}
        song={song}
        className={className}
        handleSongSelect={handleSongSelect}
      />
    )
  })

  return(
    <ul>
      {songs}
    </ul>
  )
}

export default SongCollection
