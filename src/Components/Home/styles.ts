import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header:{
       flexDirection: "row", 
        marginTop: 70,
        marginBottom:71,
       justifyContent: "center", alignItems: "center",
    },
    logo: {},
    logoRocket: {
        marginRight:11
    },
 
    logoTodo: {
        flexDirection: "row",
    },
    containerAddTask: { 
        flexDirection: "row",
        marginHorizontal:24,
    },
    input:{
        flex: 1,
        marginRight:4,
        backgroundColor:'#1F1E25',
        height:56,
        borderRadius:5,
        color:'#F2F2F2',
        padding:16,
        fontSize:16,
    },
    button: {
        width:52,
        height:52,
        borderRadius:5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent:'center',
       
        
    },
    buttonText: {
        color:'#F2F2F2',
        fontSize:24,
        
    },

})