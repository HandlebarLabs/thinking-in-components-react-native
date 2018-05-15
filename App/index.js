import React from "react";
import { View, Text } from "react-native";
import { Font } from "expo";

export const loadFonts = () =>
  Font.loadAsync({
    "bangers-regular": require("./assets/fonts/Bangers-Regular.ttf"),
    "quicksand-regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-light": require("./assets/fonts/Quicksand-Light.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });

export default class App extends React.Component {
  state = {
    fontsReady: false
  };

  componentDidMount() {
    loadFonts().then(() => this.setState({ fontsReady: true }));
  }
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Welcome!</Text>
      </View>
    );
  }
}
