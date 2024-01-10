import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "./AutoTintTruePrivacyChip";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const UIRShopContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable
        style={[styles.frameChild, styles.framePosition]}
        onPress={() => navigation.navigate("Home8")}
      />
      <AutoTintTruePrivacyChip
        content={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop={0}
        autoTintTruePrivacyChipLeft={2}
        autoTintTruePrivacyChipWidth={360}
        autoTintTruePrivacyChipHeight="unset"
        autoTintTruePrivacyChipRight="unset"
        autoTintTruePrivacyChipBottom="unset"
        onStatusBarPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.frameItem, styles.frameItemBorder]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.frameInner, styles.frameInnerPosition]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appLogo, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/app-logo.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.uirShop, styles.uirShopPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Text style={[styles.uirShop1, styles.uirShop1Typo]}>UIR SHOP</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appLogo, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/app-logo.png")}
        />
      </Pressable>
      <Text style={[styles.madwaPedia, styles.uirShop1Typo]}>Madwa Pedia</Text>
      <Pressable
        style={[styles.frameChild1, styles.frameLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <AutoTintTruePrivacyChip
        content={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop="0%"
        autoTintTruePrivacyChipLeft="0.55%"
        autoTintTruePrivacyChipWidth="99.17%"
        autoTintTruePrivacyChipHeight="51.06%"
        autoTintTruePrivacyChipRight="0.28%"
        autoTintTruePrivacyChipBottom="48.94%"
        onStatusBarPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.linePressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 2,
    position: "absolute",
  },
  frameItemBorder: {
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameInnerPosition: {
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    height: "48.94%",
    backgroundColor: Color.lightColor,
  },
  appLogoPosition: {
    height: "42.55%",
    width: "11.02%",
    bottom: "6.38%",
    top: "51.06%",
    position: "absolute",
  },
  uirShopPosition: {
    top: "61.7%",
    position: "absolute",
  },
  uirShop1Typo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    height: "26.6%",
  },
  pressableLayout: {
    width: "99.72%",
    position: "absolute",
  },
  frameLayout: {
    width: "99.45%",
    position: "absolute",
  },
  frameChild: {
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
    top: 0,
  },
  frameItem: {
    top: 48,
    width: 362,
    height: 1,
    left: 2,
    position: "absolute",
  },
  frameInner: {
    right: "0.55%",
    width: "99.45%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  systemUiconssideMenu: {
    left: "6.34%",
    right: "82.64%",
  },
  appLogo: {
    left: "20.11%",
    right: "68.87%",
  },
  uirShop1: {
    width: "30.85%",
  },
  uirShop: {
    left: "33.88%",
  },
  rectanglePressable: {
    right: "0.28%",
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    height: "48.94%",
    backgroundColor: Color.lightColor,
  },
  madwaPedia: {
    width: "43.53%",
    left: "33.61%",
    top: "61.7%",
    position: "absolute",
  },
  frameChild1: {
    height: "51.06%",
    top: "0%",
    right: "0%",
    bottom: "48.94%",
    left: "0.55%",
    backgroundColor: Color.lightColor,
  },
  linePressable: {
    height: "1.06%",
    top: "50.53%",
    right: "-0.14%",
    bottom: "48.4%",
    left: "0.41%",
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frame: {
    left: -2,
    width: 363,
    height: 94,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
});

export default UIRShopContainer;
