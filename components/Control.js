import  React,{useEffect,useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import { Audio } from 'expo-av';
import TRACKS from '../Data/api';

import SliderBar from '../components/StatusbarSlider'
 
const Controls=(props)=>{
        const [song, setSong] = useState(null);
        // const [api,setApi]=useState(Api);
        const [sound, setSound] = useState(null);
        const [isPlaying, setIsPlaying] = useState(true);
        const[currentSong,setCurrentSong]=useState(0);
        const[variation,setVariation]=useState(props.api[currentSong].link);
        const[slide,setSlide]=useState(0)
        const onPlaybackStatusUpdate= (status)=>{
            return status;
            setIsPlaying(status.isPlaying)
        }
      //   const url='https://drive.google.com/uc?export=download&id=17glJ01lUSc78sAyM-1caPI2PczwYKj_T';
      //   const onForward=()=>{
      //     if(currentSong<props.track.length-1){
      //     let count=currentSong;
      //     count=count+1;
      //     setCurrentSong(count);
      //     console.log(count);
      //   }
      // }
      //   const onBack=()=>{
      //     if(currentSong>0){
      //     let count = currentSong;
      //     count=count-1;
      //     setCurrentSong(count);
      //   }
      // }
        
        
        useEffect(()=>{
          playSound();
          console.log("effect");
      }, [props.track])
      const onPlayPausePress = async () => {
          if (!sound) {
            return;
          }
          if (isPlaying) {
            await sound.pauseAsync();
          } else {
            await sound.playAsync();
          }
        }
      
        async function playSound() {
            if(sound){
                await sound.unloadAsync();
            }
            console.log('Loading Sound');
            
            const { sound:newSound } = await Audio.Sound.createAsync(
               {uri:variation},
               {shouldPlay:isPlaying},
               onPlaybackStatusUpdate
               
            )
              setSound(newSound);
        }

        const variation1=()=>{
          setVariation(props.api[currentSong].link);
          console.log("variation1 called")
        }
        const variation2=()=>{
          setVariation(props.api[currentSong].link2);
          console.log("variation2 called")
        }
        const variation3=()=>{
          setVariation(props.api[currentSong].link3);
          console.log("variation3 called")
        }
       
          
       
      
const check = ()=>{
  console.log();
}
        return(<View>
        <SliderBar musicStatus={onPlaybackStatusUpdate(status)}/>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.0} onPress={check}>
            <Image style={[styles.secondaryControl, props.shuffleOn ? [] : styles.off]}
              source={require('../assets/shuffle_white_48x48.png')}/>
          </TouchableOpacity>
          <View style={{width: 40}} />
          <TouchableOpacity onPress={props.onBack}>
            <Image source={require('../assets/skip_previous_white_48x48.png')}/>
          </TouchableOpacity>
          <View style={{width: 20}} />
          {isPlaying?
            <TouchableOpacity onPress={onPlayPausePress}>
              <View style={styles.playButton}>
                <Image source={require('../assets/pause_circle_outline_white_48x48.png')}/>
              </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={onPlayPausePress}>
              <View style={styles.playButton}>
                <Image source={require('../assets/play_circle_outline_white_48x48.png')}/>
              </View>
            </TouchableOpacity>
          }
          <View style={{width: 20}} />
          <TouchableOpacity onPress={props.onForward}
            disabled={props.forwardDisabled}>
            <Image style={[props.forwardDisabled && {opacity: 0.3}]}
              source={require('../assets/skip_next_white_48x48.png')}/>
          </TouchableOpacity>
          <View style={{width: 40}} />
          <TouchableOpacity activeOpacity={0.0} onPress={props.onPressRepeat}>
            <Image style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
              source={require('../assets/repeat_white_48x48.png')}/>
          </TouchableOpacity>
          {/*   */}
         
        </View>
        <View style={styles.btnContainer}>
              <Button title="a" onPress={variation1} style={styles.button_cnt_end}></Button>
              <Button title="b" onPress={variation2} style={styles.button_cnt_center}></Button>
              <Button title="c" onPress={variation3} style={styles.button_cnt_end}></Button>
              </View>
        </View>
  
  
  
);}

export default Controls;

const styles = StyleSheet.create({
  container: {
      marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  },
  btnContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
    
  },
  button_cnt_center:{
  
    marginStart: 38,
    marginEnd: 38,
    padding:7,
    // borderColor:white,
    borderWidth:2,
    // backgroundColor:FFFFFF90,
  },
  button_cnt_start:{
    marginStart: 40,
    padding:7,
    // borderColor:colors.light,
    borderWidth:2,
    // backgroundColor:colors.light_transparent,
    
  },
  button_cnt_end:{
    marginEnd: 40,
    padding:7,
    // borderColor:colors.light,
    borderWidth:2,
    // backgroundColor:colors.light_transparent,
  }
})
//  // const [sound, setSound] = React.useState();

//         // async function playSound() {
//         //   console.log('Loading Sound');
//         //   const { sound } = await Audio.Sound.createAsync(
//         //      require('../assets/Taylor Swift - cardigan (Official).mp3')
//         //   );
//         //   setSound(sound);
      
//         //   console.log('Playing Sound');
//         //   await sound.playAsync(); }
      
//         // React.useEffect(() => {
//         //   return sound
//         //     ? () => {
//         //         console.log('Unloading Sound');
//         //         sound.unloadAsync(); }
//         //     : undefined;
//         // }, [sound]);
//          /* <TouchableOpacity title="Play" onPress={playSound}>
//         <View style={styles.playButton}>
//           <Image source={require('../assets/play_circle_outline_white_48x48.png')}/>
//         </View>
//         </TouchableOpacity>
       
//     // useEffect(() => {
//         //   const fetchSong = async () => {
//         //     try {
//         //       const data = api;
//         //       setSong('https://drive.google.com/uc?export=download&id=17glJ01lUSc78sAyM-1caPI2PczwYKj_T');
//         //     } catch (e) {
//         //       console.log(e);
//         //     }
//         //   }
      
//         //   fetchSong();
//         // }, [])
//         // const Controls = ({
// //   paused,
// //   shuffleOn,
// //   repeatOn,
// //   onPressPlay,
// //   onPressPause,
// //   onBack,
// //   onForward,
// //   onPressShuffle,
// //   onPressRepeat,
// //   forwardDisabled,
// // }) => (
//    // const Api =[{
//   //   key:1,
//   //   url:'https://drive.google.com/uc?export=download&id=17glJ01lUSc78sAyM-1caPI2PczwYKj_T'
//   // }]