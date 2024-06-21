import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { CustomToast } from "../component/CustomToast.js";
import { isValidPhone } from "../utils/Validators.js";
import { login } from "../api/Auth.js";



const LoginScreen = ()=>{

    const navigation = useNavigation()

    const [toastVisible, setToastVisible] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };


    
    const handleLogin = async () => {
        try {


            if(!isValidPhone(mobileNumber)){
              

               showToast("Please enter valid Mobile Number","failure")
               return


            }
           const response = await login(mobileNumber);
           if(response.status){
            showToast(response.message,"success")
               const data = {
                   phone: mobileNumber,
                   otp: response.otp,
                  
               }
       
               navigation.navigate("OtpScreen", { cred: data })
           }else{
            showToast(response.message,"failure")
           }
        } catch (error) {
            showToast(error.message)
            return
        }
    };


  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.pink}/>
    <Image style={styles.backgroundImage} source={require('../../assets/background.png')} />

     <Image style={{width:'88%',height:65,alignSelf:'center',marginTop:'8%'}} source={require('../../assets/logo.png')}/>


<View style={{alignItems:'center',marginTop:'10%'}}>

    <View style={{width:'85%',height:'3%',backgroundColor:Colors.pink}}></View>
    <Text style={{fontFamily:'urbanistextrabold',fontSize:20,color:Colors.black,letterSpacing:2}}>LOGIN WITH WEALTHONOMIX</Text>
    <View style={{width:'85%',height:'3%',backgroundColor:Colors.pink}}></View>
</View>



<View style={{marginStart:20,marginEnd:20}}>

    
    <Text style={{fontFamily:'urbanistmedium',fontSize:15,color:Colors.black}}>Enter Your Phone Here</Text>

     <TextInput maxLength={10} keyboardType="number-pad" style={{backgroundColor:Colors.light_purple,paddingStart:10,marginTop:10,fontFamily:'urbanistbold',borderRadius:10}} placeholder="Enter phone number"  onChangeText={(text) => setMobileNumber(text)}></TextInput>
    

    <TouchableOpacity style={{marginTop:'4%'}}  onPress={()=>{
          handleLogin()
    }}>
        <Text style={{backgroundColor:Colors.pink,padding:10,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>Login</Text>
    </TouchableOpacity>
</View>


<View style={{position:'absolute',bottom:20,marginStart:10,marginEnd:10}}>


    <Text style={{textAlign:'center',fontFamily:'urbanistmedium'}}>By continuing login you are agree to our <TouchableWithoutFeedback onPress={()=>{
         navigation.navigate("PrivacyScreen")
    }}><Text style={{color:Colors.pink}}>Privacy Policy</Text></TouchableWithoutFeedback> and <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate("TermScreen")
   }}><Text style={{color:Colors.pink}}>Terms and conditions</Text></TouchableWithoutFeedback></Text>

</View>
<CustomToast
                    message={toastMessage}
                    visible={toastVisible}
                    onRequestClose={() => setToastVisible(false)}
                    message_type={toastType}
                />

    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },   
});
export default LoginScreen
