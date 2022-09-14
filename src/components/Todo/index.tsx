import { View,Text,Image,TouchableOpacity } from "react-native";

import { ThrashIcon } from "../../assets/ThrashIcon";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./style";

export function Todo(){
  return(
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor="#5E60CE"
        style={styles.checkBox}
        onPress={(isChecked: boolean) => {}}
        textStyle={{color: "#F2F2F2"}}
        text="TODO COMPONENT"
      />
      <TouchableOpacity style={styles.trashButton}>
        <Image style={styles.trashIcon}
          source={ThrashIcon}
        />
      </TouchableOpacity>
    </View>
  );
}