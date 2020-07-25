import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  FlatList,
  Image,
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
  }, 1000);

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
      <FlatList
        data={props.articles}
        renderItem={({ item }) => <ArticleItem article={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const ArticleItem = ({ article }) => {
  const { description, url, urlToImage } = article;
  return (
    <View style={styles.articleContainer}>
      <Image style={styles.articleImage} source={{ uri: urlToImage }} />
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDescription}>{description}</Text>
      <View style={styles.articleBtns}>
        <Button
          onPress={() => {
            console.log("Button pressed!");
          }}
          title="Open"
        />
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
    backgroundColor: "orange",
  },
  logoContainer: {
    alignItems: "center",
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
    width: "100%",
    padding: 5,
  },
  articleImage: {
    height: 200,
  },
  articleTitle: {
    textAlign: "center",
    padding: 20,
    fontSize: 17,
    color: "black",
    backgroundColor: "white",
  },
  articleDescription: {
    fontSize: 17,
    padding: 10,
    color: "black",
    backgroundColor: "white",
  },
  articleBtns: {
    flexDirection: "row",
    backgroundColor: "white",
  },
});
export default NewsScreen;
