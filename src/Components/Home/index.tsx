import {Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import Rocket from '../../Images/Logo/Rocket'
import To from "../../Images/Logo/To";
import Do from "../../Images/Logo/Do";
import Clipboard from "../../Images/Clipboard/Clipboard";
import { PlusCircle} from 'phosphor-react-native';
import {TaskCounter} from "../TaskCounter";
import { TaskCard} from "../TaskCard"
import {useState} from "react";
export function Home() {
    
    const [item,setItem] = useState<string[]>([]);
    const[taskInput,setTaskInput] = useState("");
    const [isCheck, setIsChecked] = useState(false);
    const [taskCounter,setTaskCounter] = useState(0);
    const [taskFinishedCounter,setTaskFinishedCounter] = useState(0);

    function handleChange() {
        setIsChecked(!isCheck);
    }
    
    function handleChangeAddTaskCounter(){
        setTaskCounter(taskCounter  + 1);
    }
    function handleChangeRemoveTaskCounter(){
        setTaskCounter(taskCounter - 1);
    }
    function handleTaskAdd(){
       setItem(prevState => [...prevState,taskInput])
        setTaskInput('')
        handleChangeAddTaskCounter()
    }
    
   
    
  
    
    function handleRemoveTask(task:string){
        Alert.alert("Remover", `Tem certeza que deseja remover esta tarefa?`,[
            {
                text: 'Sim',
                onPress:()=>FinalizeRemoveTask(task)
                

            },
            {
                text: 'Não',
                style: 'cancel'
            }]);
        
    }

    function FinalizeRemoveTask(task:string){
        setItem(prevState => prevState.filter(item => item!==task))
        handleChangeRemoveTaskCounter()
       setTaskFinishedCounter(taskFinishedCounter+1)
    }
    
    
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
                value={taskInput}
                onChangeText={setTaskInput}
              
            />
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                <Text style={ styles.buttonText}>
                    <PlusCircle size={20} color="#F2F2F2" />
                </Text>
            </TouchableOpacity>

        </View>
       
    
           <View style={styles.containerSeeTasks}>

               <TaskCounter taskName={"Criadas"} numberOfTasks={taskCounter}/>
               <TaskCounter taskName={"Concluídas"} numberOfTasks={taskFinishedCounter}/>
           </View>
           
        <FlatList data={item}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={data => data}
                  renderItem={ ({ item })=>(
                      <TaskCard
                          key={item}
                         description={item}
                          onRemove={()=>handleRemoveTask(item)}
                          

                      />
                      
                  )}
          
                ListEmptyComponent={()=>(
                    <View style={styles.emptyBoxMessage}>
                        <Clipboard/>
                        <View style={styles.emptyBoxMessageText}>
                            <Text style={styles.emptyBoxMessageTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyBoxMessageDescription}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    </View>
                )}        
        />
            
                

            
         
            
        
    </View>);
}