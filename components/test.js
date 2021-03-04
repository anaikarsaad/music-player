import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function Test() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/Taylor Swift - cardigan (Official).mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View >
    {/* <TouchableOpacity onPress={playSound}>
    <View >
          <Image source={require('../assets/play_circle_outline_white_48x48.png')}/>
        </View>
    </TouchableOpacity> */}
      {/* <Button title="Play Sound" onPress={playSound} /> */}
    </View>
  );
}