import { StyleSheet } from "react-native";

export const sliderStyle = StyleSheet.create({
  sliderContainer: {
    height: 100,
    marginTop: 20,
    backgroundColor: "transparent",
  },
  sliderValuesContainer: {
    height: 20,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  sliderValueText: {
    fontSize: 20,
  },
  sliderTitleContainer: {
    height: 30,
    width: "100%",
  },
  titleText: {
    fontSize: 24,
  },
  sliderBodyContainer: {
    height: 50,
    justifyContent: "center",
  },
});

export default sliderStyle;
