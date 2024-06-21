import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { CustomToast } from "../component/CustomToast";
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";


const SolutionScreen = () =>{
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
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white}}>Solutions</Text>
            </View>
       
           

          </View>


      


        </View>


       <ScrollView>
        <View>

    

        <View style={{marginTop:'0%',width:'100%',height:140,alignSelf:'center'}}>
        <Image style={{resizeMode:'cover',width:'100%',height:140,position:'absolute'}} source={require('../../assets/header1.png')}></Image>

        <Text style={{color:Colors.white,width:'90%',alignSelf:'center',textAlign:'center',marginTop:20,fontFamily:'urbanistbold'}}>Assessment of Your Current Investment Portfolio. ( Schedule a call with the Founder & CEO )</Text>
 

            <View style={{width:130,height:50,alignSelf:'center',marginTop:20,borderRadius:10}}>
            <Image style={{resizeMode:'cover',width:'100%',height:50,position:'absolute',borderRadius:20}} source={require('../../assets/footer.png')}></Image>
            <TouchableWithoutFeedback onPress={()=>{
               navigation.navigate("BookOnlineSessionScreen")
            }}>
            <Text style={{color:Colors.white,width:'90%',alignSelf:'center',textAlign:'center',marginTop:14,fontFamily:'urbanistbold'}}>Shedule Now</Text>

            </TouchableWithoutFeedback>
          
            </View>
       </View>


        <View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:18,marginStart:10,letterSpacing:1,marginEnd:30}}>Financial Health Check Up & Portfolio Building in The New Age.</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>The traditional protfolio, constituting cash, equtiies/mutual funds, bonds, gold ETFs/sovereign gold bonds and commercial/residential real estate are no longer suited or ideal for Wealth Creation in the New Age. We at WealthonomiX shall conduct your present financial audit and advise you, how to build the right portfolio, ideally suited for you, according to your age, earnings, savings, current assets & liabilities, your short, medium and long term financial goals,  according to your risk appetite & investment horizon.</Text>
        </View>


        <View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:18,marginStart:10,letterSpacing:1,marginEnd:30}}>Wealth Creation and Portfolio Management.</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>We shall position your investments in this Digital Age, to achieve all your financial goals and also impart the requisite financial education to you.</Text>
        </View>



        <View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:18,marginStart:10,letterSpacing:1,marginEnd:30}}>Digital Assets/Crypto currencies Investments.</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>  Weather we like it or not, we accept it or not, undestand it or not, Digital Assets commonly knows as Cryptocurrency powered by Blockchain Technology, has been the single largest and the fastest wealth creator in the recorded history of mankind and shall continue to do so at least for the next 10-15 years.

{'\n\n'}  Fortunately for us , it is still at a nascent stage with less than 1% of the world's population invested in it inspite of it growing @ 167% anually, with its nearest competitor ever being the Internet which grew anually @ 47%.
{'\n\n'} This asset alone has in it all for any investor to attain financial independence in a decade, the space was at just $ 200 billion in May 2020 when I made big investments in it, made a high of $ 3 trillion in Nov 2021, currently stands at $ 2.51 trillion, slated to go to between $ 10 trillion - $ 14 trillion by 2025 and to $ 100 trillion any time between 2030-2033.
{'\n\n'} The opportunity is right in front of us not in Bitcoin or Ethereum of the world which have already run up and created enormous wealth for their investors but in those digital assets/cryptocurrencies that are very undervalued compared to their utility and have in them all it shall take to create wealth for their investors in the coming decade.
{'\n\n'} We at Wealthonomix with our deep research of the space, are poised to educate you & hold you to allocate the right % of your investments in the select digital assets to complete financial freedom for you and your family.
{'\n\n'} It shall be prudent at our end to warn you that this asset class is very volatile, with enormous upsides, a 500%-1000% being an average reasonable return, but downsides during the bear market are vicious between -70% to -90% and during the bull run too, multiple -30% to -50% downsides are normal. This signifies that you need someone with an in-depth understanding of the crypto space, its bull and bear cycles, and the fundamental wealth-building digital assets, to help you navigate through the volatility and emerge out successful phenomenal gains during the bull cycle and also positioned in select digital assets for financial independence in the next 10 years.

</Text></View>


<View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:18,marginStart:10,letterSpacing:1,marginEnd:30}}>Gold & Silver Supercycle.
</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>  Exponential Wealth Creation in the new Age the decade ahead and at least for the next 30 years, for any household shall be a dynamic balance between investments in select digital assets/cryptocurrencies, companies in other Emerging Technologies like Artificial Intelligence, Robotics/Green Energy along with the acquisition of physical Gold and Silver.

{'\n\n'}  Price of Gold Known as God’s money and Silver, people’s money has been manipulated for almost 90 years and is today the most undervalued asset in the world, compared to paper currency, real estate equity.
{'\n\n'}  Gold and Silver are at an inflection point ready to take back their glory in prices in the coming years, with the next 15 years being its Supercycle. It is pertinent to note that whenever you find a mention of gold and silver, it refers to only physical gold & silver with a purity of 999.9/999.0 and not in any paper form, which has been the instruments of manipulation in their prices.
{'\n\n'}  We at Wealthonomix are equipped to advise you to allocate the right % in gold & silver, to buy the right, to accumulate the right & to hold the right.

</Text></View>





<View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:20}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:18,marginStart:10,letterSpacing:1,marginEnd:30}}>Positioning For The Financial Collapse.

</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>  A financial collapse and a great economic reset is not a question of if, but when. According to my limited knowledge, gained from the many greats in the financial field, it is likely to happen anytime between 2026-2030 or may be earlier.

{'\n\n'}  We are equipped to position rightly for it now. and also after it happens and is underway, to emerge rich and succesful.
</Text></View>
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

export default SolutionScreen