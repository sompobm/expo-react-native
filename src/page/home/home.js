import React, { Component } from "react";
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image, StyleSheet } from "react-native";
import CPNHeaderTitle from "../../component/CPNHeaderTitle";
import CPNBox from "../../component/CPNBox";
import { PRIMARY, HeightHeader } from "../../component/Config";

const { width } = Dimensions.get("window");
const height = width * 0.6;
export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeText: 0,
            width: width,
            height: height,
        };
    }

    async componentDidMount() {
        
        let params = this.props.route.params;

        if (params) {
            this.setState({ ...this.state, ...params }, () => {
                console.log(this.state);
            });
        }

        await this.props.navigation.setOptions({
            headerStyle: {
                height: HeightHeader,
                backgroundColor: PRIMARY,
            },
            headerTitle: () => <CPNHeaderTitle title="" />,
            headerLeft: () => (
                <View style={{ marginLeft: 15, paddingBottom: 5 }}>
                    <Text style={{ color: "white", fontSize: 30 }}>{"JWD VISITOR"}</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{ marginRight: 15, paddingBottom: 10 }}>
                    <Text style={{ color: "white", fontSize: 22, textAlign: "right" }}>{this.state.location_name}</Text>
                    <Text style={{ color: "white", fontSize: 16 }}>{`จำนวน ${"0"} point`}</Text>
                </View>
            ),
        });
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
                <View
                    style={{
                        flex: 0.1,
                        backgroundColor: PRIMARY,
                    }}
                ></View>

                <View
                    style={{
                        flex: 0.3,
                        marginTop: -40,
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: PRIMARY,
                        backgroundColor: "silver",
                    }}
                >
                  <Text style={{marginTop:50,marginLeft: 150}}>สวัสดีชาวโลก</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default HomePage;

const styles = StyleSheet.create({
    iconMenu: {
        marginTop: "10%",
        width: "60%",
        height: "68%",
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    scroll: {
        width,
        height,
    },
    pagination: {
        flexDirection: "row",
        alignSelf: "center",
        bottom: 0,
    },
    pagingText: {
        color: "silver",
        margin: 3,
    },
    pagingActiveText: {
        color: PRIMARY,
        margin: 3,
    },
});
