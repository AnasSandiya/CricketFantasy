import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

class ForgotButton extends Component {
  render() {
    const { title, btnPress } = this.props;
    return (
      <TouchableOpacity onPress={btnPress} style={styles.container}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
export default ForgotButton;
