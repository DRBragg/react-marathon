import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id){
    this.setState({selectedSongId: id})
  }

  handlePlaylistSelect(id){
    let newSong = (this.props.data.playlists.find(playlist => playlist.id === id)).songs[0]
    this.setState({selectedPlaylistId: id, selectedSongId: newSong})
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    let title = (this.props.data.playlists.find(playlist => playlist.id === this.state.selectedPlaylistId)).name

    return (
      <div className="App row">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="PlaylistCollection columns small-6">
          <PlaylistCollection playlists={data.playlists} selectedPlaylist={this.state.selectedPlaylistId} handlePlaylistSelect={this.handlePlaylistSelect}/>
        </div>
        <div className="SongList columns small-6">
          <SongCollection songs={selectedPlaylistSongs} playing={this.state.selectedSongId} handleSongSelect={this.handleSongSelect}/>
        </div>
      </div>
    );
  }
}

export default App;
