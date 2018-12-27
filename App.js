import React from 'react';
import { AppRegistry, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Square } from "./square";
import { MoveFinger } from "./systems";
import { Arrow } from './arrow';

export default class App extends React.Component {
  render() {
    const { height, width } = Dimensions.get('window');
    // console.log({ height, width })

    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          2: { direction: '', renderer: <Arrow />},
          3: { position: [width/2, height/2], renderer: <Square />},
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
  },
});
