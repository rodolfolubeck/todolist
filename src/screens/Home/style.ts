import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 3,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 32
  },
  form: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 10,
    fontSize: 16,
    marginRight: 5
  },
  addButton:{
    flex: 1
  },
  countersContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  countersText: {
    color: "#4EA8DE",
    fontSize: 14
  },
  counterNumberBox: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: 22,
    marginLeft: 4,
    backgroundColor: "#262626",
    borderRadius: 10
  },
  counterNumber: {
    color: "#FFF",
    fontSize: 12
  },
  separator: {
    width: "90%",
    borderBottomColor: "#262626",
    borderBottomWidth: 1
  },

});