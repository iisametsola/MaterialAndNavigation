import {Appbar}from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

export default function AppBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}
      <Appbar.Content title="My App" />
    </Appbar.Header>
  );
}