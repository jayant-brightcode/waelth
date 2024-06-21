import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { GetProfiles, UpdateProfiles } from "../api/Auth";
import { isEmpty } from "../utils/Validators";


const EditAccountScreen = () =>{
    const navigation = useNavigation()

   


     
    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const [name,set_name] = useState("")

    const [email,set_email] = useState("")
    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };
    
      

    
    useEffect(() => {
      GetProfile()

    }, []);


    const updateProfile = async () => {
      try {

       
        if(isEmpty(name)){
          showToast("Enter your name","failure")
           return
        }

        
        if(isEmpty(email)){
          showToast("Enter your email","failure")
           return
        }

          const response = await UpdateProfiles(name,email);


          if (response.status) {

            
           
            showToast(response.message,"success")
             

             
             
              
            
             
          } else {
             
          }
      } catch (error) {
        showToast(error.toString(),"failure")

          return
      }
  };


      

 
    const GetProfile = async () => {
      try {

       
       
          const response = await GetProfiles();
          console.log(response)


          if (response.status) {

            
            if(response.profile.name != null){
              set_name(response.profile.name)
            }
            if(response.profile.email != null){
              set_email(response.profile.email)
            }

             

             
             
              
            
             
          } else {
             
          }
      } catch (error) {
        
          return
      }
  };









    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.pink}/>

        <View style={{height:'7%' ,backgroundColor:Colors.pink}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.white}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.white}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Edit Your Details</Text>
            </View>
       
           

          </View>


      


        </View>


       

        <View style={{marginTop:20}}>

        <View style={{borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <Image style={{width:20,height:20,marginStart:10}}  source={require('../../assets/editing.png')}/>

        <TextInput onChangeText={(text) => set_name(text)}  placeholder="Enter Your Name" style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10,width:'100%'}}>{name}</TextInput>

        </View>
        <View style={{borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <Image style={{width:20,height:20,marginStart:10}}  source={require('../../assets/editing.png')}/>

        <TextInput onChangeText={(text) => set_email(text)}  placeholder="Enter Your Email" style={{width:'100%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>{email}</TextInput>

        </View>
       


        

       





        </View>

     
       
      

       

     
        

       


      


       









        <TouchableWithoutFeedback onPress={()=>{
                 updateProfile()
             }}>
              <Text numColumns={2} style={{position:'absolute',alignSelf:'center',bottom:'5%',color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,width:'90%',textAlign:'center',marginStart:3,backgroundColor:Colors.pink,padding:10,marginEnd:'3%',borderRadius:10}}>Update Details</Text>

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

export default EditAccountScreen