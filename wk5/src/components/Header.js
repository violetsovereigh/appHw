import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';

const Header= (props) => {
    return(
        <View style={styles.header}>  
            <Image style={styles.Iconstyle} source={require('../Asset/btn_back.png')}/>
            <Text style={styles.headerTile}>{props.headerText}</Text>
            <Image style={styles.Iconstyle} source={require('../Asset/btn_like.png')}/>
        </View>
    );
};

const styles={
    header:{
    backgroundColor: 'rgb(100,65,165)',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:25,
    paddingRight:8.5,
    paddingLeft:8.5,
    height:64,
  },
  Iconstyle:{
      height:33,
      width:33,
  },
  headerTile:{
      fontSize:18,
      color:'#fff',
  },
};
export default Header;