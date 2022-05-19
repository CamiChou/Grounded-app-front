import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import quotes from "../quotes.json";

export default function LoginScreen() {
  const text = JSON.parse(JSON.stringify(quotes));
  const [quote, setQuote] = useState(getRandomQuote(text));
  const [seconds, setSeconds] = useState(0);
  const { login } = useContext(AuthContext);
  function getRandomQuote(quoteArr)
  {
    const randomNumber = Math.floor(Math.random() * quoteArr.quotes.length);
    const currentQuote = quoteArr.quotes[randomNumber];
    console.log("set new quote");
    return currentQuote;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newQuote = getRandomQuote(text);
      setQuote(newQuote);
    }, 10000);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ fontSize: 30, paddingTop: 50, alignItems: "center" }}>
        <Text>A Quote of Nature:</Text>
        <Text
          numberOfLines={3}
          style={{
            height: 50,
            textAlign: "center",
            paddingLeft: 20,
            paddingRight: 20,
            fontStyle: "italic",
          }}
        >
          {quote}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{ paddingBottom: 100, alignItems: "center" }}>
          <Text style={styles.titleText}>Welcome to</Text>
          <Text style={{ fontSize: 60 }}>Grounded</Text>
        </View>
        <TouchableOpacity onPress={() => login()} style={styles.signinButton}>
          <Text>Sign In or Register With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
