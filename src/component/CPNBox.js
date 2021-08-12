import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { PRIMARY } from "./Config";

const CPNBox = (props) => {
    const iconProps = <View>{props.iconComponent ?? ""}</View>;
    return (
        <TouchableOpacity
            onPress={() => {
                if (props.onPress) props.onPress();
            }}
        >
            <View
                style={[
                    {
                        width: props.width ?? 110,
                        height: 100,
                        borderWidth: 1.5,
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 20,
                        marginTop: 15,
                        borderColor: PRIMARY,
                    },
                    props.style ?? {},
                ]}
            >
                <View style={{ flex: 1 }}>
                    {props.iconComponent != undefined && iconProps}
                    <View style={{ marginTop: -5 }}>
                        <Text style={{ textAlign: "center", fontSize: 15 }}>{props.title ?? ""}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CPNBox;
