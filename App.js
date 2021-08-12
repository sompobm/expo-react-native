import React, { Component } from "react";
import Route from "./router/router";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackScreen } from "./router/navigation";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        };
    }

    async componentDidMount() {
        //this.loadFonts();
        LogBox.ignoreAllLogs(["Non-serializable values were found in the navigation state"]);
    }

    //async loadFonts() {
        // await Font.loadAsync({
        //     // Load a font `Montserrat` from a static resource
        //     kanitLight: require("./assets/fonts/Kanit-Light.ttf"),

        //     // Any string can be used as the fontFamily name. Here we use an object to provide more control
        //     kanitBold: {
        //         uri: require("./assets/fonts/Kanit-SemiBold.ttf"),
        //     },
        // });
        // this.defaultFonts();
    //}

    // async defaultFonts() {
    //     const customTextProps = {
    //         style: {
    //             fontFamily: "kanitLight",
    //         },
    //     };
    //     setCustomText(customTextProps);
    // }

    render() {
        return (
            <NavigationContainer>
                <AppStackScreen />
            </NavigationContainer>
        );
    }
}

export default App;
