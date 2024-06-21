import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../utils/Color";
import { GetCourse, SearchCourse } from "../api/Course";
import { Remote } from "../utils/Remote";


const SearchScreen = () =>{
    const navigation = useNavigation()
    const [courses,set_courses] = useState([]);
    const [keywords, set_keywords] = useState("")
    let searchTimeout;



    useEffect(() => {
        if(keywords != ""){

       
        console.log('useEffect triggered');

        const delay = setTimeout(() => {
          GetOnlineCourse()
          
        }, 1000); // Adjust the delay duration as needed

        return () => {
            console.log('cleanup function');
            clearTimeout(delay);
        };
        }
    }, [keywords]);

    const handleSearch = (text) => {
        set_keywords(text);
    };

 




    const GetOnlineCourse = async () => {
      try {

       
       
          const response = await SearchCourse(keywords);

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


    {
      console.log(Remote.BASE_URL+item.thumbnail_url)
    }

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

        <View style={{height:'10%' ,backgroundColor:Colors.pink}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      
            <TouchableWithoutFeedback onPress={()=>{
               navigation.goBack()
            }}>
            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.white}}  source={require('../../assets/arrow.png')}/>

            </TouchableWithoutFeedback>



            <View style={{width:'94%',alignSelf:'center',marginTop:'3%',alignItems:'center',flexDirection:'row',borderRadius:8,backgroundColor:Colors.white,marginStart:10}}>
     <Image  style={{width:30,height:30,marginEnd:10,tintColor:Colors.pink}} source={require('../../assets/search.png')}></Image> 

        <TextInput onChangeText={handleSearch} placeholder="Search Here" style={{fontFamily:'urbanistbold',width:'100%'}}></TextInput>
     </View>
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

export default SearchScreen