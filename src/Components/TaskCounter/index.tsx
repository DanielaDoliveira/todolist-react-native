
import {Text, View} from "react-native";
import {styles} from "./styles";

type Props = {
    taskName: string;
    numberOfTasks: number;
}
export function TaskCounter({ taskName,numberOfTasks,...rest }: Props) {
    return(
            <View style={styles.containerCountTasks}>
                <View style={styles.createdTasks}>
                    <Text style = {styles.createdTasksText}>
                        {taskName}
                    </Text>
                    <View style={styles.containerCounter}>
                        <Text style = { styles.counterText}> {numberOfTasks} </Text>
                    </View>
                </View>
            </View>
        
    );
}