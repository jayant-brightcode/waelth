import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GetNotification } from "../api/Auth";



const NotificationScreen = () =>{
    const navigation = useNavigation()

  

     const [notification,set_notification] = useState([])

     
      const [selectedPackSize, setSelectedPackSize] = useState(null);

      const packSizes = [
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 3, size: 'Large' },
      ];
    
      useEffect(() => {
        // Fetch or set pack sizes data
      
       
    
        // Select the first pack size by default
        setSelectedPackSize(packSizes[0]?.id);
      }, []);


      useEffect(() => {
        GetOnlineCourse()
  
    }, []);
  
  
  
      const GetOnlineCourse = async () => {
        try {
  
         
         
            const response = await GetNotification();
  
            if (response.status) {
  
           
     
              set_notification(response.notification)
               
  
               
               
                
              
               
            } else {
               
            }
        } catch (error) {
          
            return
        }
    };
 

  const renderCategory = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
          console.log(item)

      }}>
            <View style={{width:Dimensions.get('window').width,height:300,marginStart:10}}>
           
          

            <Image style={{ width: 300, height: 300,alignSelf:'center' }} source={item.image}></Image>

           
        
              
            </View>

          

      </TouchableWithoutFeedback>

    )
}

const renderPackSizeItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
    style={{
      borderColor: selectedPackSize === item.id ? Colors.light_green : Colors.grayview,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
    }}
  >
    <Text style={{ textAlign: 'center', color: selectedPackSize === item.id ? Colors.dark_green : 'black' }}>{item.size}</Text>
  </TouchableOpacity>
);
const renderCategoryHint = ({item})=>{
       
  return(
    <TouchableOpacity onPress={()=>{
        console.log(item)

    }}>
          <View style={{width:80,height:80,marginEnd:10,marginBottom:5,borderColor:Colors.dark_gray,borderWidth:1,borderRadius:10}}>
           
          <View style={{ width: 80, height: 70 ,paddingTop:'5%',alignItems:'center',justifyContent:'center'}}>

          <Image style={{ width: 50, height: 50 }} source={item.image}></Image>

          </View>
      
            
          </View>

        

    </TouchableOpacity>

  )
}

const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
    //    navigation.navigate("FProductDetailScreen")

    }}>
          <View style={{width:'95%',height:110,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 70, height: 13 ,marginStart:8,marginTop:8,borderRadius:1,padding:6,borderColor:Colors.gray,borderWidth:1}} source={require('../../assets/logo.png')}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:240}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:13,marginStart:3,width:230}}>{item.body}</Text>

             <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:10}}>
             <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistregular',fontSize:10,marginStart:3}}>{item.createdAt}</Text>
             


             </View>
                  

             </View>

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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>My Notifications</Text>
            </View>
          
           

          </View>


      


        </View>

     
       
      

       

     
        

       


      


       







<View style={{marginStart:'2%',marginTop:'5%'}}>
            <FlatList
            data={notification}
            renderItem={renderProducts}
            keyExtractor={(item) => item._id}
          
            showsHorizontalScrollIndicator={false}
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

export default NotificationScreen