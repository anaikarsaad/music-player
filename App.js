import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AlbumArt from './components/AlbumArt';
import Control from './components/Control';
import Test from './components/test';
// import Action from './actions/Actions';
import Api from './Data/api';
import Player from './page/player';

// export const Api =[{
//   key:1,
//   link:'https://drive.google.com/uc?export=download&id=17glJ01lUSc78sAyM-1caPI2PczwYKj_T'
//   },
//   {
//       key:2,
//       link:'https://drive.google.com/uc?id=1_NdZ_NDs8hL9cgdckz7sdgj2X1y7IMUU&export=download'
//   }]
  // export default Api;
export default function App() {
  return (
    <View style={styles.container}>
     <Player api={Api}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
// {/* <Header message="Spotify"/>
// <AlbumArt url='https://cdn5.f-cdn.com/contestentries/239765/14703052/558afa6d04e3f_thumb900.jpg'/>
// <Control track={Api}/>
// {/* <Action/> */}
// <Test/> */}