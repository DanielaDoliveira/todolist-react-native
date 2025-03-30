import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import Rocket from '../../Images/Logo/Rocket'
import To from "../../Images/Logo/To";
import Do from "../../Images/Logo/Do";
import Clipboard from "../../Images/Clipboard/Clipboard";
import { PlusCircle} from 'phosphor-react-native';
import {TaskCounter} from "../TaskCounter";
import { TaskCard} from "../TaskCard"
export function Home() {
    return (<View style= {styles.main}>
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
       
    
           <View style={styles.containerSeeTasks}>

               <TaskCounter taskName={"Criadas"} numberOfTasks={0}/>
               <TaskCounter taskName={"Concluídas"} numberOfTasks={0}/>
           </View>
           
           <View style={styles.taskList}>
               <View style = { styles.containerTasks}>
                   <TaskCard description={" Estudar React Native para construir apps mobile"}/>
                   <TaskCard description={" Integer urna interdum massa libero auctor neque turpis turpis semper."}/>
              
                   <TaskCard description={" Estudar .NET."}/>
                 

               </View>
       
            
            {/*<View style={styles.emptyBoxMessage}>*/}
            {/*  <Clipboard/>*/}
            {/* <View style={styles.emptyBoxMessageText}>*/}
            {/*     <Text style={styles.emptyBoxMessageTitle}>*/}
            {/*        Você ainda não tem tarefas cadastradas*/}
            {/*     </Text>*/}
            {/*     <Text style={styles.emptyBoxMessageDescription}>*/}
            {/*         Crie tarefas e organize seus itens a fazer*/}
            {/*     </Text>*/}
            {/* </View>*/}
            {/*</View>*/}
            
            
        </View>
    </View>);
}