import React, { Component } from "react";
import { View, Text, Button} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requireText: " ",
      flag: false
    };
  }
  componentDidMount() {
    let str = "";

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        if (i >= j) {
          str = str.concat("Hello" + " ");
        }
      }
      str = str.concat("\n\n");
    }
    this.setState({ requireText: str });
  }
  handleChange() {
    this.setState({
      flag: true
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 5,
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flex: 1, left: -50, position: "absolute" }}>
          <Text>{this.state.requireText}</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: 180,
            height: 200,
            backgroundColor: this.state.flag == true ? "green" : "pink",
            opacity: 0.6,
            marginTop: 90
          }}
        />
        <View style={{ flex: 1, paddingTop: 20 }}>
          <Button
            title="Press"
            color="red"
            onPress={() => this.handleChange()}
          />
          <Text>{this.state.flag == true ? "Button Pressed" : ""}</Text>
        </View>
      </View>
    );
  }
}
