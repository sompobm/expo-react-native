import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const AppStack = createStackNavigator();

import Router from "./router";
import HomePage from "../src/page/home/home";
import NewsPage from "../src/page/news/news";
import LoginPage from "../src/page/login/login";

export const HomeStackScreen = (props) => {
    return (
        <HomeStack.Navigator initialRouteName={"MainHomePage"}>
            <HomeStack.Screen name="HomePage" component={HomePage} />
        </HomeStack.Navigator>
    );
};


export const NewStackScreen = (props) => {
    return (
        <NewsStack.Navigator initialRouteName={"NewsPage"}>
            <NewsStack.Screen name="NewsPage" component={NewsPage} />
        </NewsStack.Navigator>
    );
};
export const AppStackScreen = (props) => {
    return (
        <AppStack.Navigator initialRouteName={"LoginPage"}>
            <AppStack.Screen name="LoginPage" component={LoginPage}  />
            <AppStack.Screen
                name="Router"
                component={Router}
                options={{
                    headerTitle: "",
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    );
};
