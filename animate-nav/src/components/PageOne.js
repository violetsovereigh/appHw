import React, { Component } from 'react';
import Panel from './Panel';
import {
    ScrollView,
    View,
    Text
} from 'react-native';

import { Card, List, ListItem } from 'react-native-elements';
import albums from '../json/albums.json';

class PageOne extends Component {

    state = { albums: [] };

    componentWillMount() {
        this.setState({ albums });
        console.log(this.state);
    }

    render() {
        return (
            <ScrollView>
                <List>
                    {this.state.albums.map((album) => (
                        <Panel
                            album={{ ...album }}
                        />
                    ))}
                </List>
            </ScrollView>
        );
    }
}

export default PageOne;
