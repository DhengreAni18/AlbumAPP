import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  },
  textStyle: {
    fontSize: 20
  }
  function removeTransition(event) {
    if (event.propertyName !== 'transform') return
    event.target.classList.remove('playing')
  }
  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
  }
  const keys = Array.from(document.querySelectorAll('.key'))
  keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)
};

export default Header;
