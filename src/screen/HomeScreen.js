import { StatusBar, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, FlatList, Animated, TouchableWithoutFeedback, Dimensions} from "react-native"
import Colors from "../utils/Color";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import BannerSlider from "../component/BannerSlider";
import { GetCourse } from "../api/Course";
import { Remote } from "../utils/Remote";
import WebView from "react-native-webview";
import Video from 'react-native-video';
import { ContactUs } from "../api/OnlineSession";
import { isEmpty } from "../utils/Validators";
import { CustomToast } from "../component/CustomToast";

const { width } = Dimensions.get('window');

const banner = ['1','3','4']

const HomeScreen = ()=>{

    const navigation = useNavigation()
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 220);
    const translateY = diffClamp.interpolate({
      inputRange: [0, 64],
      outputRange: [0, 64],
    });

    const [courses,set_courses] = useState([]);
      
    const [toastVisible, setToastVisible] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const [name,set_name] = useState("")

    const [email,set_email] = useState("")
    const [phonecall,set_phonecall] = useState("")
    const [message,set_message] = useState("")


    const [is_paying_1,set_is_playing_1] = useState(false)
    const [is_paying_2,set_is_playing_2] = useState(false)



    const showToast = (message, type) => {
      setToastVisible(true);
      setToastMessage(message);
      setToastType(type);

  };

  const targetDate = new Date('2024-09-04'); // 90 days from today
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeRemaining = targetDate - currentTime;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  console.log(seconds , "sec")
  console.log(minutes,' min')
  console.log(hours, " hr")
  console.log(days, "days")

 
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
          set_name("")
          set_email("")
          set_phonecall("")
          set_message("")
       
       showToast(response.message,"success")


           
            
          
           
        } else {
      showToast(response.message,"failure")

        } 
    } catch (error) {
       showToast(error.toString(),"failure")

        return
    }
};


      const [navVisible, setNavVisible] = useState(true);

   
      useEffect(() => {
        GetOnlineCourse()

    }, []);


    const [drawerVisible, setDrawerVisible] = useState(false);
    const [videoVisible, setVideoVisible] = useState(false);

    const drawerWidth = width * 0.75; // Width of the drawer
    const translateX = useState(new Animated.Value(-drawerWidth))[0];
  
    const openDrawer = () => {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setDrawerVisible(true);
    };
  
    const closeDrawer = () => {
      Animated.timing(translateX, {
        toValue: -drawerWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setDrawerVisible(false));
    };
  

    const openDrawervideo = () => {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setVideoVisible(true);
    };
  
    const closeDrawervideo = () => {
      Animated.timing(translateX, {
        toValue: -drawerWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVideoVisible(false));
    };
  




      const GetOnlineCourse = async () => {
        try {

         
         
            const response = await GetCourse();
 
            if (response.status) {

              console.log(response.courses)
     
              set_courses(response.courses)
               

               
               
                
              
               
            } else {
               
            }
        } catch (error) {
          
            return
        }
    };





    const renderCourses = ({item}) =>{


     

        return(
                 <TouchableWithoutFeedback onPress={()=>{

                    if(item.is_free){
                        navigation.navigate("VideoPlayerScreen",{data:Remote.BASE_URL+item.file_url})

                    }else{
                      navigation.navigate("PaidCourseDetailScreen",{data:item})
  
                      
                    }
                 }}>

      <View style={{width:'94%',alignSelf:'center',marginBottom:40}}>

      
      <Image style={{width:'100%',height:200,borderRadius:8}} source={{uri:Remote.BASE_URL+item.thumbnail_url}}></Image>
      <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginTop:5}}>{item.video_length} mins</Text>
      <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:18}}>{item.title}</Text>
      <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>{item.desc}</Text>

      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:Colors.pink,fontFamily:'urbanistextrabold',fontSize:18}}>Rs. {item.selling_price}</Text>
      <Text style={{marginStart:13,color:Colors.dark_gray,fontFamily:'urbanistextrabold',fontSize:18,textDecorationLine:'line-through'}}>Rs. {item.original_price}</Text>
        </View>  

         {item.is_free==false && (
             <View style={{position:'absolute',width:40,height:40,right:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
             <Image style={{width:35,height:34,tintColor:Colors.white,alignSelf:'center',marginTop:1}} source={require('../../assets/padlock.png')}></Image>
     
             </View>
         )}

</View>
                 </TouchableWithoutFeedback> 
        )
    }

  return <View style={styles.container}>


    <StatusBar backgroundColor={'#f2f2f2'}/>
   
     <View style={{width:'100%',flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#f2f2f2'}}>


       <View style={{backgroundColor:'#f2f2f2',width:'100%',padding:3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       <Image  style={{width:'55%',height:40}} source={require('../../assets/logo.png')}></Image> 
    
         <TouchableWithoutFeedback onPress={()=>{
            // navigation.navigate("NotificationScreen")
            openDrawer()
         }}>
  <Image  style={{width:30,height:30,marginEnd:10,tintColor:Colors.dark_purple}} source={require('../../assets/more.png')}></Image> 

         </TouchableWithoutFeedback>
     


       </View>
      

     </View>

   

      {/* <TouchableWithoutFeedback onPress={()=>{
         navigation.navigate("SearchScreen")
      }}>
  <View style={{width:'94%',alignSelf:'center',marginTop:'3%',alignItems:'center',flexDirection:'row',padding:13,borderRadius:8,borderWidth:1,borderColor:Colors.dark_gray}}>
     <Image  style={{width:30,height:30,marginEnd:10,tintColor:Colors.pink}} source={require('../../assets/search.png')}></Image> 

        <Text style={{fontFamily:'urbanistbold'}}>Search Here </Text>
     </View>
      </TouchableWithoutFeedback>
    */}



     


    
    

  



    <View style={{flex:1}}>
    <FlatList
  data={[
    { type: 'header', id: 'header' },
    { type: 'membership', id: 'membership' },
    {type:'recommended',id:'recommended'}

  ]}
  renderItem={({ item }) => {
    switch (item.type) {
      case 'header':
        return (

             <View style={{width:'100%',height:590}}>

             <Image   style={{position:'absolute',height:590,width:'100%'}}  source={require('../../assets/header1.png')}></Image>
              <Text style={{alignSelf:'center',marginTop:'4%',color:Colors.white,fontSize:25,fontFamily:'urbanistbold'}}>Blockchain</Text>
              <Text style={{alignSelf:'center',color:Colors.white,fontSize:30,fontFamily:'urbanistextrabold'}}>Wealth Hub</Text>
              <Text style={{alignSelf:'center',marginTop:'2%',color:Colors.white,fontSize:10,fontFamily:'urbanistbold',width:'50%',textAlign:'center'}}>We shall transform the financial lives of our
members or fade into oblivion.</Text>


             <View style={{flexDirection:'row',alignItems:'center',width:'84%',alignSelf:'center',justifyContent:'space-evenly',marginTop:20}}>
            
             <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("MoreScreen")
           }}>
             <Image   style={{width:'35%',height:50}}  source={require('../../assets/btn_more.png')}></Image></TouchableWithoutFeedback>
             <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("AboutScreen")
         
           }}>
             <Image  style={{width:'35%',height:50}}  source={require('../../assets/btn_about.png')}></Image>
</TouchableWithoutFeedback>

              </View>
          <View style={{height:0.6,width:'70%',marginTop:10,backgroundColor:Colors.white,alignSelf:"center"}}/>
          <Text style={{alignSelf:'center',color:Colors.white,fontSize:14,marginTop:'5%',fontFamily:'urbanistbold',textAlign:'center'}}>Exponential Wealth Creation in the New Age
</Text>
           
           <TouchableWithoutFeedback onPress={()=>{
              openDrawervideo()
           }}>
              <Image   style={{width:50,height:50,marginTop:'8%',alignSelf:'center'}}  source={require('../../assets/watch.png')}></Image>

           </TouchableWithoutFeedback>
              <Text style={{alignSelf:'center',color:Colors.white,fontSize:16,fontFamily:'urbanistbold'}}>Watch Video</Text>



              <View style={{alignSelf:'center',width:130,height:130,backgroundColor:Colors.white,borderRadius:500,marginTop:'9%'}}>
              <Image   style={{width:120,height:120,alignSelf:'center',borderRadius:500,marginTop:5}}  source={require('../../assets/admin.jpg')}></Image>

              </View>
              <Text style={{alignSelf:'center',color:Colors.white,fontSize:14,marginTop:6,fontFamily:'urbanistbold',textAlign:'center'}}>Army Veteran, Investor, Wealth Creator &
{'\n'}Passionate Bike Rider</Text>

<Text style={{alignSelf:'center',color:Colors.white,fontSize:11,marginTop:6,fontFamily:'urbanistbold',textAlign:'center'}}>"Man behind the machine and leader behind the team matters."</Text>

             



              </View>
          
          // <BannerSlider  images={banner} navigation={navigation} />

        );

      case 'recommended':
        return (

       
<View style={{ marginTop: '10%' }}>

<View style={{width:'100%',alignSelf:'center'}}> 


<View style={{flexDirection:'row',alignItems:'center',width:'90%',alignSelf:'center'}}>
<Image style={{width:40,height:40}} source={require('../../assets/aims.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:24,marginStart:10,letterSpacing:1}}>Aim</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,width:'90%',alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>We aim to partner you in investing right, enroute to financial freedom for you and your family. This we shall do, by giving you the facts, the honest truth and recommending the right assets, in the right percentages, at the right time. We shall give you the fundamentals of each asset, to build your convinction in them and help you, sail through, the downs of the financial markets, with a strong emotional quotient and emerge successful.</Text>




       <View style={{flexDirection:'row',alignItems:'center',marginTop:'10%',width:'90%',alignSelf:'center'}}>
<Image style={{width:40,height:40}} source={require('../../assets/miss.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:24,marginStart:10,letterSpacing:1}}>Mission Statement</Text>
     
       </View>

       <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',letterSpacing:1,width:'90%',alignSelf:'center',lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>To partner a million plus Indians to financial freedom by 14 feb 2033.</Text>


       <View style={{flexDirection:'row',alignItems:'center',marginTop:'10%',width:'90%',alignSelf:'center'}}>
<Image style={{width:40,height:40}} source={require('../../assets/honour.png')} />

       <Text style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:24,marginStart:10,letterSpacing:1}}>Our Code Of Honour</Text>
     
       </View>


       <View style={{width:'90%',alignSelf:'center'}}>
       <View style={{flexDirection:'row',marginTop:8}}>
        <View style={{width:10,height:10,backgroundColor:Colors.pink,marginTop:'6%'}}>
          </View>
       <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>Our invesment advise shall be honest and factual.</Text>

        </View>

        <View style={{flexDirection:'row'}}>
        <View style={{width:10,height:10,backgroundColor:Colors.pink,marginTop:'6%'}}>
          </View>
       <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>Our members shall be the primary beneficiary of all our  recommended investments.</Text>

        </View>

        <View style={{flexDirection:'row'}}>
        <View style={{width:10,height:10,backgroundColor:Colors.pink,marginTop:'6%'}}>
          </View>
       <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',letterSpacing:1,lineHeight:25,fontSize:15,marginStart:2,marginTop:10,textAlign:'justify',marginEnd:2,padding:5}}>We shall grow with our members and never at their expense.</Text>

        </View>
        </View>

        


        <View style={{width:'100%',height:880,marginTop:'8%'}}>
          
        <Image   style={{position:'absolute',height:880,width:'100%'}}  source={require('../../assets/header2.png')}></Image>

        <Text style={{color:Colors.white,fontFamily:'urbanistextrabold',marginTop:10,fontSize:23,marginStart:10,letterSpacing:1,alignSelf:'center'}}>DIGITAL ASSETS</Text>

        <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:13,marginStart:10,letterSpacing:1,alignSelf:'center'}}>CRYPTO CURRENCIES
</Text>


   
        <Text style={{color:Colors.white,fontFamily:'urbanistbold',letterSpacing:1,width:'85%',alignSelf:'center',lineHeight:22,fontSize:15,marginStart:2,marginTop:15,textAlign:'justify',marginEnd:2,padding:5}}> The biggest wealth transfer in human history is underway and Digital Assets are at the epicentre of it. This space from the birth of Bitcoin in 2009 and till date , has evolved into a New Asset Class, which is here to stay.

{'\n\n'} The technology behind it, is the "BLOCK CHAIN TECHNOLOGY", a part of the Fourth Industrial Revolution, is revolutionising the way, the world transacts . It is a disruptive technology which is changing the way, the complete global financial system, govts, industries, businesses and consumers operate. The rate of adoption is exponential, @ 167% annually, with its nearest competitor ever been, Internet, which grew @ 47 % annually.

{'\n\n'} What does it imply for me as a investor, a wealth creator and for us all Indians!.......! A Once In a Lifetime Wealth Creation Opportunity!</Text>



    
<View style={{ height: 200,width:'83%',alignSelf:'center',borderRadius:10 }}>
      {/* <WebView
        source={{ uri: 'http://wealthonomix.wildwoodexports.com/files/1st%20(1).mp4' }} // Replace this with your video URL
        style={{ flex: 1 }}
      /> */}
         

         {is_paying_1 && (
             <Video
             source={{uri: "https://wealthonomix.wildwoodexports.com/files/1st%20(1).mp4"}}
             style={{width:'100%',height:200,marginTop:10}}
             resizeMode="cover"
           
         
             controls
         />
         )}

        {is_paying_1==false && (
             <View style={{ 
              width: '100%', 
              height: 200, 
              backgroundColor: Colors.white, 
              borderRadius: 10, 
              justifyContent: 'center', // Center vertically 
              alignItems: 'center'      // Center horizontally 
            }}>
              <TouchableWithoutFeedback onPress={()=>{
                set_is_playing_1(true)
              }}>
              <Image 
                style={{ width: 80, height: 80 }} 
                source={require('../../assets/watch.png')} 
              />
              </TouchableWithoutFeedback>
            </View>
        
        )}

       
  
        

        </View>

        <Text style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:13,marginTop:20,marginStart:10,letterSpacing:1,alignSelf:'center'}}>Watch Video for more details
</Text>

          </View>
        
        
    


<View style={{marginTop:'10%',justifyContent:'space-between'}}>

        <Text style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:20,marginStart:10,letterSpacing:1,marginTop:10,marginBottom:8,textAlign:'center'}}>FROM THE FOUNDER AND{'\n'}CEO'S DESK</Text>
        <Text style={{color:Colors.textcolor,marginTop:2,letterSpacing:1,alignSelf:'center',fontFamily:'urbanistbold'}}>Jai Hind to All Proud Indians,</Text>


        </View>

        <View style={{}}>

        <Image   style={{height:180,resizeMode:'cover',alignSelf:'center',width:'80%',borderRadius:10,marginTop:20}}  source={require('../../assets/admin.jpg')}></Image>
  
          </View>

                  <Text style={{color:Colors.black,marginTop:10,marginStart:'10%',letterSpacing:1}}>In Discussion with Snjay Bose Ji - </Text>


        <Text style={{width:'85%',alignSelf:'center',color:Colors.textcolor,fontFamily:'urbanistbold',letterSpacing:1,lineHeight:20,fontSize:15,marginStart:2,marginTop:15,textAlign:'justify',marginEnd:2,padding:5}}>   At the outset, thanks for reading this page. I am Lieutenant Colonel Sandeep Kumar, a Army Veteran, with a military career spanning 22yrs. My journey as a student of money and as an Investor, began in yr 2000 and was born out of sheer passion, and a inner fire to achieve complete financial independence.

