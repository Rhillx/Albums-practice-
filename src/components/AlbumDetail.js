import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) =>{
    const {title, artist, thumbnail_image, image} = album;
    const { 
        cardHeaderContent, 
        thumbnailContainer, 
        thumbnailStyle,
        headerText,
        imageStyle
        } = styles


    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image
                    style={thumbnailStyle} 
                    source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={cardHeaderContent}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                style={imageStyle} 
                source={{uri: image }}
                />
            </CardSection>
        </Card>
    );
};


const styles ={
    cardHeaderContent:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerText:{
        fontSize: 18,
    },
    thumbnailStyle:{
        height: 75,
        width: 75,
    },
   thumbnailContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetail;