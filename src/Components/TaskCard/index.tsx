import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import Checkbox from 'expo-checkbox';
import {useState} from "react";
import Trash from "../../Images/Trash/Trash";

type Props = {
    description: string;
}
export function TaskCard({description,...rest}:Props) {
    const [isChecked, setChecked] = useState(false);
    return (
        
        <View style= {styles.container}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}
            color={isChecked?'#5E60CE':'#4EA8DE'}
            />
            
            <Text style={styles.textCard}>
                {description}
            </Text>
         <TouchableOpacity style={styles.btnDelete}>
             <Trash/>
         </TouchableOpacity>
        </View>
    );
}