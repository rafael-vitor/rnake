import React from 'react';
import { AppRegistry, StatusBar, StyleSheet, Text, View } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems";
import { Arrow } from './arrow';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: { direction: 'left', renderer: <Arrow />}, //-- Notice that each entity has a unique id (required)
        }}>

        <StatusBar hidden={false} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
