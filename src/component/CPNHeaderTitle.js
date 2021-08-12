import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const CPNHeaderTitle = (props) => {
    return (
        <View>
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 26,
                    marginBottom: 5,
                    color: "white",
                }}
            >
                {props.title ?? "Page"}
            </Text>
        </View>
    );
};

export default CPNHeaderTitle;
