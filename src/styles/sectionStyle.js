import { StyleSheet } from "react-native";

export const sectionStyle = StyleSheet.create({
  sectionContainer: {
    width: "60%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  packageCreateContainer: {
    width: "50%",

    flexDirection: "column",
    justifyContent: "space-between",
  },
  showPackageInfoContainer: {
    width: "40%",
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  changeSliderContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  packageInfoContainer: {
    width: "100%",
    height: 250,

    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default sectionStyle;
