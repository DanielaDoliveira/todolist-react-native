import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {CheckBox} from '@rneui/themed'
import React, { useState} from "react";
import Trash from "../../Images/Trash/Trash";
import {TaskDTO} from "../../DTO/TaskDTO";


type Props = TaskDTO & {
    onRemove: () => void;
    onDone: (id:string) => void;
 
}

export function TaskCard({id,isCompleted,description,onRemove,onDone,...rest}:Props) {
    


    return (
        
        
        <View style={styles.taskList}>
        
        <View style= {styles.container}>
            
            <CheckBox style = { styles.checkbox}
                containerStyle = {{backgroundColor: 'transparent' }}
                checkedColor = "#5E60CE"
                uncheckedColor = "#4EA8DE"
                checkedIcon = "check-circle"
                uncheckedIcon = "circle-o"
                checked = {isCompleted}
                onPress = {()=> {
               onDone(id)
                 
                }
              
            }
            />
            {isCompleted?(
                        <Text style={ styles.textCardChecked}>{description}</Text>
                ) : (
                        <Text style={ styles.textCard}>{description}</Text>
                )}
                
        
            <TouchableOpacity style={styles.btnDelete} onPress={onRemove}>
                <Trash/>
            </TouchableOpacity>
        </View>
        </View>
    );

}
