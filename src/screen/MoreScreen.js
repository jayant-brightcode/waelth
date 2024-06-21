import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";
import Video from "react-native-video";


const MoreScreen = () =>{
    const navigation = useNavigation()

   


    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const [name,set_name] = useState("")

    const [email,set_email] = useState("")
    const [phonecall,set_phonecall] = useState("")
    const [message,set_message] = useState("")

    const showToast = (message, type) => {
      setToastVisible(true);
      setToastMessage(message);
      setToastType(type);

  };
      

 
  const contact = async () => {
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
            showToast("Enter your phone  number","failure")
             return
          }

         
          
       

          
          if(isEmpty(message)){
            showToast("Enter your message","failure")
             return
          }



     
     
        const response = await ContactUs(name,email,phonecall,message);

        if (response.status) {

       
       showToast(response.message,"success")

           
            
          
           
        } else {
      showToast(response.message,"failure")

        } 
    } catch (error) {
       showToast(error.toString(),"failure")

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


            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.white}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>More</Text>
            </View>
       
           

          </View>


      


        </View>


       <ScrollView>
        <View>

    

        <View style={{marginTop:'10%',justifyContent:'space-between'}}>

<Text style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:20,marginStart:10,letterSpacing:1,marginTop:10,marginBottom:8,textAlign:'center'}}>OUR  <Text style={{color:Colors.pink}}>INSPIRATION</Text>
</Text>
<Text style={{color:Colors.navcolor,marginTop:2,alignSelf:'center',fontFamily:'urbanistbold'}}>"Few men are born to shape others lives"</Text>


</View>

<View style={{}}>

<View style={{ height: 200,width:'83%',alignSelf:'center',borderRadius:10 }}>
      {/* <WebView
        source={{ uri: 'http://wealthonomix.wildwoodexports.com/files/1st%20(1).mp4' }} // Replace this with your video URL
        style={{ flex: 1 }}
      /> */}
            <Video
    source={{uri: "https://wealthonomix.netlify.app/images/video2.mp4"}}
    style={{width:'100%',height:200,marginTop:10}}
    resizeMode="cover"
    paused={true} // Set to true to stop autoplay

    controls
/>
       
  
        

        </View>
  </View>
  <Text style={{color:Colors.black,marginTop:'4%',alignSelf:'center',fontFamily:'urbanistextrabold',alignSelf:'center',textAlign:'center'}}>EARL NIGHTINGALE, American Speaker and Author
</Text>



<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'80%',alignSelf:'center'}}>
<Text style={{color:Colors.white,marginTop:'4%',fontFamily:'urbanistmedium',backgroundColor:Colors.dark_purple,borderRadius:10,padding:8}}>Born {'\n'}12 March 1921
</Text>

<Text style={{color:Colors.white,marginTop:'4%',fontFamily:'urbanistmedium',backgroundColor:Colors.dark_purple,borderRadius:10,padding:8}}>Born {'\n'}25 March 1989
</Text>
</View>

<Text style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:20,marginStart:10,letterSpacing:1,marginTop:'10%',marginBottom:8,textAlign:'center'}}>FINANCIAL  <Text style={{color:Colors.pink}}>FREE</Text>DOM
</Text>


<Text style={{width:'85%',alignSelf:'center',color:Colors.textcolor,fontFamily:'urbanistbold',letterSpacing:1,lineHeight:20,fontSize:15,marginStart:2,marginTop:15,textAlign:'justify',marginEnd:2,padding:5}}>  The key to financial freedom in this exponential age, lies in tailor made risk managed investments in great utility undervalued <Text style={{color:Colors.pink}}>Digital Assetes / Cryptocurrencies</Text>, physical gold and silver, a few great stocks when they are fairly valued / undervalued, cash in proportionate amount and land, when one's networth has reached a level high enough, suited for diversification.

{'\n\n'}     Financial freedom is what each one of us aspires but very few achieve, inspite of working hard for most of our lives. Weathonomi<Text style={{color:Colors.pink}}>X</Text> aims to partner you in achieving exactly this, in this <Text style={{color:Colors.pink}}>New Age of Money</Text>, amidst the noise filled financial markets, majority of which are designed to manipulate you, into deploying your hard earned money into non-wealth building instruments.
{'\n\n'} The strategy beyond this is to find an honest mentor with the right intent, right Knowledge of the asset classes stated above and most important of all, one who has achiered it for himself and wishes the same for you. The next step is to define your financial goals in the Short term (2 years), medium term (5yrs -7 yrs) and the long term (10yrs - 15yrs), under guidance of the mentor and build your customized portfolio for investments in the right assets as per their cycles for achievement of your financial goals. Your own progressive building of Knowledge in the assets you are invested gives you the following advantages, it builds your confidence in your investments, it makes your mentors job easier and most importantly, you yourself do not become an impediment in your journey to financial independence by falling prey to market volatility and manipulations by selling your right assets at wrong time.
</Text>  
       
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



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:'#f2f2f2'
    }


})

export default MoreScreen