import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView} from "react-native"
import Colors from "../utils/Color";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "../utils/Validators";
import { BookOnlineSessions } from "../api/OnlineSession";

const BookOnlineSessionScreen = ()=>{

    const navigation = useNavigation()


    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');
    const [toastVisible, setToastVisible] = useState(false);




    const [name,set_name] = useState("")
   const [email,set_email] = useState("")
   const [phone,set_phone] = useState("")
   const [age,set_age] = useState("")
   const [monthly_emi,set_monthly_emi] = useState("")
   const [monthly_saving,set_monthly_saving] = useState("")
   const [cash,set_cash] = useState("")
   const [gold_held,set_gold_held] = useState("")
   const [silver_held,set_silver_held] = useState("")
   const [message,set_message] = useState("")



    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };

    const BookOnlineSession = async () => {
        try {
  

           

            

            if(isEmpty(name)){
                showToast("Enter your name","failure")
                 return
              }

              
              if(isEmpty(email)){
                showToast("Enter your email","failure")
                 return
              }

                
              if(isEmpty(phone)){
                showToast("Enter your phone  number","failure")
                 return
              }

              if(isEmpty(age)){
                showToast("Enter your age","failure")
                 return
              }

              
              if(isEmpty(monthly_emi)){
                showToast("Enter your monthy emi","failure")
                 return
              }

              
              if(isEmpty(monthly_saving)){
                showToast("Enter your monthy saving","failure")
                 return
              }

              if(isEmpty(cash)){
                showToast("Enter your cash money","failure")
                 return
              }

              if(isEmpty(gold_held)){
                showToast("Enter your gold held","failure")
                 return
              }

              if(isEmpty(gold_held)){
                showToast("Enter your gold held","failure")
                 return
              }

              
              if(isEmpty(silver_held)){
                showToast("Enter your silver held","failure")
                 return
              }



         
         
            const response = await BookOnlineSessions(name,email,phone,age,monthly_emi,monthly_saving,gold_held,silver_held,message);
  
            if (response.status) {
  
           
           showToast(response.message,"success")
           navigation.replace("BookedSessionScreen")
               
                
              
               
            } else {
          showToast(response.message,"failure")

            } 
        } catch (error) {
           showToast(error.toString(),"failure")

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



           <Text style={{marginStart:15,fontFamily:'urbanistbold',color:Colors.white,fontSize:16}}>Shedule Online Session</Text>
     </View>


<ScrollView style={{flex:1}}>
     <View style={{width:'90%',alignSelf:'center',marginTop:'5%'}}>






        <View>

      
      <Text style={{fontFamily:'urbanistbold',fontSize:18}}>Enter your details here</Text>


      <TextInput   onChangeText={(text) => set_name(text)}   placeholder="* Enter your Name"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_email(text)}   placeholder="* Enter your Email"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput   onChangeText={(text) => set_age(text)}  placeholder="* Enter your Age"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>

      <TextInput  onChangeText={(text) => set_phone(text)}  placeholder="* Enter your Phone"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_monthly_emi(text)}  placeholder="* Enter your Monthly EMIs"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput   onChangeText={(text) => set_monthly_saving(text)}  placeholder="* Enter your Monthly Saving (approx)"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_cash(text)}   placeholder="* Cash ( PF, FD, RD, SAVINGS ACCT )"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>

      <TextInput  onChangeText={(text) => set_gold_held(text)}  placeholder="* Value of Physical Gold held (less jewellery)"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_silver_held(text)}  placeholder="* Value of Physical Silver held (less jewellery)"  style={{paddingStart:10,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput  onChangeText={(text) => set_message(text)}  placeholder="* Any Message from you"  style={{paddingStart:10,height:80,backgroundColor:Colors.light_purple,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>


      {/* <Text style={{fontFamily:'urbanistbold',color:Colors.black,marginTop:10}}>*18% GST INCLUDED</Text> */}

      <TouchableOpacity style={{marginTop:'4%',marginBottom:40}}  onPress={()=>{
          BookOnlineSession()
    }}>
        <Text style={{backgroundColor:Colors.pink,padding:10,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>PAY Rs.  999 </Text>
    </TouchableOpacity>
    </View>

     </View>


     </ScrollView>
  
 

     


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
export default BookOnlineSessionScreen
