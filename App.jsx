import { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button} from 'react-native';

export default function App() {
  //
  const moonAnimation = useRef(new Animated.Value(0)).current;
  //
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: true,
    }).start();
  }, [moonAnimation]);


  const startAnimation = () => {
    moonAnimation.setValue(0);
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: true,
    }).start();
  };

   const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 300],
   });

   const backgroundColor = moonAnimation.interpolate({
    inputRange: [0, 0.40, 0.55, 0.60, 0.75, 1],
    outputRange: ['lightblue', 'lightblue', 'black', 'black', 'lightblue', 'lightblue'],
  });



  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Eclipse 2024</Text>
      <View style = {styles.Eclipse}>
      <View style = {styles.Sun}></View>
      <Animated.View style={[styles.Moon,{ transform: [{ translateX: moonLeft }] }]}></Animated.View>
      </View>
      <Button style ={styles.Button} title="Restart Animation" onPress={startAnimation} />
      </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  Eclipse:{
    marginTop: 50,
    marginBottom: 50,
  },
  Sun:{
    borderRadius: 500,
    backgroundColor: 'yellow',
    padding: 50,
  },
  Moon:{

    
    borderRadius: 500,
    backgroundColor: 'grey',
    padding: 45,
    position: 'absolute',

  },
  Button:{
    marginTop: 50,
    
  }
});
