import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Card, Divider } from "react-native-elements";
import CPNHeaderTitle from "../../component/CPNHeaderTitle";
import { PRIMARY } from "../../component/Config";
const defaultImg =
  "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg";

export class NewsMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_items: [],
    };
  }

  async componentDidMount() {
    this.props.navigation.addListener("focus", async () => {
      console.log("news");
      console.log("load news");
      const url =
        "https://newsapi.org/v2/everything?q=tesla&from=2021-07-12&sortBy=publishedAt&apiKey=2bd7ca7c5b1547f9bef1131ac69c3bb2";
  
      let result = await fetch(url).then((response) => response.json());
      console.log("load news finish");
      this.setState({
        news_items: result.articles,
      });
    });
  

    this.props.navigation.setOptions({
      headerStyle: {
        backgroundColor: PRIMARY,
      },
      headerTitle: (props) => <CPNHeaderTitle title="ข่าวสาร" />,
      headerLeft: () => <View></View>,
      headerRight: () => <View></View>,
    });
  }

  renderNews() {
    return this.state.news_items.map((news, index) => {
      return (
        // <View>
        //   <Text>{news.title}</Text>
        // </View>

        <Card
          key={index}
          featuredTitle={news.title}
          image={{
            uri: news.urlToImage || defaultImg,
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {news.description}
          </Text>
          <Divider style={{ backgroundColor: "#dfe6e9" }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>แหล่งข่าว : {news.source.name.toUpperCase()}</Text>
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {this.renderNews()}
      </SafeAreaView>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: "italic",
    color: "#b2bec3",
    fontSize: 10,
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: "#00000f",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
};
export default NewsMainPage;
