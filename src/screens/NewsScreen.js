import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  FlatList,
  Image,
  SafeAreaView,
  Linking,
} from "react-native";

const NewsScreen = () => {
  const API_KEY = "bb893b1758aa45dbb9751e6aeab90835";
  const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  if (loading) {
    return <SplashScreen />;
  } else {
    return <HomeScreen articles={articles} />;
  }
};

const SplashScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/image/NewsBackground.jpg")}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Newzzz</Text>
          <Text style={styles.logoDescription}>
            Get your doze of daily news!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const HomeScreen = (props) => {
  return (
    <View>
      <SafeAreaView style={{ alignItems: "center" }}>
        <FlatList
          data={props.articles}
          renderItem={({ item }) => <ArticleItem article={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const ArticleItem = ({ article }) => {
  const { description, url, urlToImage } = article;
  const URLPress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Don't know how to open this URL");
    }
  }, []);

  return (
    <View style={styles.articleContainer}>
      <Image style={styles.articleImage} source={{ uri: urlToImage }} />
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDescription}>{description}</Text>
      <View style={styles.articleBtns}>
        <Button onPress={URLPress} title="Open" />
        <Button
          onPress={() => {
            console.log("Button pressed!");
          }}
          title="Read later"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  articleContainer: {
    borderWidth: 0,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  articleImage: {
    height: 200,
    borderRadius: 10,
  },
  articleTitle: {
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 17,
    color: "black",
    backgroundColor: "white",
  },
  articleDescription: {
    fontSize: 14,
    padding: 10,
    color: "black",
    backgroundColor: "white",
  },
  articleBtns: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default NewsScreen;
