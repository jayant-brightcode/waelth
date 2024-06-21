import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const CancellationScreen = () =>{
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Cancellation Policy</Text>
            </View>
       
           

          </View>


      


        </View>


        <ScrollView style={{padding:20}}>
      <Text style={styles.heading}>Cancellation Policy for Wealthonomix Wealth Creators Private Limited Digital Courses</Text>
      
      <Text style={styles.heading}>1. Cancellation Eligibility</Text>
      <Text style={styles.paragraph}>
        We understand that circumstances may change, and we strive to provide a positive experience for all our customers. However, please note that Wealthonomix Wealth Creators Private Limited operates on a no-money-back policy for digital course purchases. Once a course is purchased, refunds will not be issued.
      </Text>

      <Text style={styles.heading}>2. Course Previews</Text>
      <Text style={styles.paragraph}>
        Before making a purchase, we encourage users to take advantage of any available course previews, demos, or free trials, if offered. These resources are designed to give you a clear understanding of the course content and structure.
      </Text>

      <Text style={styles.heading}>3. Customer Support</Text>
      <Text style={styles.paragraph}>
        If you encounter any issues with your digital course, please reach out to our customer support team at info@wealthonomix.com for assistance. We are committed to resolving any technical or access issues promptly.
      </Text>

      <Text style={styles.heading}>4. Non-Transferable</Text>
      <Text style={styles.paragraph}>
        Course purchases are non-transferable. The access and license to the course content are intended solely for the individual who made the purchase.
      </Text>

      <Text style={styles.heading}>5. Technical Issues</Text>
      <Text style={styles.paragraph}>
        In the event of technical difficulties preventing access to the course content, we will make every effort to resolve the issue promptly. If we are unable to provide a satisfactory resolution, we may consider alternative arrangements on a case-by-case basis.
      </Text>

      <Text style={styles.heading}>6. Modifications to Courses</Text>
      <Text style={styles.paragraph}>
        We reserve the right to make modifications to course content, including updates and improvements. These modifications are made to enhance the overall learning experience.
      </Text>

      <Text style={styles.heading}>7. Changes to Refund Policy</Text>
      <Text style={styles.paragraph}>
        Wealthonomix Wealth Creators Private Limited reserves the right to update or modify this refund policy at any time without prior notice. Any changes will be effective immediately upon posting to the website.
      </Text>

      <Text style={styles.paragraph}>
        By making a purchase on Wealthonomix Wealth Creators Private Limited, you acknowledge that you have read and agree to the terms of this refund policy.
      </Text>

      <Text style={styles.paragraph}>
        For further assistance or inquiries, please contact info@wealthonomix.com
      </Text>

      <Text style={styles.paragraph}>
        Wealthonomix Wealth Creators Private Limited
      </Text>

      <Text style={styles.paragraph}>
        M-20 First Floor, Bariatu Housing Colony Ranchi, Jharkhand Pin-834009
      </Text>

      <Text style={{fontFamily:'urbanistbold',marginBottom:30}}>
        info@wealthonomix.com
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
export default CancellationScreen