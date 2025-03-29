import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import Rocket from '../../Images/Logo/Rocket'
import To from "../../Images/Logo/To";
import Do from "../../Images/Logo/Do";
import { PlusCircle} from 'phosphor-react-native';
export function Home() {
    return (<>
    <View style={styles.header}>

        <Rocket style={styles.logoRocket}/>
       <View style={styles.logoTodo}>
           <To></To>
           <Do></Do>
       </View>
    </View>
        
        <View style={styles.containerAddTask}>
            <TextInput
                style={styles.input}
                placeholder="Descrição da tarefa"
                placeholderTextColor="#808080"
                onChangeText={()=>{}}
              
            />
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={ styles.buttonText}>
                    <PlusCircle size={20} color="#F2F2F2" />
                </Text>
            </TouchableOpacity>

        </View>
    
    </>);
}