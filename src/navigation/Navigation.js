import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator ,TransitionSpecs } from '@react-navigation/native-stack';

import NavigationService from './NavigationService';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import OtpScreen from '../screen/OtpScreen';
import HomeScreen from '../screen/HomeScreen';
import MemberShipPlanScreen from '../screen/MemberShipPlanScreen';
import FillMembershipDetailScreen from '../screen/FillMembershipDetailScreen';
import BookOnlineSessionScreen from '../screen/BookOnlineSessionScreen';
import AccountScreen from '../screen/AccountScreen';
import PurchasedMemberShipPlanScreen from '../screen/PurchasedMemberShipPlanScreen';
import PurchasedCourses from '../screen/PurchasedCourses';
import EditAccountScreen from '../screen/EditAccountScreen';
import VideoPlayer from '../screen/Video';
import NotificationScreen from '../screen/NotificationScreen';
import AllCourseScreen from '../screen/ViewAllCourse';
import ContactUsScreen from '../screen/Contactus';
import SearchScreen from '../screen/SearchScren';
import BookedSessionScreen from '../screen/BookedSession';
import PaidCourseDetailScreen from '../screen/PaidCourseDetailScreen';
import AllPurchasedCourseScreen from '../screen/AllPurchasedCourse';
import AboutScreen from '../screen/AboutScreen';
import MoreScreen from '../screen/MoreScreen';
import SolutionScreen from '../screen/SolutionScreen';
import PrivacyScreen from '../screen/PrivacyScreen';
import TermScreen from '../screen/TermScreen';
import CancellationScreen from '../screen/CancelationScreen';
import RefundScreen from '../screen/RefundScreen';
import LegalScreen from '../screen/LeagalScreen';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}>

            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          animation: 'slide_from_right', //<-- this is what will do the trick
          presentation: 'card',
          headerShown:false
        }}>
               <Stack.Screen name="SplashScreen" component={SplashScreen}/>
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
               <Stack.Screen name="OtpScreen" component={OtpScreen}/>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
               <Stack.Screen name="MembershipPlanScreen" component={MemberShipPlanScreen}/>
               <Stack.Screen name="FillMembershipDetailScreen" component={FillMembershipDetailScreen}/>

               <Stack.Screen name="BookOnlineSessionScreen" component={BookOnlineSessionScreen}/>
               <Stack.Screen name="AccountScreen" component={AccountScreen}/>
               <Stack.Screen name="PurchasedMembershipScreen" component={PurchasedMemberShipPlanScreen}/>
               <Stack.Screen name="PurchasedCourses" component={PurchasedCourses}/>
               <Stack.Screen name="EditAccountScreen" component={EditAccountScreen}/>
               <Stack.Screen name="VideoPlayerScreen" component={VideoPlayer}/>
               <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
               <Stack.Screen name="AllCourseScreen" component={AllCourseScreen}/>
               <Stack.Screen name="ContactScreen" component={ContactUsScreen}/>
               <Stack.Screen name="SearchScreen" component={SearchScreen}/>
               <Stack.Screen name="BookedSessionScreen" component={BookedSessionScreen}/>
               <Stack.Screen name="PaidCourseDetailScreen" component={PaidCourseDetailScreen}/>
               <Stack.Screen name="AllPurchasedCourse" component={AllPurchasedCourseScreen}/>
               <Stack.Screen name="AboutScreen" component={AboutScreen}/>
               <Stack.Screen name="MoreScreen" component={MoreScreen}/>
               <Stack.Screen name="SolutionScreen" component={SolutionScreen}/>
               <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}/>
               <Stack.Screen name="TermScreen" component={TermScreen}/>
               <Stack.Screen name="CancellationScreen" component={CancellationScreen}/>
               <Stack.Screen name="RefundScreen" component={RefundScreen}/>
               <Stack.Screen name="LegalScreen" component={LegalScreen}/>

            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default AppNavigator;
