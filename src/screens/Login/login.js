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

class login extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    show: false,
    forgot: false,
    verify:false,
    reset:false
  };
  render() {
    const { show, forgot,verify ,reset} = this.state;
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
            <View style={styles.loginContainer}>
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
                  <Text style={styles.rememberText}>Remember my User ID</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button title="LOGIN" />
            </View>
            <View style={styles.signUp}>
              <View style={{ flexDirection: "row" }}>
              <View style={{justifyContent:'center'}}>
                <Text style={styles.signUptext}>Don't have an Account? </Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.signupBtnText}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ forgot: !forgot })}
              >
                <Text style={styles.forgotText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <Modal
              isVisible={forgot}
              backdropColor={"black"}
              backdropOpacity={0.5}
              animationIn="slideInUp"
              animationInTiming={400}
              animationOut="slideOutDown"
              animationOutTiming={400}
              useNativeDriver={true}
              //   onBackdropPress={() => this.setState({ forgot: !forgot })}
            >
              <View style={styles.forgotContainer}>
                <View style={styles.underForgot}>
                  <Text style={styles.forgotHeaderText}>Forgot Password</Text>
                  <Text style={styles.forgotSubHeaderText}>
                    Please enter your Email/Mobile Number for a reset link or
                    OTP
                  </Text>
                  <View style={styles.forgotInputContainer}>
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
                  <View style={styles.resetCodeBtn}>
                    <ForgotButton title="GENERATE LINK/OTP" btnPress={()=>this.setState({forgot:false,verify:true})} />
                  </View>
                  <View style={styles.forgotSignUp}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.forgotSignUptext}>
                        Don't have an Account?
                      </Text>
                      <TouchableOpacity style={styles.signUpbtn} onPress={()=>{this.props.navigation.navigate('SignUp'),this.setState({ forgot: !forgot })}}>
                        <Text style={styles.signupBtnText}>SIGN UP</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.closeBtnContainer}>
                      <TouchableOpacity
                        onPress={() => this.setState({ forgot: !forgot })}
                      >
                        <Image
                          source={require("../../../assets/images/close.png")}
                          style={styles.closeImg}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              isVisible={verify}
              backdropColor={"black"}
              backdropOpacity={0.5}
              animationIn="slideInUp"
              animationInTiming={400}
              animationOut="slideOutDown"
              animationOutTiming={400}
              useNativeDriver={true}
              //   onBackdropPress={() => this.setState({ forgot: !forgot })}
            >
              <View style={styles.forgotContainer}>
                <View style={styles.underForgot}>
                  <Text style={styles.forgotHeaderText}>Verify OTP</Text>
                  <Text style={styles.forgotSubHeaderText}>
                    OTP Send to your Registered Mobile Number
                  </Text>
                  <View style={styles.forgotInputContainer}>
                    <TextInput
                      placeholder="* * * *"
                      style={styles.Input}
                      editable={false}
                      autoCorrect={false}
                      clearButtonMode="while-editing"
                      textContentType="emailAddress"
                    />
                  </View>
                  <View style={styles.resetCodeBtn}>
                    <ForgotButton title="VERIFY" btnPress={()=>this.setState({verify:false,reset:true})} />
                  </View>
                  <View style={styles.forgotSignUp}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.forgotSignUptext}>
                        Don't Recieved Any OTP ?
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.signupBtnText}>Resend</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.closeBtnContainer}>
                      <TouchableOpacity
                        onPress={() => this.setState({ verify: !verify })}
                      >
                        <Image
                          source={require("../../../assets/images/close.png")}
                          style={styles.closeImg}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              isVisible={reset}
              backdropColor={"black"}
              backdropOpacity={0.5}
              animationIn="slideInUp"
              animationInTiming={400}
              animationOut="slideOutDown"
              animationOutTiming={400}
              useNativeDriver={true}
              //   onBackdropPress={() => this.setState({ forgot: !forgot })}
            >
              <View style={styles.forgotContainer}>
                <View style={styles.underForgot}>
                  <Text style={styles.forgotHeaderText}>Reset Link</Text>
                  <Text style={styles.forgotSubHeaderText}>
                  A reset password link has been sent to your registered Email ID. Kindly follow the instruction on your mail.
                  </Text>
                  <View style={styles.forgotInputContainer}>
                    <TextInput
                      placeholder="my Email"
                      style={styles.Input}
                      editable={false}
                      autoCorrect={false}
                      clearButtonMode="while-editing"
                      textContentType="emailAddress"
                    />
                  </View>
                  <View style={styles.forgotSignUp}>
                      <TouchableOpacity onPress={()=>this.setState({ reset: !reset })}>
                        <Text style={styles.signupBtnText}>RETURN TO HOME</Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>


          </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}
export default login;
