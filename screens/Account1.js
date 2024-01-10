import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import EmailInput from "../components/EmailInput";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Account1 = () => {
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
      <EmailInput
        emailAddress="FransDytoEpendri21"
        userEmail="Username"
        propTop={194}
      />
      <View style={styles.inputtext}>
        <Image
          style={[styles.bgIcon, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.fransdyto21gmailcom}>fransdyto21@gmail.com</Text>
        <Text style={[styles.alamatEMail, styles.mendaftarTypo]}>
          Alamat E-mail
        </Text>
        <Text style={[styles.show, styles.showTypo]}>Show</Text>
      </View>
      <EmailInput
        emailAddress="**********"
        userEmail="Kata Sandi"
        propTop={400}
      />
      <EmailInput
        emailAddress="**********"
        userEmail="Konfirmasi Kata Sandi"
        propTop={502}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Account2")}
      >
        <View style={[styles.child, styles.childPosition]} />
        <Text style={[styles.lanjutkan, styles.lanjutkanTypo]}>Lanjutkan</Text>
      </Pressable>
      <Text style={[styles.udahPunyaAkunContainer, styles.lanjutkanTypo]}>
        <Text style={styles.udahPunyaAkun}>Udah punya akun?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.loginLah}>Login lah</Text>
      </Text>
      <Image
        style={styles.accountInner}
        contentFit="cover"
        source={require("../assets/line-41.png")}
      />
      <Text style={[styles.mendaftar, styles.mendaftarTypo]}>Mendaftar</Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.appLogoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/app-logo.png")}
      />
      <Text style={styles.madwaPedia}>Madwa Pedia</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/systemuiconssidemenu2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  mendaftarTypo: {
    fontFamily: FontFamily.header,
    color: Color.lightColor,
    textAlign: "left",
    position: "absolute",
  },
  showTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  lanjutkanTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
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
  bgIcon: {
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fransdyto21gmailcom: {
    left: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  alamatEMail: {
    marginTop: -52,
    left: 12,
    fontSize: FontSize.size_mini,
    color: Color.lightColor,
    top: "50%",
    fontFamily: FontFamily.header,
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    display: "none",
    fontSize: FontSize.uI16Medium_size,
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  inputtext: {
    top: 298,
    right: 10,
    left: 7,
    height: 50,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_11xl,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  lanjutkan: {
    width: "47.02%",
    top: "20%",
    left: "26.51%",
    color: Color.lightColor,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  pressable: {
    top: 662,
    left: 25,
    width: 315,
    height: 40,
    position: "absolute",
  },
  udahPunyaAkun: {
    color: Color.lightColor,
  },
  text: {
    color: Color.colorBlack,
  },
  loginLah: {
    color: Color.colorGoldenrod,
  },
  udahPunyaAkunContainer: {
    top: 624,
    left: 56,
    fontFamily: FontFamily.spBody1Regular,
  },
  accountInner: {
    top: 647,
    left: 225,
    width: 78,
    height: 0,
    position: "absolute",
  },
  mendaftar: {
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
    fontFamily: FontFamily.header,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    left: 23,
    overflow: "hidden",
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

export default Account1;
