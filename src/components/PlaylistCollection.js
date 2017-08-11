import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className
    let playlists = this.props.playlists.map(playlist => {
      if (playlist.id === this.props.selectedPlaylist) {
        className = "selected"
      } else {
        className = ""
      }
      return(
        <Playlist
          key={playlist.id}
          playlist={playlist}
          className={className}
        />
      )
    })

    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection
