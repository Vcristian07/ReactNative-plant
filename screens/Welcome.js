import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Button, Block, Text} from '../components'

class Welcome extends Component {
    static navigationOptions = {
       header: null
    }
  
  render() {
    return (
      <Block center middle>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({});
