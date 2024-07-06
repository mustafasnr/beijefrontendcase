import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  pageContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  headerContainer: {
    width: "60%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  pageIconContainer: {
    flex: 0.1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLinksContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 0.6,
  },
  headerAddToChartContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.15,
  },
  linkText: {
    fontSize: 20,
  },
  iconText: {
    color: "rgb(206,115,40)",
    fontSize: 32,
  },
});

export default headerStyle;
