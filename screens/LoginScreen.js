import React, { useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";


export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <ImageBackground source={require("../assets/background.jpeg")} style={{width: "100%", height: "110%"}} imageStyle={{opacity: 0.5, position: 'absolute', top: -150, right: 0}}>
    <Text style={styles.loginTitle}>grounded</Text>
    <View style={styles.signinButton}>
      <AwesomeButtonRick onPress={() => login()}
                type="anchor"
                width={280}
                height={80}
                backgroundColor="#E5F5EF"
                borderColor="#709467"
                backgroundShadow="#709467"
                backgroundDarker="#709467"
                textSize={20}
              >
                  Sign Up
      </AwesomeButtonRick>
    </View>
    <View style={styles.logInText}>
      <Text style={{fontSize:17}}>Already have an account?</Text>
      <Text style={{fontSize:17, fontStyle:"italic", textDecorationLine:"underline", color:"white"}}  onPress={() => login()}>  Log In</Text>
    </View>
    </ImageBackground>
  );
}
