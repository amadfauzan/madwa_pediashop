import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "./AutoTintTruePrivacyChip";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component3 = ({
  systemUiconssideMenu,
  content,
  systemUiconssideMenu1,
  component3Position,
  component3Top,
  component3Left,
  onComponent3Press,
}) => {
  const component3Style = useMemo(() => {
    return {
      ...getStyleValue("position", component3Position),
      ...getStyleValue("top", component3Top),
      ...getStyleValue("left", component3Left),
    };
  }, [component3Position, component3Top, component3Left]);

  return (
    <View
      style={[styles.component3, component3Style]}
      onPress={onComponent3Press}
    >
      <View style={[styles.component3Child, styles.rectangleViewPosition]} />
      <View style={[styles.component3Item, styles.component3Layout]} />
      <Image
        style={[styles.systemUiconssideMenu, styles.appLogoIconLayout]}
        contentFit="cover"
        source={systemUiconssideMenu}
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
      />
      <View style={[styles.component3Inner, styles.rectangleViewLayout]} />
      <Image
        style={[styles.appLogoIcon, styles.appLogoIconLayout]}
        contentFit="cover"
        source={require("../assets/app-logo.png")}
      />
      <Text style={[styles.uirShop, styles.uirShopTypo]}>UIR SHOP</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.systemUiconssideMenu, styles.appLogoIconLayout]}
        contentFit="cover"
        source={systemUiconssideMenu1}
      />
      <Image
        style={[styles.appLogoIcon, styles.appLogoIconLayout]}
        contentFit="cover"
        source={require("../assets/app-logo.png")}
      />
      <Text style={[styles.madwaPedia, styles.uirShopTypo]}>Madwa Pedia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    height: "48.94%",
    backgroundColor: Color.lightColor,
  },
  component3Layout: {
    width: "99.45%",
    position: "absolute",
  },
  appLogoIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "6.38%",
    width: "11.02%",
    height: "42.55%",
    top: "51.06%",
    position: "absolute",
  },
  rectangleViewLayout: {
    width: "99.72%",
    position: "absolute",
  },
  uirShopTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    left: "33.88%",
    top: "61.7%",
    height: "26.6%",
    position: "absolute",
  },
  component3Child: {
    right: "0.55%",
    backgroundColor: Color.lightColor,
    width: "99.45%",
    position: "absolute",
  },
  component3Item: {
    height: "51.06%",
    top: "0%",
    right: "0%",
    bottom: "48.94%",
    left: "0.55%",
    backgroundColor: Color.lightColor,
  },
  systemUiconssideMenu: {
    right: "82.64%",
    left: "6.34%",
  },
  component3Inner: {
    height: "1.06%",
    top: "50.53%",
    right: "-0.14%",
    bottom: "48.4%",
    left: "0.41%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
  },
  appLogoIcon: {
    right: "68.87%",
    left: "20.11%",
  },
  uirShop: {
    width: "30.85%",
  },
  rectangleView: {
    right: "0.28%",
    backgroundColor: Color.lightColor,
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    height: "48.94%",
  },
  madwaPedia: {
    width: "44.08%",
  },
  component3: {
    width: 363,
    height: 94,
  },
});

export default Component3;
