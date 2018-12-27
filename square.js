import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

const RADIUS = 20;

class Square extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;

    return (
      <View
        style={[
          styles.square,
          { left: x, top: y }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  square: {
    borderColor: "#CCC",
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "red",
    position: "absolute"
  }
});

export { Square };
