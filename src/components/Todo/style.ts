import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 8,
    borderRadius: 8,
    height: 64,
    width: "90%",
    backgroundColor: "#262626"
  },
  checkBox: {
    flex:2,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    color: "#F2F2F2",
    padding: 12,
    borderColor: "#4EA8DE",
  },
  trashButton: {
    justifyContent: "center",
    padding: 12
  },
  trashIcon: {
    width: 32,
    height: 32
  }
})