import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import quotes from "../quotes.json"

function getRandomQuote(quoteArr)
{
    const randomNumber = Math.floor(Math.random() * quoteArr.quotes.length);
    const currentQuote = quoteArr.quotes[randomNumber];
    return currentQuote;
}

export default function LoginScreen() {
  const text = JSON.parse(JSON.stringify(quotes));
  const [quote, setQuote] = useState(getRandomQuote(text));
  const [seconds, setSeconds] = useState(0);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setInterval(() => {
      setQuote(quote => getRandomQuote(text));
    }, 10000);
    // return () => clearTimeout(quoteGenerator);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={{fontSize: 30, paddingTop: 50, alignItems: "center"}}>
        <Text>A Quote of Nature:</Text>
        <Text style={{textAlign: "center", paddingLeft: 20, paddingRight: 20, fontStyle: "italic"}}>{quote}</Text>
      </View>
      <View style={styles.container}>
        <View style= {{paddingBottom: 100, alignItems:"center"}}>
          <Text style={styles.titleText}>Welcome to</Text>
          <Text style={{fontSize: 60}}>Grounded</Text>
        </View>
        <TouchableOpacity onPress={() => login()} style={styles.signinButton}>
          <Text>Sign In or Register With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
