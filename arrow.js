import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

class Arrow extends PureComponent {
  render() {
    const { direction } = this.props;
    return (
      <View>
        <Text style={{ fontSize: 30, left: 30, top: 300 }}>Arrow {direction} </Text>
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