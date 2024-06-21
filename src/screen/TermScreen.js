import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const TermScreen = () =>{
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Terms & Conditions</Text>
            </View>
       
           

          </View>


      


        </View>


        <ScrollView style={{padding:20,flex:1}}>
      <Text style={styles.heading}>1.  Acceptance of Terms</Text>
      <Text style={styles.paragraph}>
      By accessing or using www.wealthonomix.com, you agree to comply with and be bound by these terms and conditions.

</Text>

      <Text style={styles.heading}>2. Description of Services</Text>
      <Text style={styles.paragraph}>
www.wealthonomix.com provides a platform for the purchase and delivery of digital courses. The courses shall be provided by Wealthonomix Wealth Creators Private Limited.

      </Text>
      <Text style={styles.paragraph}>
        Personal Information: We may collect personal information, such as your name, email address, and payment details when you register for an account, make a purchase, or communicate with us.
      </Text>
      
      <Text style={styles.heading}>3.  Registration and Accounts</Text>
      <Text style={styles.paragraph}>
      Users may be required to create an account to access certain features of the website. Users are responsible for maintaining the confidentiality of their account information.

</Text>
      

      <Text style={styles.heading}>4.  Course Purchases and Payments</Text>
      <Text style={styles.paragraph}>
      Courses may be purchased through www.wealthonomix.com. Payments are processed securely through online payment gateway. All transactions are subject to the terms and conditions of the payment processor.

</Text>
      

      <Text style={styles.heading}>5. Intellectual Property</Text>
      

      <Text style={styles.heading}>7.  Changes to Terms and Conditions</Text>
      <Text style={styles.paragraph}>
        We may update this Terms & COnditions  to reflect changes to our practices. We will notify you of any material changes by posting the updated terms on our website.
      </Text>

      <Text style={styles.heading}>8.  Governing Law and Dispute Resolution</Text>
 
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
export default TermScreen