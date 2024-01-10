import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PriceCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameLayout1]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.saldoUircashAnda, styles.rp650Position]}>
          Saldo Uircash Anda
        </Text>
        <Image
          style={styles.phwalletFillIcon}
          contentFit="cover"
          source={require("../assets/phwalletfill.png")}
        />
        <Text style={[styles.rp650, styles.rp650Position]}>Rp. 650</Text>
        <Text style={[styles.lihatHistoriTransaksi, styles.rp650Position]}>
          Lihat Histori Transaksi
        </Text>
        <Pressable
          style={styles.materialSymbolsarrowCircle}
          onPress={() => navigation.navigate("Home4")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowcirclerightoutline.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 124,
    overflow: "hidden",
  },
  frameLayout: {
    width: 309,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  rp650Position: {
    textAlign: "center",
    left: 7,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    backgroundColor: Color.lightColor,
    height: 87,
  },
  saldoUircashAnda: {
    top: 15,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSeagreen_100,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 7,
  },
  phwalletFillIcon: {
    top: 38,
    left: 261,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  rp650: {
    top: 31,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.biryaniRegular,
    color: Color.colorDarkolivegreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 101,
    height: 44,
    textAlign: "center",
    left: 7,
  },
  lihatHistoriTransaksi: {
    top: 96,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightColor,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 7,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolsarrowCircle: {
    left: 267,
    top: 92,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frame1: {
    left: 30,
    backgroundColor: Color.colorMediumseagreen_100,
    overflow: "hidden",
    height: 124,
  },
  frame: {
    top: 120,
    left: -2,
    width: 339,
    overflow: "hidden",
    position: "absolute",
  },
});

export default PriceCard;
