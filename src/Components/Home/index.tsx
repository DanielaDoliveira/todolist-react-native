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
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'
import {TaskDTO} from "../../DTO/TaskDTO";
export function Home() {
    const [tasks, setTasks] = useState <TaskDTO[]> ([])

 
    const[taskInput,setTaskInput] = useState("");
  
    const [taskCounter,setTaskCounter] = useState(0);
    const [taskFinishedCounter,setTaskFinishedCounter] = useState(0);


    function handleTaskDone(id: string) {
        setTasks((task) =>
            task.map((task) => {
             task.id === id ? (Complete()) : null
                console.log(task)

function Complete(){
    task.isCompleted  = !task.isCompleted

    if(task.isCompleted) {
        setTaskFinishedCounter(taskFinishedCounter + 1);
    }
    else{
        setTaskFinishedCounter(taskFinishedCounter -  1);
    }
}
             
                return task
            }),
            
        )
    }

    function handleChangeAddTaskCounter(){
        setTaskCounter(taskCounter  + 1);
    }
    function handleChangeRemoveTaskCounter(){
        setTaskCounter(taskCounter - 1);
    }
    function handleTaskAdd(){
        if (taskInput !== '' && taskInput.length >= 5) {
            setTasks(prevState => [...prevState,
                {id: uuidv4(), isCompleted: false, description: taskInput.trim()},

            ])
            setTaskInput('')
            handleChangeAddTaskCounter()
        }
        else{
            Alert.alert( "Erro ao adicionar tarefa", "Você precisa escrever mais de cinco caracteres para adicionar uma tarefa.")
        }
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

    function FinalizeRemoveTask(id:string){
        setTasks((tasks) => tasks.filter((task) => task.id !== id)),
        handleChangeRemoveTaskCounter()
      
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
           
        <FlatList data={tasks}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => uuidv4()}
                  renderItem={ ({ item })=>(
                      <TaskCard
                          key={item.id}
                          onDone={()=>handleTaskDone(item.id)}
                          onRemove={()=>handleRemoveTask(item.id)}
                          {...item}

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