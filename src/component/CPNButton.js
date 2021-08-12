import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Pressable,
    TouchableHighlight,
} from "react-native";

import { PRIMARY, SKYBLUE } from "./Config";

const CPNButton = (props) => {
    if (props.buttonStyle == "light-border") {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (props.onPress) {
                        props.onPress();
                    }
                }}
            >
                <View style={styles.container}>
                    <Text style={styles.buttonText_light}>{props.title ?? ""}</Text>
                </View>
            </TouchableOpacity>
        );
    } else if (props.buttonStyle == "light") {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (props.onPress) {
                        props.onPress();
                    }
                }}
            >
                <View style={styles.container}>
                    <View style={styles.border_light}>
                        <Text style={styles.text_light}>{props.title ?? ""}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else if (props.buttonStyle == "custom") {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (props.onPress) {
                        props.onPress();
                    }
                }}
            >
                <View style={props.containerStyle}>
                    <View style={props.contentStyle}>
                        <Text style={props.textStyle}>{props.title ?? ""}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                disabled={props.disabled ?? false}
                style={{ opacity: props.disabled == true ? 0.4 : 1 }}
                onPress={() => {
                    if (props.onPress) {
                        props.onPress();
                    }
                }}
            >
                <View style={styles.container}>
                    <View style={styles.border}>
                        <Text style={styles.text}>{props.title ?? ""}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};

export default CPNButton;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    border_light: {
        borderColor: PRIMARY,
        borderRadius: 10,
        borderLeftWidth: 1.5,
        borderTopWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
    },
    text_light: {
        fontSize: 18,
        textAlign: "center",
        padding: 15,
        color: PRIMARY,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        padding: 15,
        color: "white",
        // fontFamily: "kanitLight",
    },
    border: {
        backgroundColor: PRIMARY,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        padding: 15,
        color: PRIMARY,
    },
    buttonText_light: {
        fontSize: 18,
        textAlign: "center",
        padding: 15,
        color: SKYBLUE,
    },
});
