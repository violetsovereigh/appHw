/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class wk5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>  
        </View>
        <View style={styles.header}>  
            <View style={styles.backIcon}><Image style={{height:22,width:13,marginTop:4,marginLeft:2,marginBottom:7}} source={require('./media01/Asset/btn_back.png')}/>
            </View>
        
            <View style={styles.headerTile}><Text style={{color:'white',fontSize:18}}>Hearthstone</Text></View>
            <View style={styles.headerLike}><Image style={{width:20,height:18,marginLeft:5.5}} source={require('./media01/Asset/btn_like.png')}/>
            </View>
        </View>
            <View style={styles.liveRecent}>
                <View style={styles.select}>
                    <Text style={{fontSize:13,color:'rgb(100,65,165)',marginTop:15}}>LIVE</Text>
                    <View style={styles.selectLine1}></View>
                </View>
                <View style={styles.select}>
                    <Text style={{fontSize:13,color:'rgb(100,65,165)',marginTop:15}}>RECENT</Text>
                    <View style={styles.selectLine2}></View>
                </View>
            </View>
            <View style={styles.imgSet}>
                <Image style={{width:365,height:200}} source={require('./media01/Asset/img_firebat.png')}/>
            </View>
            <View style={styles.imgSet}>
                <Image style={{width:365,height:200}} source={require('./media01/Asset/img_forsen.png')}/>
            </View>
            <View style={styles.imgSet}>
                <Image style={{width:365,height:144}} source={require('./media01/Asset/img_kolento.png')}/>
            </View>
            <View style={styles.footer}>
                <View style={styles.selectBut}><Image style={{width:20.5,height:20.5}} source={require('./media01/Asset/btn_games_selected.png')}/></View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: 'rgb(241,241,241)',
  },
  top:{
      height:20,
      width:375,
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(100,65,165)',
  },
  header:{
      height:44,
      width:375,
     
    backgroundColor: 'rgb(100,65,165)',
    flexDirection:'row',
    
  },
  backIcon:{
      height:33,
      width:33,
      marginTop:5,
      marginLeft:8.5,
      justifyContent: 'center',
      
      
    // alignItems: 'center',
  },
  headerTile:{
      width:108,
      height:21, 
      alignItems:'center',
      justifyContent: 'center',
      marginTop:10.5,
      marginLeft:92,
  },
  headerLike:{
      width:33,
      height:33,
      alignItems:'center',
      marginTop:15,
      marginLeft:92,

  },
  liveRecent:{

      width:375,
      height:44,
      backgroundColor:'white', 
      flexDirection:'row',
  },
  select:{
      width:187.5,
      height:44,
      alignItems: 'center',
  },
 
  
  selectLine1:{
      backgroundColor:'rgb(100,65,165)',
      width:187.5,
      height:5,
      marginTop:8.5,
  },
  electLine2:{
      backgroundColor:'white',
      width:187.5,
      height:5,
      marginTop:8.5,
  },
  imgSet:{
      marginTop:5,
     
  },
  footer:{
      marginTop:618,
      width:375,
      height:49,
      backgroundColor:'white',
      position:'absolute',
  },
});

AppRegistry.registerComponent('wk5', () => wk5);
