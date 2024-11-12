import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form1 from '../Screens/LingayatSamajSankalan/Form1';
import Form2 from '../Screens/LingayatSamajSankalan/Form2';
import Form3 from '../Screens/LingayatSamajSankalan/Form3';
import Form4 from '../Screens/LingayatSamajSankalan/Form4';
import Splash from '../Screens/LingayatSamajSankalan/Splash';
import Viewdata from '../Screens/LingayatSamajSankalan/Viewdata';
import AlldataHistory from '../Screens/LingayatSamajSankalan/AlldataHistory';
import Login from '../Screens/AuthenticationFlow/Login';
import Signup from '../Screens/AuthenticationFlow/Signup';
import SetPassword from '../Screens/AuthenticationFlow/SetPassword';
import Forgetpassword from '../Screens/AuthenticationFlow/Forgetpassword';
import FaceIDpermission from '../Screens/KYCFlow/FaceIDpermission';
import KYCIdentityverification from '../Screens/KYCFlow/KYCIdentityverification';
import Startverification from '../Screens/KYCFlow/Startverification';
import Personalnformation from '../Screens/KYCFlow/Personalnformation';
import IDphotoinfo from '../Screens/KYCFlow/IDphotoinfo';
import Submitted from '../Screens/KYCFlow/Submitted';
import Home from '../Screens/HomeFlow/Home';
import WithdrawSearchcoin from '../Screens/WithdrawFlow/WithdrawSearchcoin';
import BottomTabbar from './BottomTabbar';
import Sendviacryptonetwork from '../Screens/WithdrawFlow/Sendviacryptonetwork';
import EnterOTP from '../Screens/AuthenticationFlow/EnterOTP';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="EnterOTP">
      {/* -----------------------Splash----------------------------- */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Viewdata" component={Viewdata} />
      <Stack.Screen name="AlldataHistory" component={AlldataHistory} />
      <Stack.Screen name="Form1" component={Form1} />
      <Stack.Screen name="Form2" component={Form2} />
      <Stack.Screen name="Form3" component={Form3} />
      <Stack.Screen name="Form4" component={Form4} />

      {/* -----------------------Authentication Flow----------------------------- */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      {/* -----------------------KYC Flow----------------------------- */}
      <Stack.Screen name="FaceIDpermission" component={FaceIDpermission} />
      <Stack.Screen name="KYCIdentityverification" component={KYCIdentityverification} />
      <Stack.Screen name="Startverification" component={Startverification} />
      <Stack.Screen name="Personalnformation" component={Personalnformation} />
      <Stack.Screen name="IDphotoinfo" component={IDphotoinfo} />
      <Stack.Screen name="Submitted" component={Submitted} />

      {/* -----------------------Home Flow----------------------------- */} 

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WithdrawSearchcoin" component={WithdrawSearchcoin} />
      <Stack.Screen name="BottomTabbar" component={BottomTabbar} />
      <Stack.Screen name="Sendviacryptonetwork" component={Sendviacryptonetwork} />

    </Stack.Navigator>
  );
};

export default RouteNavigation;
