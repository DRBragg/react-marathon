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

      return(
        <Song
          key={song.id}
          song={song}
          className={className}
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
