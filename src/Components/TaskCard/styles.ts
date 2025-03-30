import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
      
        width: '100%',
        height: 64,
       
        justifyContent: "center",
        alignItems: "center",
         backgroundColor: "#262626",
        marginBottom: 8,
       paddingHorizontal:20, 
        paddingVertical: 12,
        borderRadius: 8,
    }, 
    
    checkbox: {
        marginLeft: 15,
        borderRadius: 100,
        color:'#F2F2F2',
       
    },
    textCard: {
        color: '#F2F2F2',
        fontSize: 14,
        marginHorizontal:8
    },
    btnDelete: {
       justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
    }


})