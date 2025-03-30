import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    taskList: {
       
        marginHorizontal:24,
    },

    container: {// envolve cada card
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: "100%",
        backgroundColor: "#262626",
        marginBottom:8,
        paddingLeft:12,
        paddingRight:8,
        paddingVertical:12,
      
        
    }, 
    
    checkbox: {
        marginRight: 8,
        
        marginLeft:12,
        width:24,
        height:24,
        borderRadius: 100,
        color:'#F2F2F2',
       paddingLeft:8,
       
       
    },
    textCard: {
        flex:1,
        color: '#F2F2F2',
        fontSize: 14,
        marginHorizontal:8,
       textAlign:'left',
        paddingVertical:12,
    
    },
    textCardChecked: {
     textDecorationLine: 'line-through',
        flex:1,
        color: '#808080',
        fontSize: 14,
        marginHorizontal:8,
        textAlign:'left',
        paddingVertical:12,
       

    },
    btnDelete: {
       justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
        marginLeft:8,
      
     
    },
 


})