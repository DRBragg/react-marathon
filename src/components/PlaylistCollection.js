import React from 'react';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map(playlist => {
      return(
        <Playlist
          key={playlist.id}
          playlist={playlist}
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
