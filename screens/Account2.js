import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import EmailInputContainer from "../components/EmailInputContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Account2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.accountChild} />
      <AutoTintTruePrivacyChip
        content={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop={0}
        autoTintTruePrivacyChipLeft={0}
        autoTintTruePrivacyChipWidth={360}
        autoTintTruePrivacyChipHeight="unset"
        autoTintTruePrivacyChipRight="unset"
        autoTintTruePrivacyChipBottom="unset"
      />
      <View style={styles.accountItem} />
      <EmailInputContainer
        inputPlaceholder="Email Anda di sini"
        inputLabel="Alamat E-mail"
        propTop={199}
        onInputTextPress={() => navigation.navigate("Account")}
      />
      <EmailInputContainer
        inputPlaceholder="Sandi Anda di sini"
        inputLabel="Kata Sandi"
        propTop={302}
        onInputTextPress={() => navigation.navigate("Account")}
      />
      <View style={styles.view}>
        <View style={[styles.child, styles.iconLayout]} />
        <Text style={[styles.login, styles.textTypo]}>Login</Text>
      </View>
      <Pressable
        style={styles.belumPunyaAkunContainer}
        onPress={() => navigation.navigate("Account3")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.belumPunyaAkun}>Belum punya akun?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.daftarDisiniCuy}>Daftar disini cuy</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.accountInner}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Text style={[styles.masuk, styles.masukTypo]}>Masuk</Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.appLogoIcon, styles.pressableLayout]}
        contentFit="cover"
        source={require("../assets/app-logo.png")}
      />
      <Text style={[styles.madwaPedia, styles.masukTypo]}>Madwa Pedia</Text>
      <Pressable
        style={[styles.pressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home15")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  masukTypo: {
    textAlign: "left",
    fontFamily: FontFamily.header,
    position: "absolute",
  },
  pressableLayout: {
    width: 40,
    top: 49,
    height: 40,
    position: "absolute",
  },
  accountChild: {
    top: 0,
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  accountItem: {
    top: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    left: 0,
    position: "absolute",
  },
  child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorMediumseagreen_100,
    position: "absolute",
    borderRadius: Border.br_11xl,
    height: "100%",
  },
  login: {
    width: "47.02%",
    top: "20%",
    left: "26.51%",
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium,
    color: Color.lightColor,
    position: "absolute",
  },
  view: {
    top: 603,
    left: 30,
    width: 315,
    height: 40,
    position: "absolute",
  },
  belumPunyaAkun: {
    color: Color.lightColor,
  },
  text1: {
    color: Color.colorBlack,
  },
  daftarDisiniCuy: {
    color: Color.colorGoldenrod,
  },
  text: {
    fontFamily: FontFamily.spBody1Regular,
  },
  belumPunyaAkunContainer: {
    left: 25,
    top: 565,
    position: "absolute",
  },
  accountInner: {
    top: 588,
    left: 204,
    maxHeight: "100%",
    width: 141,
    position: "absolute",
  },
  masuk: {
    top: 113,
    left: 43,
    fontSize: FontSize.header_size,
    color: Color.lightColor,
  },
  rectangleView: {
    width: 360,
    height: 46,
    top: 49,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  appLogoIcon: {
    left: 73,
  },
  madwaPedia: {
    top: 59,
    left: 123,
    color: Color.colorMediumseagreen_100,
    display: "flex",
    alignItems: "center",
    width: 158,
    height: 25,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  icon: {
    overflow: "hidden",
  },
  pressable: {
    left: 23,
  },
  account: {
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Account2;
