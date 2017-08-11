import React from 'react';
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className;
    let songs = this.props.songs.map(song => {
      if (song.id === this.props.playing) {
        className = "selected"
      } else {
        className = ""
      }

      let handleSongSelect = () => this.props.handleSongSelect(song.id)

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
}

export default SongCollection
