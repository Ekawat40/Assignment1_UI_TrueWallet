import React, { Component } from "react";
import { View, StatusBar, TextInput, Text } from "react-native";
// create a component
class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      left: 0,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? 16 : 14,
      color: !isFocused ? "#aaa" : "#000"
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: "#FFFF"
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

//make this component available to the app
export default FloatingLabelInput;
