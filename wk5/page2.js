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
    StatusBar,
    Image
} from 'react-native';
import Header from './src/components/Header';
import SegmentedControl from './src/components/SegmentedControl';
import CardList from './src/components/CardList';
import Footer from './src/components/Footer';
export default class wk5 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                 <Header headerText={'Hearthstone'}/>   
                 <SegmentedControl />
                 <CardList />
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'rgb(241,241,241)',
    },
});

AppRegistry.registerComponent('wk5', () => wk5);