{'\n\n'} The investment voyage continued undeterred, inspite of the rigours of my profession as a soldier and brings me here to "Wealthonomi<Text style={{color:Colors.pink}}>X</Text>", a start up founded by me, to benefit my fellow countrymen, from my experiences as an investor, in adopting and executing the right invesment strategies for wealth creation, in the fast evolving money markets space and also build a successful enterpreneurial career for myself, by ethically & honestly partnering our members.

{'\n\n'} During the course of my or any investors journey, one deciphers the large scale and rampant exploitation, of the common populace's hard earned money, energy and time, in the name of Wealth Building. Well ! How is it done? It has been going on for many decades and is done by building narratives, over the years, in the minds of the hardworking men and women, putting up a host of financial products, with different names, features and classified, under different asset classes, all designed for massive cash flows and growth, of these financial institutions, at the expense of the investors, who invest in them, taking them as assets but end up, getting negative returns in real terms i.e inflation adjusted.

{'\n\n'} I have founded "Wealthonomi<Text style={{color:Colors.pink}}>X</Text>" with an intent to bring forth the facts in front of you, recommend what is right, so that you are equipped with the right information, to take decisive action, for judicious employment and allocation of your hard earned money.

{'\n\n'} "Financial Freedom" is the right of each one of us and Ishwar build this Earth, with plenty of resources, for us all. Our motto is straight forward and simple, if we have value in us, we shall serve, to transform the financial lives of fellow Indians, else fade into oblivion.

