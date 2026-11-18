import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SecondScreen = () => {
  return (  
    <View style={styles.container}> 
      <Text style={styles.text}>SecondScreen</Text>
    </View>
  ) 
};
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});