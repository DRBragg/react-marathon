import React from 'react';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let songs = this.props.songs.map(song => {
      return(
        <Song
          key={song.id}
          song={song}
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
