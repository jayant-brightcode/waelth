import React, { useState, useRef, useEffect } from "react"; import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native'; // Import navigation functions
import Colors from "../utils/Color";
import { useRoute } from '@react-navigation/native';
import { saveToken } from "../utils/LocalStorage.js";
import { CustomToast } from "../component/CustomToast.js";
import { VerifyMobileNumber } from "../api/Auth.js";

const OtpScreen = () => {

    const navigation = useNavigation()
    const route = useRoute();
    const [otp, setOtp] = useState('');
    const { cred } = route.params
    const otpRef = useRef(null);


    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');
    useEffect(() => {
        setTimeout(() => otpRef.current.focusField(0), 250);
    }, []);

    const handleCodeChanged = (code) => {
        setOtp(code);
    };
    const [toastVisible, setToastVisible] = useState(false);


  
    const showToast = (message, type) => {
      
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };

    const handleVerifyOtp = async () => {
        try {

         
            if (otp=='') {


                showToast("Please enter OTP","failure")
                return


            }
            const response = await VerifyMobileNumber(cred.phone,cred.otp);
            if (response.status) {
                showToast(response.message, "success")
                saveToken('Bearer ' + response.token); 

                
              
                navigation.replace("HomeScreen")
            } else {
                showToast(response.message, "failure")
            }
        } catch (error) {
            showToast(error.message)
            return
        }
    };


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.pink} />
            <Image style={styles.backgroundImage} source={require('../../assets/background.png')} />
            <View style={styles.centeredImageContainer}>
                <Image style={styles.centeredImage} source={require('../../assets/logo.png')} />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10%', fontSize: 18 }}>
                    OTP Verification
                </Text>
                <View style={{ marginTop: '3%', width: '100%', alignItems: 'center' }}>
                    <View style={{ height: 3, backgroundColor: Colors.pink, width: '55%' }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black ,letterSpacing:1}}>VERIFY YOUR MOBILE</Text>
                    <View style={{ height: 3, backgroundColor: Colors.pink, width: '55%' }}></View>


                </View>

                <View style={{ marginTop: '5%', width: "100%" }}>
                    <Text style={{ textAlign: 'center', fontWeight: '400', marginTop: '3%', fontSize: 14 }}>
                        Enter the code below {cred.otp} {'\n'} 
                    </Text>

                    <OTPInputView
                        style={styles.otpInput}
                        pinCount={4} // The number of OTP digits
                        ref={otpRef}
                       
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.otpInputField}
                        codeInputHighlightStyle={styles.otpInputHighlight}
                        onCodeChanged={handleCodeChanged}
                    />
                    <View style={{ height: 3, backgroundColor: Colors.blue, width: '60%', alignSelf: 'center',marginTop:'8%' }}></View>
                    {/* <Text style={{ textAlign: 'center', fontWeight: '400', marginTop: '3%', fontSize: 14 ,color:Colors.purple}}>
                        Resend Code?
                    </Text> */}
                   
                </View>



                <TouchableOpacity style={{marginTop:'4%',width:'80%'}}  onPress={()=>{
               handleVerifyOtp()
    }}>
        <Text style={{backgroundColor:Colors.pink,padding:10,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>Verify</Text>
    </TouchableOpacity>



            </View>

            <CustomToast
                    message={toastMessage}
                    visible={toastVisible}
                    onRequestClose={() => setToastVisible(false)}
                    message_type={toastType}
                />
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    centeredImageContainer: {
        flex: 1,

        alignItems: 'center',
    },
    centeredImage: {
        marginTop: '12%',
        width: '78%',
        height: 60,
    },
    otpInput: {
        width: '60%',
        height: '6%',
        marginTop: '10%',


        alignSelf: 'center',

    },
    otpInputField: {
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.dark_gray,
        color: Colors.black,
        fontWeight: 'bold'

    },
    otpInputHighlight: {
        borderColor: 'black',
    },
  
});



export default OtpScreen