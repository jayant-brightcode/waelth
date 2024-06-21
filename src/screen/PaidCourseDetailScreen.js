import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color.js";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { CustomToast } from "../component/CustomToast.js";

import { useRoute } from '@react-navigation/native';
import { isEmpty, validateEmail } from "../utils/Validators.js";
import { PurchaseMembership } from "../api/Membership.js";
import { Remote } from "../utils/Remote.js";
import { PurchaseCourse } from "../api/Course.js";
const DIAMOND = 117998.82;   //99999 gst 18 %
const GOLD = 58998.82;  // 49999  gst 18 %
const SILVER = 23598.82;  //19999 gst 18 %
const RENEW = 5898.82;   // 4999 gst 18%

const PaidCourseDetailScreen = ()=>{

    const navigation = useNavigation()
    const route = useRoute();
    const { data } = route.params
    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    
    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };
   

   


   
    const purchaseCourse = async () => {
        try {
  

           

             


         
         
            const response = await PurchaseCourse(data._id);
  
            if (response.status) {
  
           
             showToast(response.message,"success")
             navigation.replace("AllPurchasedCourse")
               
                
              
               
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



           <Text style={{marginStart:15,fontFamily:'urbanistbold',color:Colors.white,fontSize:16}}>Purchase Membership</Text>
     </View>

   
     <View style={{width:'94%',alignSelf:'center',marginBottom:40,marginTop:20}}>

      
<Image style={{width:'100%',height:200,borderRadius:8}} source={{uri:Remote.BASE_URL+data.thumbnail_url}}></Image>
<Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{data.video_length} mins</Text>
<Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:18}}>{data.title}</Text>
<Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>{data.desc}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<Text style={{color:Colors.pink,fontFamily:'urbanistextrabold',fontSize:18}}>Rs. {data.selling_price}</Text>
<Text style={{marginStart:13,color:Colors.dark_gray,fontFamily:'urbanistextrabold',fontSize:18,textDecorationLine:'line-through'}}>Rs. {data.original_price}</Text>
  </View>  

   {data.is_free==false && (
       <View style={{position:'absolute',width:40,height:40,right:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
       <Image style={{width:35,height:34,tintColor:Colors.white,alignSelf:'center',marginTop:1}} source={require('../../assets/padlock.png')}></Image>

       </View>
   )}

</View>
<TouchableOpacity style={{marginTop:'4%',marginStart:10,marginEnd:10}}  onPress={()=>{
              purchaseCourse()
    }}>
        <Text style={{backgroundColor:Colors.pink,padding:10,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>BUY NOW</Text>
    </TouchableOpacity>

 
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
export default PaidCourseDetailScreen
