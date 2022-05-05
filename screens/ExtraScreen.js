import React from "react";
import styles from "../styles.js";
import { Text, View, Button } from "react-native";
import apiKeys from "../config/apiKeys.js";
import { back } from "react-native/Libraries/Animated/src/Easing";

export default function ExtraScreen() {
    const [string, setString] = React.useState("Hello World");

    async function handleClick() {
        fetch(`http://${apiKeys.backendEndpoint}/api/test/something`)
            .then((response) => (response = response.json()))
            .then((response) => {
                console.log(response.data);
                setString(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text>An Extra Screen!</Text>
            <Button
                title={string}
                onPress={() => {
                    handleClick();
                }}
            ></Button>
        </View>
    );
}