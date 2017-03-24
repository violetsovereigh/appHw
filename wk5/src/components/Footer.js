import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const Footer = (props) => {
    return (
        <View>
            <View style={styles.bg}>
            </View>
            <View style={styles.container}>
                <View style={styles.buttonStyle}>
                    <Image style={styles.imgStyle} source={require('../Asset/btn_games_selected.png')} />
                    <Text style={styles.selectedStyle}>Games</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Image style={styles.imgStyle} source={require('../Asset/btn_channels.png')} />
                    <Text style={styles.textStyle}>Channels</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Image style={styles.imgStyle} source={require('../Asset/btn_following.png')} />
                    <Text style={styles.textStyle}>Following</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Image style={styles.imgStyle} source={require('../Asset/btn_me.png')} />
                    <Text style={styles.textStyle}>Me</Text>
                </View>
            </View>
        </View>
    );
};

const styles={
    container:{
        flexDirection:'row',
    },
    bg:{
        height:0.5,
        backgroundColor:'rgba(0,0,0,0.20)',
    },
    buttonStyle:{
        backgroundColor:'#fff',
        flex: 1/2,
        height:49,
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        height:49,
        width:49,
    },
    textStyle:{
        fontSize:10,
        color:'rgb(187,187,187)',
        position:'absolute',
        bottom:1,
    },
    selectedStyle:{
        fontSize:10,
        color:'rgb(100,65,165)',
        position:'absolute',
        bottom:1,
    },
};
export default Footer;