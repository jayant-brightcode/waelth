import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const LegalScreen = () =>{
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









    return <View style={styles.container}>

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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Legal disclaimer</Text>
            </View>
       
           

          </View>


      


        </View>

        <ScrollView style={{padding:20}}>
      <Text style={styles.heading}>Risk Factors</Text>
      <Text style={styles.paragraph}>
        Digital Asset investments are subject to market conditions and you should do your due diligence before investing in it.
      </Text>
      <Text style={styles.paragraph}>
        Trading and short term investments are prone to highest levels of risk, we do not recommend it.
      </Text>

      <Text style={styles.heading}>Regulatory Disclaimer</Text>
      <Text style={styles.paragraph}>
        We are not certified financial advisors and this is for educational purposes only.
      </Text>

      <Text style={styles.heading}>Legal Disclaimer</Text>
      <Text style={styles.paragraph}>
        Wealthonomix Wealth Creators Private Limited shall not bear any legal or financial liability, owing to any losses, incurred by investing in Digital Assets.
      </Text>
    </ScrollView>
     
        

       


      


       









     
      

       
 
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
 
    backgroundColor:'#f2f2f2'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:'urbanistextrabold',
    marginBottom: 10,
    color:Colors.black,
    marginBottom:15
  },
  paragraph: {
    fontSize: 14,
    fontFamily:'urbanistbold',
    letterSpacing:1,
    marginBottom: 10,
  },
});
export default LegalScreen