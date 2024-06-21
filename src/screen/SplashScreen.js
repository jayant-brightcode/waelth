import { StatusBar, StyleSheet, Text, View ,Image} from "react-native"
import Colors from "../utils/Color";
import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { getToken } from "../utils/LocalStorage";

const SplashScreen = ()=>{

    const navigation = useNavigation()


    let token;
    useEffect(() => {
      launcher();
  }, []);
  
    const launcher = async () => {
        token = await getToken()
    
    }
   useEffect(() => {
       // Use a timer to navigate to the SignupScreen after 2 seconds



       

       const timer = setTimeout(() => {
    if(token==null){
       console.log("sss",token)
       navigation.replace('LoginScreen'); // Navigate to the SignupScreen
       

     }else{
       console.log("ppp",token)
       navigation.replace('HomeScreen'); // Navigate to the SignupScreen
     }
             
      //navigation.replace('LoginScreen'); // Navigate to the SignupScreen



       }, 3000); // 2 seconds delay

       // Clear the timer to avoid memory leaks
       return () => clearTimeout(timer);
   }, [navigation]); 

  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.pink}/>
    <Image style={styles.backgroundImage} source={require('../../assets/background.png')} />

    <Image style={{width:'90%',height:70}} source={require('../../assets/logo.png')}/>


      <View style={{position:'absolute',bottom:20}}>

        <Text style={{fontFamily:'urbanistbold',textDecorationLine:'underline'}}>Get Financial Freedom</Text>

      </View>

    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers the image vertically
        alignItems: 'center', // Centers the image horizontally
        backgroundColor: 'white', // Add any background color you need
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
   
});
export default SplashScreen
