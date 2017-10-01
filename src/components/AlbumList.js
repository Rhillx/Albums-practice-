import React, {Component} from 'react';
import { View, Text } from 'react-native';


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
        <Text key={album.title}>{album.title}</Text>
        
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
