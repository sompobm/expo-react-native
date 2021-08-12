import React, { useState, useEffect } from "react";
import { View, Text, Platform, Alert, Dimensions, StyleSheet, Image } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, NewStackScreen } from "./navigation";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

import { PRIMARY, SKYBLUE } from "../src/component/Config";

const Route = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    color = focused ? SKYBLUE : "rgba(15,30,66,0.3)";
                    size = 25;
                    if (route.name === "หน้าหลัก") {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                        return <Text>หน้าหลัก</Text>;
                    } else if (route.name === "ข่าวสาร") {
                        return <Text>ข่าวสาร</Text>;
                    } else if (route.name === "แจ้งเตือน") {
                        return <Text>แจ้งเตือน</Text>;
                    } else if (route.name === "ตั้งค่า") {
                        return <Text>ตั้งค่า</Text>;
                    }
                },
                headerStyle: {
                    height: 0,
                },
            })}
            tabBarOptions={{
                labelStyle: {
                    textTransform: "none",
                    fontSize: 16,
                },
                style: {
                    height: Platform.OS === "ios" ? height * 0.15 : 70,
                    padding: 0,
                },
            }}
        >
            <Tab.Screen
                name="หน้าหลัก"
                listeners={({ navigation, route }) => ({
                    tabPress: async (e) => {
                        // await this.onPermissionPage(route);
                    },
                })}
                component={HomeStackScreen}
            />

            <Tab.Screen
                name="ข่าวสาร"
                listeners={({ navigation, route }) => ({
                    tabPress: async (e) => {
                        // await this.onPermissionPage(route);
                    },
                })}
                component={NewStackScreen}
            />

            <Tab.Screen
                name="แจ้งเตือน"
                listeners={({ navigation, route }) => ({
                    tabPress: async (e) => {
                        // await this.onPermissionPage(route);
                    },
                })}
                component={HomeStackScreen}
            />

            <Tab.Screen
                name="ตั้งค่า"
                listeners={({ navigation, route }) => ({
                    tabPress: async (e) => {
                        // await this.onPermissionPage(route);
                    },
                })}
                component={HomeStackScreen}
            />
        </Tab.Navigator>
    );
};

export default Route;

const styles = StyleSheet.create({
    iconMenu: {
        marginTop: "5%",
        width: "40%",
        height: "50%",
        alignSelf: "center",
    },
});
