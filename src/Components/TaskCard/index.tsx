import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import Checkbox from 'expo-checkbox';
import React, { useState} from "react";
import Trash from "../../Images/Trash/Trash";

type Props = {
    description: string;
    onRemove: () => void;
   
}

export function TaskCard({description,onRemove,...rest}:Props) {
    
  const [isCheck, setIsChecked] = useState(false);
  function handleChange() {
      setIsChecked(!isCheck);
  }
    return (
        <View style={styles.taskList}>
        
        <View style= {styles.container}>
            <Checkbox style={styles.checkbox} value={isCheck} onValueChange={handleChange}
            color={isCheck?'#5E60CE':'#4EA8DE'}
            />

            {isCheck?(
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
