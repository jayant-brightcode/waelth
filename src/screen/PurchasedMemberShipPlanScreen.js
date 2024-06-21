import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { GetPurchasedPlan } from "../api/Membership";

const PurchasedMemberShipPlanScreen = ()=>{

    const navigation = useNavigation()


    const [selected,set_selected] = useState("diamond")
    const [date,set_date] = useState("")
    const [exdate,set_exdate] = useState("")


 
      useEffect(() => {
        GetActivePlan()

    }, []);



    const GetActivePlan = async () => {
      try {


       
          const response = await GetPurchasedPlan();
           console.log(response)
          if (response.status) {

            set_date(response.active.purchased_date)
            set_exdate(response.active.expired_on)

                if(response.active.membership_type=="diamond"){
                  set_selected("diamond")
                }else if(response.active.membership_type=="gold"){
                  set_selected("gold")
                }else if(response.active.membership_type=="silver"){
                  set_selected("silver")
                }
              
            
             
          } else {
              navigation.replace("MembershipPlanScreen")
          } 
      } catch (error) {
        
          return
      }
  };



  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.purple}/>
    <Image style={styles.backgroundImage} source={require('../../assets/memback.png')} />
     

     <View style={{flexDirection:'row',alignItems:'center',width:'100%',padding:10,backgroundColor:Colors.purple}}>
       

       <TouchableWithoutFeedback onPress={()=>{
          navigation.goBack()
       }}>
        <Image style={{width:30,height:30,tintColor:Colors.white}} source={require('../../assets/arrow.png')}></Image>

       </TouchableWithoutFeedback>



           <Text style={{marginStart:15,fontFamily:'urbanistbold',color:Colors.white,fontSize:16}}>My Membership Plans</Text>
     </View>



     {selected=="diamond" && (
        
        <View>
  
   
  
        <View style={{width:'90%',alignSelf:'center',marginTop:'5%'}}>
          <Text style={{color:Colors.yellow,fontFamily:'urbanistextrabold',fontSize:30,alignSelf:'center'}}>DIAMOND</Text>
        </View>
  
        
        <View style={{width:'96%',alignSelf:"center",marginTop:'5%'}}>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center'}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>121 model of wealth building</Text>
  
  
        </View>
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Portfolio created by Founder</Text>
  
  
        </View>

        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>One Online discussion with Founder & CEO every month</Text>
  
  
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Access to paid online courses , webinars and materials</Text>
  
  
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Access to 3 digital assets which alone have the volume in them to bring about comple financial Independence in your life</Text>
  
  
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Education on Blockchain Technology</Text>
  
  
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Guidance to participate and gain handsomely during the ongoing cryptocurrency Bull - Run 2024 -2025</Text>
  
  
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Mentoring your children for a career in the armed forces or high demand skill based career according to their passion which shall not be disrupted by Artificial Inteligence and Emerging tech.</Text>
  
  
        </View>
  
        
        <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
          <Image  style={{width:20,height:20}} source={require('../../assets/diamonds.png')}></Image>
          <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>After 1 year - Rs. 4999.</Text>
  
  
        </View>
  
  
  
        
       
  
  
  
  
  
        </View>
        </View>
         )}
  
         
  {selected=="gold" && (
          
          <View>
    
     
    
          <View style={{width:'90%',alignSelf:'center',marginTop:'10%'}}>
            <Text style={{color:Colors.yellow,fontFamily:'urbanistextrabold',fontSize:30,alignSelf:'center'}}>GOLD</Text>
          </View>
    
          
          <View style={{width:'96%',alignSelf:"center",marginTop:'5%'}}>
    
         
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/gold.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Portfolio created by Founder</Text>
    
    
          </View>
    
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/gold.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Access to paid online courses</Text>
    
    
          </View>
    
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/gold.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Access to 3 digital assets which alone have the volume in them to bring about comple financial Independence in your life</Text>
    
    
          </View>
    
       
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/gold.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Guidance to participate and gain handsomely during the ongoing cryptocurrency Bull - Run 2024 -2025</Text>
    
    
          </View>
    
         
    
          
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/gold.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>After 1 year - Rs. 4999.</Text>
    
    
          </View>
    
    
    
          
         
    
    
    
    
    
          </View>
          </View>
           )}
  
                  
  {selected=="silver" && (
          
          <View>
    
     
    
          <View style={{width:'90%',alignSelf:'center',marginTop:'10%'}}>
            <Text style={{color:Colors.yellow,fontFamily:'urbanistextrabold',fontSize:30,alignSelf:'center'}}>SILVER</Text>
          </View>
    
          
          <View style={{width:'96%',alignSelf:"center",marginTop:'5%'}}>
    
         
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/silver.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Portfolio created by Founder</Text>
    
    
          </View>
    
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/silver.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Access to 2 paid online courses</Text>
    
    
          </View>
    
      
       
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/silver.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>Education and management of your portfolio to complete financial freedom by 2025</Text>
    
    
          </View>
    
         
    
          
          <View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center',marginTop:10}}>
            <Image  style={{width:20,height:20}} source={require('../../assets/silver.png')}></Image>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,alignSelf:'center',marginStart:10}}>After 1 year - Rs. 4999.</Text>
    
    
          </View>
    
    
    
          
         
    
    
    
    
    
          </View>
          </View>
           )}
 

      <View style={{width:'90%',alignSelf:'center',position:'absolute',bottom:40}}>

        <Text style={{color:Colors.white}}>Purchased On - {date}</Text>
          

           <TouchableWithoutFeedback onPress={()=>{
           //  navigation.navigate("FillMembershipDetailScreen")
           }}>
            <Text style={{padding:10,backgroundColor:Colors.purple,marginTop:25,borderRadius:10,textAlign:'center',fontFamily:'urbanistbold',color:Colors.white}}>Expire on {exdate}</Text>
           </TouchableWithoutFeedback>

       </View>







    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '120%',
    },   
});
export default PurchasedMemberShipPlanScreen
