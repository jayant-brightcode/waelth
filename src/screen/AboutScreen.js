import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const AboutScreen = () =>{
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>About Us</Text>
            </View>
       
           

          </View>


      


        </View>


       <ScrollView>
        <View>

    

        <View style={{marginTop:'10%',justifyContent:'space-between'}}>

<Text style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:20,marginStart:10,letterSpacing:1,marginTop:10,marginBottom:8,textAlign:'center'}}>ABOUT <Text style={{color:Colors.pink}}>US</Text></Text>
<Text style={{color:Colors.textcolor,marginTop:2,alignSelf:'center',fontFamily:'urbanistbold'}}>Blockchain Wealth Hub</Text>


</View>

<View style={{}}>

{/* <Image   style={{height:180,resizeMode:'cover',alignSelf:'center',width:'80%',borderRadius:10,marginTop:20}}  source={require('../../assets/admin.jpg')}></Image> */}

  </View>


<Text style={{width:'85%',alignSelf:'center',color:Colors.textcolor,fontFamily:'urbanistbold',letterSpacing:1,lineHeight:20,fontSize:15,marginStart:2,marginTop:15,textAlign:'justify',marginEnd:2,padding:5}}>   Wealthonomi<Text style={{color:Colors.pink}}>X</Text> is the brainchild of Lieutenant Colonel Sandeep Kumar, a Army Veteran and a successful investor, for past 22 yrs. He has charted financial freedom for himself, through long term invesments in equities and given it a fillip by moving into Cryptocurrencies/Digital Assets, for the past five yrs.

{'\n\n'}   He firmly believes that the roadmap to financial freedom, lies in risk managed investments, in right assets, in right percentages, at right phases of life either through one's own research and experience or under the guidance of a honest mentor, who has achieved it for himself.

{'\n\n'} Money is never taught at school, till the highest level of education and that's not by default but by design. This allows the biggest financial institutions, to plant their designed narratives, in the minds and souls of the majority of the hard working men and women, irrespective of their level of education.

{'\n\n'} The simple strategy beyond this, is to employ men and women from amongst us, at less salaries, with incentives or commissions, as rewards for the maximum number of their own brethren, they have succeeded, in convincing into deploying their hard earned savings, into non-productive financial instruments. This capital is then deployed, by these financial institutions into instruments, that yield huge cash inflows to them but the common populace, whose money is utilized, gets either no returns or negative returns in real terms (inflation adjusted).</Text>

     
       
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

export default AboutScreen