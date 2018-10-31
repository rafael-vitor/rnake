import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

class Arrow extends PureComponent {
  render() {
    const { direction } = this.props;
    return (
      <View>
        <Text>Arrow {direction} </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   finger: {
//     borderColor: "#CCC",
//     borderWidth: 4,
//     backgroundColor: "pink",
//     position: "absolute"
//   }
// });

export { Arrow };