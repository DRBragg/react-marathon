import React from 'react';
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  let playlists = props.playlists.map(playlist => {
    let className = playlist.id === props.selectedPlaylist ? "selected" : ""

    let handlePlaylistSelect = () => props.handlePlaylistSelect(playlist.id)

    return(
      <Playlist
        key={playlist.id}
        playlist={playlist}
        className={className}
        handlePlaylistSelect={handlePlaylistSelect}
      />
    )
  })

  return(
    <ul>
      {playlists}
    </ul>
  )
}


export default PlaylistCollection
