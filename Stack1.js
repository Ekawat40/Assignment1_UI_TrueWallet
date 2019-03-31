import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';

export default class Stack1 extends Component {

    _goDownALevel = () => {
        console.log(this.props.navigation)
        this.props.navigation.navigate("NestedNavigator");
    };

    render() {
        return (
            <View>
                <Button title='Go to nested stack' onPress={this._goDownALevel} />
                <Text>Stack1</Text>
            </View>
        )
    }
}