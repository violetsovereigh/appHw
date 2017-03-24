import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '' };
    }
    render() {
        return (
            <View style={styles.bg}>
                <View style={styles.searchBg}>
                    <Image style={styles.search} source={require('../Asset/icon_search.png')} />
                    <TextInput
                        style={styles.inputBar} onChangeText={(text) => this.setState({ searchText: text })}
                        value={this.state.searchText}
                        placeholder={'Search'} placeholderTextColor={'rgb(185,163,227)'}
                    />
                </View>
                <Image style={styles.imgStyle} source={require('../Asset/btn_cast.png')} />
            </View>
        )
    }
}

const styles={
    bg:{
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop:25,
        paddingRight:8.5,
        paddingLeft:8.5,
        height:64,
    },
    searchBg:{
        backgroundColor:'rgb(49,31,83)',
        height:30,
        width:320,
        borderRadius:5,
        flexDirection:'row',
    },
    search:{
        height:18,
        width:18,
        marginTop:6,
        marginLeft:8.5,
        marginRight:5.5,
    },
    inputBar:{
        color:'rgb(185,163,227)',
        fontSize:15,
        height:30,
        flex:1,
    },
    imgStyle:{
        height:33,
        width:33,
    },
}
export default Search;


