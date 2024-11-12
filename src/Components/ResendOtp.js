import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../assets/Theme";


export default function ResendOtp(props) {
  useEffect(() => {
    if (props.second < 0) return;
    const interval = setInterval(() => {
      if (props.second != 0) {
        props.setSecond((seconds) => seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props.second, props.setSecond]);

  useEffect(() => {
    if (props.second == 0) {
      props.handleTimer();
    }
  }, [props.second]);

  const formatTime = () => {
    const minutes = Math.floor(props.second / 60);
    const remainingSeconds = props.second % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}s`;
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.timerText, props.testStyle]}>Resend in {formatTime()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent:'flex-end',
    // marginTop: 10,
    // marginStart: 5,
  },
  timerText: {
    fontSize: 12,
    color:'rgba(255, 255, 255, 0.6)',
    // fontFamily: "medium",
    fontWeight:'400'
  },
});
