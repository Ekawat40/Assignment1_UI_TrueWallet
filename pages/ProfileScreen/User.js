//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


// create a component
class UserInfo extends Component {

    constructor(props) {
      super(props)
    };
    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainerLeft}>
                    <View style={styles.imageContainer}>
                    <Image source={this.props.userIcon} style={styles.image}/>
                    </View>
                </View>
                <View style={styles.subContainerRight}>
                    <Text style={[styles.font, {fontSize: 19}]}> {this.props.name} </Text>
                    <Text style={[styles.font, {fontSize: 16}]}> TrueMoney Account </Text>
                    <Text style={[styles.font, {fontSize: 16}]}> {this.props.email} </Text>
                    <Text style={[styles.font, {fontSize: 16}]}> {this.props.tel} </Text>
                    <Text style={[styles.font, {fontSize: 16}]}> อี-วอลเล็ท พร้อมเพย์ เริ่มต้นใช้งาน </Text>
                    <Text style={styles.spec}> </Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        
    },
    subContainerLeft: {
        flex: 2,
    },
    subContainerRight: {
        flex: 5,
        flexDirection: 'column',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        height: 50,
        width: 50,
    },
    font: {
        paddingBottom: 5,
    }
});

//make this component available to the app
export default UserInfo;