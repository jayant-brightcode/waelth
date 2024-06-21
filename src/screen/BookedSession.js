import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../utils/Color";
import { GetCourse } from "../api/Course";
import { Remote } from "../utils/Remote";
import { BookedSessions } from "../api/OnlineSession";


const BookedSessionScreen = () =>{
    const navigation = useNavigation()
    const [booked,set_booked] = useState([]);


 
    useEffect(() => {
      GetBookedSessions()

  }, []);



    const GetBookedSessions = async () => {
      try {

       
       
          const response = await BookedSessions();

          if (response.status) {

           
            set_booked(response.booked_sessoon)
             

             
             
              
            
             
          } else {
             
          }
      } catch (error) {
        
          return
      }
  };

   
  const renderCourses = ({item}) =>{


   
      return(
               <TouchableWithoutFeedback onPress={()=>{

                  if(item.is_free){
                      navigation.navigate("VideoPlayerScreen")

                  }
               }}>

    <View style={{width:'94%',alignSelf:'center',marginBottom:40,borderWidth:1,borderRadius:8,borderStyle:"dashed",borderColor:Colors.pink}}>

    
     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Name</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.name}</Text>

     </View>
     
     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Email</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.email}</Text>

     </View>

     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Age</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.age}</Text>

     </View>

     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Phone</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.phone}</Text>

     </View>

     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Amount Paid</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.amount_paid}</Text>

     </View>

     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Payment Date</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.purchased_date}</Text>

     </View>

     <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingStart:10,paddingEnd:10,marginBottom:7}}>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>Session Joined</Text>
     <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.work_done==false?"No":"Yes"}</Text>

     </View>


       

</View>
               </TouchableWithoutFeedback> 
      )
  }
  
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Booked Session</Text>
            </View>
          

          </View>


      


        </View>

        <View style={{flex:1,marginTop:'3%'}}>

        <FlatList
      data={booked}
      renderItem={renderCourses}
      keyExtractor={(item) => item._id}
         
     
      />

        </View>


        
       
       
      

       

     
        

       


      


       










      

       
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default BookedSessionScreen