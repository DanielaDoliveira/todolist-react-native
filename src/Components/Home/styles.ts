import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    main: {
        flex:1,
        backgroundColor:'#0D0D0D',
        fontFamily:'Inter'
    },

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
    containerSeeTasks: {
        marginHorizontal:24,
        marginTop:32,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
  
    emptyBoxMessage: {
        marginHorizontal:24,
        paddingHorizontal:20,
        paddingVertical:48,
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:1,
        borderStyle:'solid',
        borderColor:'#333333',
        
    },
    emptyBoxMessageText:{
        marginHorizontal:20,
        marginTop:16,
     alignItems:'center',
        justifyContent:'center',
        width:287,
      
    },
    emptyBoxMessageTitle: {
        fontSize:14,
        fontWeight:'bold',
        color:'#808080',
       
       
        
    },
    emptyBoxMessageDescription: {
        fontSize:14,
        color:'#808080',
    },

//card



})