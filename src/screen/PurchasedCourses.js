import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../utils/Color";


const PurchasedCourses = () =>{
    const navigation = useNavigation()
    const courses = [
      { id: 1, title: '8 Step financial plan by Sandip Kumar',image:require('../../assets/c1.jpg') },
      { id: 2, title: '8 Step financial plan by Sandip Kumar',image:require('../../assets/c3.png') },
      { id: 3, title: '8 Step financial plan by Sandip Kumar',image:require('../../assets/c1.jpg') },
      // Add more data items as needed
    ];
    const renderCourses = ({item}) =>{

      return(
        <TouchableWithoutFeedback onPress={()=>{

        
              navigation.navigate("VideoPlayerScreen",)

       }}>

    <View style={{width:'94%',alignSelf:'center',marginBottom:40}}>

    
    <Image style={{width:'100%',height:200,borderRadius:8}} source={item.image}></Image>
    <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>28 mins</Text>
    <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:18}}>{item.title}</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{color:Colors.pink,fontFamily:'urbanistextrabold',fontSize:18}}>Rs. 999</Text>
    <Text style={{marginStart:13,color:Colors.dark_gray,fontFamily:'urbanistextrabold',fontSize:18,textDecorationLine:'line-through'}}>Rs. 12233</Text>
      </View>  

</View></TouchableWithoutFeedback>
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

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>My Courses</Text>
            </View>
          

          </View>


      


        </View>

        <View style={{flex:1,marginTop:'3%'}}>

        <FlatList
      data={courses}
      renderItem={renderCourses}
      keyExtractor={(item) => item.id}
         
     
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

export default PurchasedCourses