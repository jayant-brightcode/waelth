import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { CustomToast } from "../component/CustomToast";

import { useRoute } from '@react-navigation/native';
import { isEmpty, validateEmail } from "../utils/Validators.js";
import { PurchaseMembership } from "../api/Membership.js";
const DIAMOND = 117998.82;   //99999 gst 18 %
const GOLD = 58998.82;  // 49999  gst 18 %
const SILVER = 23598.82;  //19999 gst 18 %
const RENEW = 5898.82;   // 4999 gst 18%

const FillMembershipDetailScreen = ()=>{

    const navigation = useNavigation()
    const route = useRoute();
    const { data } = route.params
    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const [name,set_name] = useState("")

    const [email,set_email] = useState("")
    const [phonecall,set_phonecall] = useState("")
    const [phonewhatsapp,set_phonewhatsapp] = useState("")
    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };
    let amount = 0

    if(data=='diamond'){
        amount = DIAMOND
    }else if(data=="gold"){
        amount = GOLD
    }else if(data=="silver"){
        amount = SILVER
    }


   
    const puchaseMembership = async () => {
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
                showToast("Enter your phone call number","failure")
                 return
              }

              if(isEmpty(phonewhatsapp)){
                showToast("Enter your phone whatsapp number","failure")
                 return
              }



         
         
            const response = await PurchaseMembership(data,"new",name,email,phonecall,phonewhatsapp);
  
            if (response.status) {
  
           
             showToast(response.message,"success")
              navigation.replace("PurchasedMembershipScreen")
               
                
              
               
            } else {
showToast(response.message,"failure")

            } 
        } catch (error) {
            showToast(error,"failure")

            return
        }
    };


  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.pink}/>
     
     


     <View style={{flexDirection:'row',alignItems:'center',width:'100%',padding:10,backgroundColor:Colors.pink}}>
  

       <TouchableWithoutFeedback onPress={()=>{
          navigation.goBack()
       }}>
        <Image style={{width:30,height:30,tintColor:Colors.white}} source={require('../../assets/arrow.png')}></Image>

       </TouchableWithoutFeedback>



           <Text style={{marginStart:15,fontFamily:'urbanistbold',color:Colors.white,fontSize:16}}>Purchase Membership ({data})</Text>
     </View>

     <View style={{width:'90%',alignSelf:'center',marginTop:'5%'}}>
 

      <Text style={{fontFamily:'urbanistbold',fontSize:18}}>Fill your basic details here</Text>


      <TextInput onChangeText={(text) => set_name(text)} placeholder="Enter your Name"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput onChangeText={(text) => set_email(text)} placeholder="Enter your Email"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>

      <TextInput  maxLength={10} keyboardType="number-pad" onChangeText={(text) => set_phonecall(text)} placeholder="Enter your Phone (calling)"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  maxLength={10} keyboardType="number-pad" onChangeText={(text) => set_phonewhatsapp(text)} placeholder="Enter your Phone (whatsapp)"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>


      <TouchableOpacity style={{marginTop:'4%'}}  onPress={()=>{
              puchaseMembership()
    }}>
        <Text style={{backgroundColor:Colors.pink,padding:10,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>PAY RS. {amount}</Text>
    </TouchableOpacity>
    <Text style={{marginStart:10,fontFamily:'urbanistbold',color:Colors.black,fontSize:10}}>18% GST Included</Text>

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
        height: '120%',
    },   
});
export default FillMembershipDetailScreen
