import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

class App extends Component {

  showAlert = () => {
    Alert.alert(
      'Message',
      'This is a message',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        }
      ]
    )
  } // This is also the same as

  render(){
    return(
      <View style={styles.container}>
        <Text>Hey Beautiful!</Text>
        <Button title="Show Alert" onPress={this.showAlert}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#87b9d6", 
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})

export default App;