{'\n\n'} I wish each one of you All the Best, in this phenomenal journey of life and do wish and hope that you shall interact with us and if you find us capable and of value to you, give us an opportunity to partner you, in this scintillating journey of Wealth Creation, in this Exponential Age.</Text>



<Text style={{fontFamily:'urbanistbold',fontSize:14,color:Colors.navcolor,alignSelf:'flex-end',width:200,textAlign:'right',marginEnd:'10%'}}>Best Regards</Text>
<Text style={{fontFamily:'urbanistbold',fontSize:16,color:Colors.dark_green,marginTop:5,alignSelf:'flex-end',width:200,textAlign:'right',marginEnd:'10%'}}>Sandeep Kumar
{'\n'}Founder & CEO</Text>







  <View style={{marginTop:'5%',height:600}}>
  <Image   style={{position:'absolute',height:600,width:'100%'}}  source={require('../../assets/header3.png')}></Image>

  <Text style={{color:Colors.white,fontFamily:'urbanistextrabold',marginTop:20,fontSize:23,marginStart:10,letterSpacing:1,alignSelf:'center'}}>GET IN TOUCH</Text>


        <View style={{width:'90%',height:400,backgroundColor:'rgba(0,0,0,0.5)',alignSelf:'center',marginTop:'10%',borderRadius:8,padding:10}}>

        <TextInput value={name}   onChangeText={(text) => set_name(text)} placeholder="Enter your Name"  style={{borderRadius:8,paddingStart:10,backgroundColor:Colors.white,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput value={email} onChangeText={(text) => set_email(text)} placeholder="Enter your Email"  style={{borderRadius:8,paddingStart:10,backgroundColor:Colors.white,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>

      <TextInput value={phonecall}  onChangeText={(text) => set_phonecall(text)} placeholder="Enter your Phone"  style={{borderRadius:8,paddingStart:10,backgroundColor:Colors.white,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>
      <TextInput value={message} onChangeText={(text) => set_message(text)} placeholder="Enter your Message"  style={{paddingStart:10,height:80,backgroundColor:Colors.white,borderRadius:8,color:Colors.black,fontFamily:'urbanistmedium',marginTop:10}}></TextInput>


      <TouchableWithoutFeedback onPress={()=>{
                 contact()
             }}>
      <Image   style={{width:'40%',height:45,alignSelf:'center',marginTop:'5%'}}  source={require('../../assets/btn_submit.png')}></Image>

</TouchableWithoutFeedback>

          </View>



    </View>



    <Image   style={{width:'70%',height:50,alignSelf:'center',marginTop:'5%'}}  source={require('../../assets/logo.png')}></Image>


         <View style={{width:'70%',alignSelf:'center',marginTop:'5%',marginBottom:'5%'}}>
            
         <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',marginTop:20,fontSize:16,marginStart:10,letterSpacing:1}}>Contact</Text>
           

           <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginStart:10,flexDirection:'row'}}>

           <Image   style={{width:20,height:20,alignSelf:'center',marginTop:'4%'}}  source={require('../../assets/phn.png')}></Image>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:10,letterSpacing:1}}>+91-9771950001
</Text>

       
            </View>

            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginStart:10,flexDirection:'row'}}>

           <Image   style={{width:20,height:20,alignSelf:'center',marginTop:'4%'}}  source={require('../../assets/eml.png')}></Image>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:10,letterSpacing:1}}>info@wealthonomix.com
