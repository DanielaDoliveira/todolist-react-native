import {StatusBar } from "react-native";

import {Home} from "./src/Components/Home";

export default function App() {
  return (
  
   <>
       
       <StatusBar barStyle="light-content" backgroundColor= "transparent" translucent/>
            <Home/>
        
       
   </>
   
  );
}

