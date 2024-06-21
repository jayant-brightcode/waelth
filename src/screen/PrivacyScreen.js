import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const PrivacyScreen = () =>{
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Privacy Policy</Text>
            </View>
       
           

          </View>


      


        </View>


        <ScrollView style={{padding:20,flex:1}}>
      <Text style={styles.heading}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        Welcome to Wealthonomix Wealth Creators Private Limited. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our digital course-selling services.
      </Text>

      <Text style={styles.heading}>2. Information We Collect</Text>
      <Text style={styles.paragraph}>
        We may collect the following types of information:
      </Text>
      <Text style={styles.paragraph}>
        Personal Information: We may collect personal information, such as your name, email address, and payment details when you register for an account, make a purchase, or communicate with us.
      </Text>
      <Text style={styles.paragraph}>
        Course Information: We collect information related to the courses you purchase, including course preferences and progress.
      </Text>
      <Text style={styles.paragraph}>
        Usage Information: We automatically collect information about your interactions with our website, such as your IP address, browser type, pages viewed, and time spent on our site.
      </Text>

      <Text style={styles.heading}>3. How We Use Your Information</Text>
      <Text style={styles.paragraph}>
        We use the collected information for the following purposes:
      </Text>
      <Text style={styles.paragraph}>
        To provide and maintain our services.
      </Text>
      <Text style={styles.paragraph}>
        To process transactions and send transaction confirmations.
      </Text>
      <Text style={styles.paragraph}>
        To personalize your experience and provide tailored content.
      </Text>
      <Text style={styles.paragraph}>
        To communicate with you about your account, purchases, and updates.
      </Text>
      <Text style={styles.paragraph}>
        To improve our website and services.
      </Text>

      <Text style={styles.heading}>4. How We Share Your Information</Text>
      <Text style={styles.paragraph}>
        We may share your information with:
      </Text>
      <Text style={styles.paragraph}>
        Service Providers: We may disclose your information to third-party service providers who assist us in providing and maintaining our services.
      </Text>
      <Text style={styles.paragraph}>
        Legal Compliance: We may disclose your information to comply with applicable laws, regulations, or legal processes.
      </Text>

      <Text style={styles.heading}>5. Your Choices</Text>
      <Text style={styles.paragraph}>
        You can control and modify the information you provide to us. You have the right to:
      </Text>
      <Text style={styles.paragraph}>
        Access, correct, or delete your personal information.
      </Text>
      <Text style={styles.paragraph}>
        Opt-out of marketing communications.
      </Text>

      <Text style={styles.heading}>6. Security</Text>
      <Text style={styles.paragraph}>
        We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
      </Text>

      <Text style={styles.heading}>7. Changes to this Privacy Policy</Text>
      <Text style={styles.paragraph}>
        We may update this Privacy Policy to reflect changes to our practices. We will notify you of any material changes by posting the updated policy on our website.
      </Text>

      <Text style={styles.heading}>8. Contact Us</Text>
      <Text style={{marginBottom:30,fontFamily:'urbanistbold'}}>
        If you have any questions or concerns about our Privacy Policy, please contact us at info@wealthonomix.com.
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
    color:Colors.black
  },
  paragraph: {
    fontSize: 14,
    fontFamily:'urbanistbold',
    letterSpacing:1,

    marginBottom: 10,
  },
});
export default PrivacyScreen