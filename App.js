import { View } from "react-native";
//import { StatusBar } from 'expo-status-bar';
//import { Button, StyleSheet, Text, View, Platform, StatusBar  } from 'react-native';
//import {useDimensions} from '@react-native-community/hooks'

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}
    ></View>
  );
}

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   // alignItems: 'center',
//   // justifyContent: 'center',
// },
// });

// <View style={styles.container}>
//   <Button  title='Click Me'
//   onPress={() => console.log("Button tapped")}
//   />
//</View>