</Text>

       
            </View>

            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginStart:10,flexDirection:'row'}}>

           <Image   style={{width:20,height:20,alignSelf:'center',marginTop:'4%'}}  source={require('../../assets/loc.png')}></Image>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:12,marginStart:10,letterSpacing:1}}>M-20 First Floor, Bariatu Housing Colony
Ranchi,Jharkhand Pin-834009
</Text>

       
            </View>


          </View>









        </View>




{/* 
             <FlatList
    
      data={courses}
      renderItem={renderCourses}
      keyExtractor={(item) => item._id}
         
     
    /> */}
          </View>


         
        );
    
    
      default:
        return null;
    }
  }}
  keyExtractor={(item) => item.id}
  onScroll={e => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  }}
  showsVerticalScrollIndicator={false}

/>
    </View>



<Animated.View
      style={{
     
        transform: [{translateY: translateY}],
    
      }}>
         {navVisible && (

          <View>

           
      


<View style={{width:'100%',position:'absolute',backgroundColor:Colors.pink,bottom:0,height:145,borderTopColor:Colors.gray,borderTopWidth:3,justifyContent:'space-between'}}>
<Image   style={{position:'absolute',height:145,width:'100%'}}  source={require('../../assets/footer.png')}></Image>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>



 <View style={{marginStart:'2%',width:180}}>
 <Image style={{width:60,height:40,alignSelf:'center'}}  source={require('../../assets/egl.png')}/>
 <Text style={{fontFamily:'urbanistbold',fontSize:10,color:Colors.white,marginTop:3,textAlign:'center'}}>Decisive Action = Financial Freedom</Text>

 </View>

 <View style={{flexDirection:"row",marginTop:10,marginEnd:10}}>

<Text style={{color:Colors.white,borderWidth:0.5,borderColor:Colors.white,borderRadius:8,fontSize:8,padding:3}}>{days} {'\n'}Days</Text>
<Text style={{color:Colors.white,borderWidth:0.5,borderColor:Colors.white,borderRadius:8,fontSize:8,padding:3,marginStart:10}}>{hours} {'\n'}Hours</Text>
<Text style={{color:Colors.white,borderWidth:0.5,borderColor:Colors.white,borderRadius:8,fontSize:8,padding:3,marginStart:10}}>{minutes} {'\n'}Mins</Text>
<Text style={{color:Colors.white,borderWidth:0.5,borderColor:Colors.white,borderRadius:8,fontSize:8,padding:3,marginStart:10}}>{seconds} {'\n'}Sec</Text>

</View>







</View>

<View style={{flexDirection:"column",marginTop:4,marginTop:10}}>

  <Text style={{color:Colors.white,fontSize:10,alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1}}>The CryptoCurrency Bull Run is On and Underway</Text>
  <Text style={{color:Colors.white,fontSize:10,marginTop:4,alignSelf:'center',fontFamily:'urbanistmedium',letterSpacing:1}}>Join the Digital Community of Wealth Builders</Text>
  <TouchableWithoutFeedback onPress={()=>{
     navigation.navigate("MembershipPlanScreen")
  }}>
  <Text style={{color:Colors.white,fontSize:10,marginBottom:20,backgroundColor:Colors.purple,alignSelf:'center',fontFamily:'urbanistmedium',padding:7,marginStart:7,marginTop:8,width:120,textAlign:'center'}}>Become a Member</Text>

  </TouchableWithoutFeedback>


</View>



   


          </View></View>

         )}
         </Animated.View>



         {drawerVisible && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}




       {drawerVisible && (
         <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
         
         <View  style={styles.gradient}>
         <Image style={{position:'absolute',width:200}} source={require('../../assets/background.png')} />

         <Image  style={{width:'85%',height:30,alignSelf:'center'}} source={require('../../assets/logo.png')}></Image> 
 
         <View style={{height:1,backgroundColor:Colors.pink,marginTop:'4%',width:'100%'}}></View>
       
 
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.pink,padding:10,marginTop:'23%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.white}} source={require('../../assets/home.png')}></Image> 
 
           <Text style={{color:Colors.white,marginStart:10}}>Home</Text>
           </View>
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("AboutScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/info.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>About</Text>
           </View></TouchableWithoutFeedback>
 
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("SolutionScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:22,height:22,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/solution.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Solutions</Text>
           </View></TouchableWithoutFeedback>
 
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("MembershipPlanScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/premium.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Memberships</Text>
           </View>
 
           </TouchableWithoutFeedback>
          
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("AllCourseScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/streaming.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Courses</Text>
           </View></TouchableWithoutFeedback>
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("NotificationScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/bell.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Notification</Text>
           </View>
 
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("AccountScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center'}} source={require('../../assets/user.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Account</Text>
           </View></TouchableWithoutFeedback>
 
           <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("ContactScreen")
              closeDrawer()
           }}>
           <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,marginTop:'3%'}}>
           <Image  style={{width:20,height:20,alignSelf:'center',tintColor:Colors.textcolor}} source={require('../../assets/support.png')}></Image> 
 
           <Text style={{color:Colors.textcolor,marginStart:10}}>Contact Us</Text>
           </View></TouchableWithoutFeedback>
     
         </View>
       </Animated.View>
 
       )}




      {videoVisible && (
        <TouchableWithoutFeedback onPress={closeDrawervideo}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}



     {videoVisible && (
         
         <Animated.View style={[styles.drawervid, { transform: [{ translateX }] }]}>
         

         <View style={{width:'100%',height:200}}>


    
         <View style={{ height: 200,width:'100%',alignSelf:'center',borderRadius:10,position:'absolute' }}>
      {/* <WebView
        source={{ uri: 'http://wealthonomix.wildwoodexports.com/files/1st%20(1).mp4' }} // Replace this with your video URL
        style={{ flex: 1 }}
      /> */}
            <Video
    source={{uri: "https://wealthonomix.wildwoodexports.com/files/1st%20(1).mp4"}}
    style={{width:'100%',height:200,marginTop:10}}
    resizeMode="cover"
    paused={true} // Set to true to stop autoplay

    controls
/>
       
  
        

        </View>
          <TouchableWithoutFeedback onPress={()=>{

            closeDrawervideo()
            
             
          }}>
          <Image style={{width:20,height:20,tintColor:Colors.white,alignSelf:'flex-end',marginTop:10,marginEnd:10}} source={require('../../assets/close.png')}></Image>

          </TouchableWithoutFeedback>
         

         </View>




      </Animated.View>

     )}



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
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },   

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    drawer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 200,
      backgroundColor: '#f2f2f2',
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 10,
      elevation: 5,
    },
    drawervid: {
      position: 'absolute',
      top:'40%',
      alignSelf:'center',
      width: '90%',
      height:200,
      backgroundColor:Colors.black,
      alignItems:'center',
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 10,
      elevation: 5,
    },
    gradient: {
      flex: 1,
      padding: 10,
    },
    drawerText: {
      color: '#fff',
      fontSize: 18,
      marginVertical: 10,
    },
});
export default HomeScreen
