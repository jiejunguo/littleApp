import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="1 Stop Watch"
        onPress={() => navigation.navigate('StopWatch')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;