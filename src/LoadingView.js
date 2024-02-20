import { View } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const LoadingView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        style={{ width: 150, height: 150 }}
        source={require("../assets/loading.json")} // https://lottiefiles.com/97111-loading-spinner-dots
      />
    </View>
  );
};

export default LoadingView;
