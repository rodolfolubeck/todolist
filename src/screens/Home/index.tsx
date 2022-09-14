import { View, Text, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import { styles } from './style';

import { Logo } from "../../assets/Logo";
import { AddButton } from "../../assets/AddButton";

import { Todo } from "../../components/Todo";

export function Home(){
  return(
    <>
      <View style={styles.background}>
        <Image style={styles.logo}
          source={Logo}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder = 'Adicione uma tarefa'
            placeholderTextColor='#6b6b6b'
          />
          <TouchableOpacity>
            <Image style={styles.addButton}
              source={AddButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.countersContainer}>
          <View style={styles.counter}>
            <Text style={styles.countersText}>
              Criadas
            </Text>
            <View style={styles.counterNumberBox}>
              <Text style={styles.counterNumber}>0</Text>
            </View>
          </View>
          <View style={styles.counter}>
            <Text style={styles.countersText}>
              Concluídas
            </Text>
            <View style={styles.counterNumberBox}>
              <Text style={styles.counterNumber}>0</Text>
            </View>
          </View>
        </View>
        <Todo/>
        {/* <FlatList
          data={[]}
          renderItem={({item})=>(
              
          )}
          ListEmptyComponent={() =>(
            <View style={styles.separator}></View>
          )}
        /> */}
        
      </View>
    </>
  );
}
