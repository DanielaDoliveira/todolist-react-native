import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
 containerCountTasks: {
        flexDirection: "row",
        marginBottom:20,
        marginTop:0,
    },
    createdTasks: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    },
    createdTasksText: {
        marginRight:8,
        color:'#4EA8DE',
        fontWeight: 'bold',
        fontSize:14,

    },
    containerCounter: {
        paddingHorizontal:8,
        paddingVertical:2,
        backgroundColor: "#333333",
        borderRadius:999,
    },
    counterText: {
        fontSize:12,
        color:'#D9D9D9',
        fontWeight:"bold"
    }
})