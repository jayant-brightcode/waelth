import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback, Alert} from "react-native"
import { useNavigation,CommonActions  } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../utils/Color";
import { GetProfiles } from "../api/Auth";
import { removeToken } from "../utils/LocalStorage";


const AccountScreen = () =>{
    const navigation = useNavigation()

   
    const [name,set_name] = useState("Name - Not added")

    const [email,set_email] = useState("Email - Not added")

    const [phone,set_phone] = useState("")

    
    useEffect(() => {
      GetProfile()

    }, []);



    const logout = async () => {




      await removeToken()
    

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        })
      );





  };

      

 
    const GetProfile = async () => {
      try {

       
       
          const response = await GetProfiles();


          if (response.status) {

            
            if(response.profile.name != null){
              set_name(response.profile.name)
            }
            if(response.profile.email != null){
              set_email(response.profile.email)
            }

            if(response.profile.phone != null){
              set_phone(response.profile.phone)
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

      
            <TouchableWithoutFeedback onPress={()=>{
               navigation.goBack()
            }}>
            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.white}}  source={require('../../assets/arrow.png')}/>

            </TouchableWithoutFeedback>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>My Account</Text>
            </View>
          

          </View>


      


        </View>


        <View style={{width:'100%',backgroundColor:Colors.grayview,marginTop:20}}>

          <View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:20,justifyContent:'space-between'}}>


                      
                      <View style={{marginStart:'7%'}}>
                         <Text style={{fontFamily:'urbanistbold',fontSize:18}}>{name}</Text>
                         <Text style={{fontFamily:'urbanistmedium',fontSize:13}}>{email}</Text>
                         <Text style={{fontFamily:'urbanistregular',fontSize:13,marginTop:4}}>{phone}</Text>

                      </View>

                         <TouchableWithoutFeedback onPress={()=>{
                          navigation.navigate("EditAccountScreen")
                         }}>
                         <Text style={{fontFamily:'urbanistmedium',fontSize:13,backgroundColor:Colors.pink,padding:8,marginStart:30,borderRadius:8,color:Colors.white}}>EDIT</Text>

                         </TouchableWithoutFeedback>


               </View>




          </View>



        </View>
     


     <ScrollView>


     <View style={{marginTop:20}}>

<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("PurchasedMembershipScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/premium.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>My Membership Plan</Text>

</View>
</TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("AllPurchasedCourse")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/streaming.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Purchased Courses</Text>

</View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("BookedSessionScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/appointment.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Sheduled Sessions</Text>

</View>
</TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("ContactScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/support.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Contact Us</Text>

</View>
</TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("PrivacyScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/insurance.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Privacy Policy</Text>

</View></TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("TermScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/terms-and-conditions.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Terms & Conditions</Text>

</View></TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("RefundScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/terms-and-conditions.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Refund Policy</Text>

</View></TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("CancellationScreen")
}}>

<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/terms-and-conditions.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Cancellation Policy</Text>

</View></TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("LegalScreen")
}}>
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/terms-and-conditions.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Legal disclaimer</Text>

</View></TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={()=>{
              Alert.alert(
                  'Are you sure?',
                  'you want to signout',
                  [
                      {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                      },
                      { text: 'OK', onPress: () => {
                         logout()
                      }
                   },
                  ],
                  { cancelable: false }
              );
           }}>
           
<View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
<View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.pink}}>
 <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../assets/turn-off.png')}/>

 </View>
<Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Logout</Text>

</View></TouchableWithoutFeedback>



</View>


     </ScrollView>
     
       
      

       

     
        

       


      


       











 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default AccountScreen