import React, { Component } from 'react';
import {ScrollView, Dimensions,Image} from 'react-native';
const deviceWidth=Dimensions.get('window').width;

const GameList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.imgSet} source={require('../Asset/img_leagueoflegends.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_counterstrike.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_hearthstone.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_dota2.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_h1z1.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_destiny.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_leagueoflegends.png')} />
                <Image style={styles.imgSet} source={require('../Asset/img_counterstrike.png')} />
        </ScrollView>
    );
};
const styles={
    container:{
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:5,
    },
    imgSet:{
        height:(deviceWidth-15)/2,
        width:(deviceWidth-15)/2,
        marginBottom:5,
    },
};
export default GameList;