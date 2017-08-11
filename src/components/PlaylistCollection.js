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

      let handlePlaylistSelect = () => this.props.handlePlaylistSelect(playlist.id)

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
}

export default PlaylistCollection
