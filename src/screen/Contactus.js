import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const ContactUsScreen = () =>{
    const navigation = useNavigation()

   


    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const [name,set_name] = useState("")

    const [email,set_email] = useState("")
    const [phonecall,set_phonecall] = useState("")
    const [message,set_message] = useState("")

    const showToast = (message, type) => {
      setToastVisible(true);
      setToastMessage(message);
      setToastType(type);

  };
      

 
  const contact = async () => {
    try {


       

        

        if(isEmpty(name)){
            showToast("Enter your name","failure")
             return
          }

          
          if(isEmpty(email)){
            showToast("Enter your email","failure")
             return
          }

            
          if(isEmpty(phonecall)){
            showToast("Enter your phone  number","failure")
             return
          }

         
          
       

          
          if(isEmpty(message)){
            showToast("Enter your message","failure")
             return
          }



     
     
        const response = await ContactUs(name,email,phonecall,message);

        if (response.status) {

       
       showToast(response.message,"success")

           
            
          
           
        } else {
      showToast(response.message,"failure")

        } 
    } catch (error) {
       showToast(error.toString(),"failure")

        return
    }
};









    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.pink}/>

        <View style={{height:'7%' ,backgroundColor:Colors.pink}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

            <TouchableWithoutFeedback onPress={()=>{
               navigation.goBack()
            }}>
            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.white}}  source={require('../../assets/arrow.png')}/>

            </TouchableWithoutFeedback>


            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.white}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Contact Us</Text>
            </View>
       
           

          </View>


      


        </View>


       

        <View style={{marginTop:20,marginStart:10,marginEnd:10}}>

        
      <TextInput   onChangeText={(text) => set_name(text)} placeholder="Enter your Name"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_email(text)} placeholder="Enter your Email"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>

      <TextInput   onChangeText={(text) => set_phonecall(text)} placeholder="Enter your Phone"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_message(text)} placeholder="Enter your Message"  style={{paddingStart:10,height:80,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>






        </View>

     
       
      

       

     
        

       


      


       









        <TouchableWithoutFeedback onPress={()=>{
                 contact()
             }}>
              <Text numColumns={2} style={{position:'absolute',alignSelf:'center',bottom:'5%',color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,width:'90%',textAlign:'center',marginStart:3,backgroundColor:Colors.pink,padding:10,marginEnd:'3%',borderRadius:10}}>Submit</Text>

             </TouchableWithoutFeedback>


      

       
 
             <CustomToast
                    message={toastMessage}
                    visible={toastVisible}
                    onRequestClose={() => setToastVisible(false)}
                    message_type={toastType}
                />




  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default ContactUsScreen