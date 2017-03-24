import React from 'react';
import { Text, View, Image } from 'react-native';

const SegmentedControl = (props) => {
    return (
        <View style={styles.liveRecent}>
            <View style={styles.select}>
                <Text style={styles.textStyle, styles.selectedStyle}>LIVE</Text>
                <View style={styles.selectLine1}></View>
            </View>
            <View style={styles.select}>
                <Text style={styles.textStyle}>RECENT</Text>
                <View style={styles.selectLine2}></View>
            </View>
        </View >
    );
};

const styles = {
    liveRecent: {
        flexDirection: 'row',
    },
    select: {
        backgroundColor: '#fff',
        flex: 1 / 2,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 13,
        color: 'rgb(187,187,187)',
    },
    selectedStyle: {
        color: 'rgb(100,65,165)',
    },
    selectLine1: {
        backgroundColor: 'rgb(100,65,165)',
        width: 187.5,
        height: 5,
        marginTop: 8.5,
        position:'absolute',
        bottom:0,
    },
    selectLine2: {
        backgroundColor: 'white',
        width: 187.5,
        height: 5,
        marginTop: 8.5,
        position:'absolute',
        bottom:0,
    },
};
export default SegmentedControl;