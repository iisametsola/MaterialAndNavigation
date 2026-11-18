import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, StyleSheet, Button} from 'react-native';

type Props = StackScreenProps<any>

const HomeScreen = ({navigation}: Props) => {
  return (  
    <View style={styles.container}> 
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('Second')} />
    </View>
  );
}
export default HomeScreen;

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