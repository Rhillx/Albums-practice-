import React, {Component} from 'react';
import { View } from 'react-native';

import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component{
    state = {
        albums: [],
    }

    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
                .then(data => data.map(albums => {
                     return albums;
                }))
                 .then(albums => this.setState({albums}))
          
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album}/>
        
        );

    }

    render(){
        console.log(this.state)
        return(
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}
