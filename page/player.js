import React,{useState,useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AlbumArt from '../components/AlbumArt';
import Header from '../components/Header';
import Controls from '../components/Control';
import SliderBar from '../components/StatusbarSlider'
const Player=(props)=>{
    const[currentSong,setCurrentSong]=useState(0);
    const[song,setSong]=useState(props.api[currentSong].link);
    // const[buttonAction,setButtonAction]=(props.api[currentSong].link)
    const onForward=()=>{
        if(currentSong<props.api.length-1){
        let count=currentSong;
        count=count+1;
        setCurrentSong(count);
        // setSong(props.api[currentSong].link);
        // console.log(count);
        console.log(song);
      }
    }
      const onBack=()=>{
        if(currentSong>0){
        let count = currentSong;
        count=count-1;
        setCurrentSong(count);
      }
    }
    useEffect(() => {
      
      setSong(props.api[currentSong].link);
    }, [currentSong])
return (<View>
    <Header message={props.api[currentSong].header}/>
    <AlbumArt url={props.api[currentSong].url}/>

    <Controls track={props.api[currentSong].link} onBack={onBack} onForward={onForward} currentSong={currentSong} fromSong={song} api={props.api}/>
    {/* <Button onPress={setButtonAction(props.api[currentSong].link)}>Button1</Button>
    <Button onPress={setButtonAction(props.api[currentSong].link)}>Button2</Button>
    <Button onPress={setButtonAction(props.api[currentSong.link])}>Button3</Button> */}
</View>)
}
export default Player;