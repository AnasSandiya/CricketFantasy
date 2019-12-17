import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView
} from "react-native";
import styles from "./style";
import Button from "../../components/button/Button";
import Modal from "react-native-modal";
import ForgotButton from "../../components/forgotButton/ForgotButton";

class signUp extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    show: false,
    forgot: false
  };
  render() {
    const { show, forgot } = this.state;
    return (
        <ImageBackground
          source={require("../../../assets/images/BG.png")}
          style={styles.container}
        >
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <KeyboardAvoidingView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            // style={{ paddingTop: 20 }}
          >
            <Image
              source={require("../../../assets/logo/logo.png")}
              style={styles.logo}
            />
            <View style={styles.signUpContainer}>
                <View style={styles.firstNameContainer}>
                <Text style={styles.headerText}>First Name</Text>
                <TextInput
                  placeholder="First Name"
                  style={styles.Input}
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                />
                </View>
                <View style={styles.lastNameContainer}>
                <Text style={styles.headerText}>Last Name</Text>
                <TextInput
                  placeholder="Last Name"
                  style={styles.Input}
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                />
                </View>
              <View style={styles.emailContainer}>
                <Text style={styles.headerText}>Email</Text>
                <TextInput
                  placeholder="Enter Your Email"
                  style={styles.Input}
                  keyboardType="email-address"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  textContentType="emailAddress"
                />
              </View>
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.headerText}>Phone</Text>
                <TextInput
                  placeholder="Phone Number"
                  style={styles.Input}
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                />
                </View>
              <View style={styles.passwordContainer}>
                <Text style={styles.headerText}>Password</Text>
                <TextInput
                  placeholder="Enter Your Password"
                  style={styles.Input}
                  secureTextEntry={true}
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  textContentType="password"
                />
              </View>
              <View style={styles.rememberContainer}>
                <View style={styles.rememberUnder}>
                  <TouchableOpacity
                    onPress={() => this.setState({ show: !show })}
                  >
                    {!show ? (
                      <Image
                        source={require("../../../assets/images/uncheck.png")}
                      />
                    ) : (
                      <Image
                        source={require("../../../assets/images/check.png")}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={{justifyContent:'center'}}>
                  <Text style={styles.rememberText}>I agree to the </Text>
                  </View>
                  <TouchableOpacity style={styles.tcContainer}>
                      <Text style={styles.tc}>T&C</Text>
                  </TouchableOpacity>
                  <View style={{justifyContent:'center'}}>
                  <Text style={styles.andText}>and</Text>
                  </View>
                  <TouchableOpacity style={styles.tcContainer}>
                      <Text style={styles.tc}>Privacy Policy</Text>
                  </TouchableOpacity>
                 
                </View>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button title="SIGN UP" />
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}
export default signUp;
