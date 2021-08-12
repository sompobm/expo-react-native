import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

const CPNTextInput = (props) => {
    return (
        <View style={{ paddingTop: 20 }}>
            <Text
                style={{
                    fontSize: 20,
                    color: props.labelColor ?? "rgb(72, 72, 74 )",
                    paddingBottom: 5,
                }}
            >
                {props.label ?? ""}
            </Text>
            <View
                style={{
                    borderWidth: 0.2,
                    borderRadius: 15,

                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                    borderBottomColor: "rgb(140, 140, 150 )",
                }}
            >
                <TextInput
                    autoFocus={props.autoFocus ?? false}
                    returnKeyType="next"
                    autoCapitalize="none"
                    placeholder={props.placeholder ?? ""}
                    value={props.value ?? ""}
                    secureTextEntry={props.secureTextEntry ?? false}
                    onChangeText={(text) => props.onChangeText(text)}
                    keyboardType={props.keyboardType ?? null}
                    style={{
                        paddingBottom: 10,
                        fontSize: 18,
                    }}
                />
            </View>
        </View>
    );
};

export default CPNTextInput;
