import React, { Component } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CPNButton from "../../component/CPNButton";
import CPNLoading from "../../component/CPNLoading";
import CPNTextInput from "../../component/CPNTextInput";
import { PRIMARY } from "../../component/Config";

export class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            permission: false,
            is_loading: true,
            username: "",
            password: "",
        };
    }

    async componentDidMount() {
        await this.props.navigation.setOptions({
            headerStyle: {
                backgroundColor: PRIMARY,
                height: 0,
            },
            headerTitle: () => <View></View>,
            headerLeft: () => <View></View>,
            headerRight: () => <View></View>,
        });

        await this.fetchPermission();
    }

    async fetchPermission() {
        try {
            const token = await AsyncStorage.getItem("@token");

            if (token) {
                return this.props.navigation.replace("Router");
            }

            this.onLoading();
        } catch (error) {
            alert(error.toString());
        }
    }

    async onLogin() {
        try {
            this.onLoading(true);
            // let { data, status, error } = await axios.post("/login", {
            //     username: this.state.username,
            //     password: this.state.password,
            // });

            // if (status == 200) {
            //     await AsyncStorage.setItem("@token", data.token);
            //     return this.props.navigation.replace("Router");
            // } else {
            //     throw error;
            // }

            if(this.state.username =="111" && this.state.password =="111"){
                await AsyncStorage.setItem("@token", "token =============>");
                return this.props.navigation.replace("Router");
            }else{
                throw "รหัสผ่านไม่ถูกต้อง"
            }
        } catch (error) {
            this.onLoading();
            alert(error.toString());
        }
    }

    async onLoading(val = false) {
        await this.setState({
            is_loading: val,
        });
    }

    render() {
        if (this.state.is_loading) {
            return <CPNLoading></CPNLoading>;
        }
        if (!this.state.permission) {
            return (
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                    }}
                >
                    <View style={{ flex: 0.2 }}></View>

                    <View
                        style={{
                            flex: 0.3,
                            alignItems: "center",
                        }}
                    >
                        {/* <Image
                            source={require("../../../assets/logo.png")}
                            style={{
                                width: 310,
                                height: 50,
                            }}
                        /> */}
                    </View>

                    <View style={{ width: "80%", alignSelf: "center" }}>
                        <CPNTextInput
                            label="Username"
                            autoFocus={true}
                            placeholder="บัญชีผู้ใช้"
                            value={this.state.username}
                            onChangeText={(val) => {
                                this.setState({
                                    username: val,
                                });
                            }}
                            keyboardType="email-address"
                        />

                        <CPNTextInput
                            // autoFocus={true}
                            label="Password"
                            placeholder="ตัวอักษรและตัวเลขมากกว่า 6 หลัก"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(val) => {
                                this.setState({
                                    password: val,
                                });
                            }}
                        />

                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <CPNButton
                                title="Login"
                                onPress={() => {
                                    this.onLogin();
                                }}
                            />
                            <CPNButton
                                title="Forgot Password ?"
                                buttonStyle={"light-border"}
                                onPress={() => {
                                    console.log("forgot password");
                                }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            );
        }
    }
}

export default LoginPage;
