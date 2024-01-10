import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UIRShopContainer from "../components/UIRShopContainer";
import PriceCard from "../components/PriceCard";
import { Border, Color } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <UIRShopContainer />
      <PriceCard />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: 511,
    left: -2,
    width: 462,
    height: 289,
    overflow: "hidden",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
