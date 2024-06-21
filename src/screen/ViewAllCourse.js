import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../utils/Color";
import { GetCourse } from "../api/Course";
import { Remote } from "../utils/Remote";


const AllCourseScreen = () =>{
    const navigation = useNavigation()
    const [courses,set_courses] = useState([]);


 
    useEffect(() => {
      GetOnlineCourse()

  }, []);



    const GetOnlineCourse = async () => {
      try {

       
       
          const response = await GetCourse();

          if (response.status) {

            console.log(response.courses)
   
            set_courses(response.courses)
             

             
             
              
            
             
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
                    navigation.navigate("VideoPlayerScreen",{data:Remote.BASE_URL+item.file_url})

                  }else{
                    navigation.navigate("PaidCourseDetailScreen",{data:item})

                    
                  }
               }}>

    <View style={{width:'94%',alignSelf:'center',marginBottom:40}}>

    
    <Image style={{width:'100%',height:200,borderRadius:8}} source={{uri:Remote.BASE_URL+item.thumbnail_url}}></Image>
    <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.video_length} mins</Text>
    <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:18}}>{item.title}</Text>
    <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>{item.desc}</Text>

    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{color:Colors.pink,fontFamily:'urbanistextrabold',fontSize:18}}>Rs. {item.selling_price}</Text>
    <Text style={{marginStart:13,color:Colors.dark_gray,fontFamily:'urbanistextrabold',fontSize:18,textDecorationLine:'line-through'}}>Rs. {item.original_price}</Text>
      </View>  

       {item.is_free==false && (
           <View style={{position:'absolute',width:40,height:40,right:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
           <Image style={{width:35,height:34,tintColor:Colors.white,alignSelf:'center',marginTop:1}} source={require('../../assets/padlock.png')}></Image>
   
           </View>
       )}

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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>All Courses</Text>
            </View>
          

          </View>


      


        </View>

        <View style={{flex:1,marginTop:'3%'}}>

        <FlatList
      data={courses}
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

export default AllCourseScreen