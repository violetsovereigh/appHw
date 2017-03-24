
import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';


const CardList = (props) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgView}>
                <Image style={styles.imgSet} source={require('../Asset/img_firebat.png')} />
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imgSet} source={require('../Asset/img_forsen.png')} />
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imgSet2} source={require('../Asset/img_kolento.png')} />
            </View>
        </ScrollView>
    );
};

const styles = {
    container:{
        paddingTop:5,
        flex:1,
    },
    imgView:{
        paddingRight:5.5,
        paddingLeft:4.5,
        paddingBottom:5,
    },
    imgSet:{
        width:365,
        height:200,
    },
    imgSet2:{
        width:365,
        height:144,
    },
}
export default CardList;
