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
import Selectcurrency from '../Screens/DepositcryptoFlow/Selectcurrency';
import Addressreveal from '../Screens/DepositcryptoFlow/Addressreveal';
import ScanQRCode from '../Screens/WithdrawFlow/ScanQRCode';
import Addnewaddress from '../Screens/Savedaddressess/Addnewaddress';
import Addfundoptions from '../Screens/Addfund/Addfundoptions';
import P2PMainPage from '../Screens/Addfund/home/P2PMainPage';
import BuywiithINR from '../Screens/Addfund/home/AddfundCTA/BuywiithINR';
import SwapScreen from '../Screens/SwapFlow/SwapScreen';
import RecieveFund from '../Screens/SwapFlow/RecieveFund';
import Tranfer from '../Screens/SwapFlow/TransferFromFundingwallettoWalletaddress/Tranfer';
import SelectCoin from '../Screens/SwapFlow/TransferFromFundingwallettoWalletaddress/SelectCoin';
import Selectpaytoken from '../Screens/SwapFlow/SelectFrom/Selectpaytoken';
import Walletfunding from '../Screens/SwapFlow/TransferFromWalletaddresstoFunding/Walletfunding';
import Coindropdown from '../Screens/SwapFlow/TransferFromWalletaddresstoFunding/Coindropdown';
import AddfundpopupRecieve from '../Screens/SwapFlow/TransferFromWalletaddresstoFunding/AddfundpopupRecieve';
import RateUSDTtoBTCB from '../Screens/Detailsareabottom/RateUSDTtoBTCB';
import RateBTCBtoUSDT from '../Screens/Detailsareabottom/RateBTCBtoUSDT';
import FrontimageofID from '../Screens/KYCFlow/FrontimageofID';
import BackimageofID from '../Screens/KYCFlow/BackimageofID';
import Warning from '../Screens/WithdrawFlow/Warning';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmSwap from '../Screens/SwappingconfirmationSuccessfully/ConfirmSwap';
import TwoFAverification from '../Screens/SwappingconfirmationSuccessfully/TwoFAverification';
import SubmittedSwap from '../Screens/SwappingconfirmationSuccessfully/SubmittedSwap';
import Successfullywithdrawal from '../Screens/SwapFlow/TransferFromWalletaddresstoFunding/Successfullywithdrawal ';
import P2PMain from '../Screens/P2PFlow/P2PMain';
import BuyUSDT from '../Screens/P2PFlow/BuyUSDT';
import Ordercreated from '../Screens/P2PFlow/Ordercreated';
import Chats from '../Screens/P2PFlow/ViewpaymentdetailsCTA/Chats';
import Cancelorder from '../Screens/P2PFlow/Cancelorder';
import CloseAds from '../Screens/PostAds/CloseAds';
import SetTypeandPrice from '../Screens/PostAds/SetTypeandPrice';
import SetAmountandmethods from '../Screens/PostAds/SetAmountandmethods';
import Setconditions from '../Screens/PostAds/Setconditions';
import AdSuccessfullyPosted from '../Screens/PostAds/AdSuccessfullyPosted';
import OrdercancelReorder from '../Screens/P2PFlow/OrdercancelReorder';
import Paymenthelp from '../Screens/P2PFlow/Paymenthelp';
import ChatScreen from '../Screens/P2PFlow/ChatScreen';
import Transactionhistoryscreen from '../Screens/TransactionhistoryFlow/DepositHistory/Transactionhistoryscreen';
import Deposithistory from '../Screens/TransactionhistoryFlow/DepositHistory/Deposithistory';
import AboutUs from '../Screens/SettingsFlow/AboutUs';
import Termsofuse from '../Screens/SettingsFlow/Termsofuse';
import PrivacyPolicy from '../Screens/SettingsFlow/PrivacyPolicy';
import System from '../Screens/SettingsFlow/System';
import Settings from '../Screens/SettingsFlow/Settings';
import Language from '../Screens/SettingsFlow/Language';
import Currency from '../Screens/SettingsFlow/Currency';
import Soundsandvibration from '../Screens/SettingsFlow/Soundsandvibration';
import Clipboard from '../Screens/SettingsFlow/Clipboard';
import Systempermissions from '../Screens/SettingsFlow/Systempermissions';
import Changepassword from '../Screens/Passwordchangeflow/Changepassword';
import PasswordchangedSuccessfully from '../Screens/Passwordchangeflow/PasswordchangedSuccessfully';
import PaymentMethod from '../Screens/AddBankflow/PaymentMethod';
import SearchBank from '../Screens/AddBankflow/SearchBank';
import Bankaddedsuccessfully from '../Screens/AddBankflow/Bankaddedsuccessfully';
import SetTradingPassword from '../Screens/2FASecurityFlow/SetTradingPassword';
import Changetradingpassword from '../Screens/2FASecurityFlow/Changetradingpassword';
import EmptyTradingPassword from '../Screens/2FASecurityFlow/EmptyTradingPassword';
import AddTradingPassword from '../Screens/2FASecurityFlow/AddTradingPassword';
import ChangetradingpasswordSuccessfully from '../Screens/2FASecurityFlow/ChangetradingpasswordSuccessfully';
import TradingEnterOtp from '../Screens/2FASecurityFlow/TradingEnterOtp';
import AddAuthenticatorAppverification from '../Screens/2FASecurityFlow/GoogleAuthenticator/AddAuthenticatorAppverification';
import Set2FAAuthenticator from '../Screens/2FASecurityFlow/GoogleAuthenticator/Set2FAAuthenticator';
import EnableAuthenticator from '../Screens/2FASecurityFlow/GoogleAuthenticator/EnableAuthenticator';
import VerifyAuthenticator from '../Screens/2FASecurityFlow/GoogleAuthenticator/VerifyAuthenticator';
import EmptyEmailVerification from '../Screens/2FASecurityFlow/Email2FA/EmptyEmailVerification';
import SetEmailVerification from '../Screens/2FASecurityFlow/Email2FA/SetEmailVerification';
import VerifyEmailVerificator from '../Screens/2FASecurityFlow/Email2FA/VerifyEmailVerificator';
import AddPhoneverification from '../Screens/2FASecurityFlow/Phone2FA/AddPhoneverification';
import SetPhonenumberverification from '../Screens/2FASecurityFlow/Phone2FA/SetPhonenumberverification';
import VerifyPhoneNumber from '../Screens/2FASecurityFlow/Phone2FA/VerifyPhoneNumber';
import Security from '../Screens/2FASecurityFlow/Security';
import Withdrawalhistory from '../Screens/TransactionhistoryFlow/Withdrawalhistory';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Withdrawalhistory">
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
      <Stack.Screen name="FrontimageofID" component={FrontimageofID} />
      <Stack.Screen name="BackimageofID" component={BackimageofID} />

      {/* -----------------------Home Flow----------------------------- */}

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WithdrawSearchcoin" component={WithdrawSearchcoin} />
      <Stack.Screen name="BottomTabbar" component={BottomTabbar} />
      <Stack.Screen name="Sendviacryptonetwork" component={Sendviacryptonetwork} />
      <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
      <Stack.Screen name="Successfullywithdrawal" component={Successfullywithdrawal} />
      <Stack.Screen name="Warning" component={Warning} />

      {/* ---------------------------Deposit crypto ---------------------*/}
      <Stack.Screen name="Selectcurrency" component={Selectcurrency} />
      <Stack.Screen name="Addressreveal" component={Addressreveal} />


      {/* ---------------------------Saved addressess / Add recipient ---------------------*/}
      <Stack.Screen name="Addnewaddress" component={Addnewaddress} />


      {/* --------------------------- AddfundCTA ---------------------*/}
      <Stack.Screen name="Addfundoptions" component={Addfundoptions} />
      <Stack.Screen name="P2PMainPage" component={P2PMainPage} />
      <Stack.Screen name="BuywiithINR" component={BuywiithINR} />
      <Stack.Screen name="SwapScreen" component={SwapScreen} />
      <Stack.Screen name="RecieveFund" component={RecieveFund} />
      <Stack.Screen name="Tranfer" component={Tranfer} />


      {/* --------------------------- Swap flow ---------------------*/}
      <Stack.Screen name="SelectCoin" component={SelectCoin} />
      <Stack.Screen name="Selectpaytoken" component={Selectpaytoken} />
      <Stack.Screen name="Walletfunding" component={Walletfunding} />
      <Stack.Screen name="Coindropdown" component={Coindropdown} />
      <Stack.Screen name="AddfundpopupRecieve" component={AddfundpopupRecieve} />
      <Stack.Screen name="RateUSDTtoBTCB" component={RateUSDTtoBTCB} />
      <Stack.Screen name="RateBTCBtoUSDT" component={RateBTCBtoUSDT} />



      {/* --------------------------- Swap flow  successfully---------------------*/}
      <Stack.Screen name="ConfirmSwap" component={ConfirmSwap} />
      <Stack.Screen name="TwoFAverification" component={TwoFAverification} />
      <Stack.Screen name="SubmittedSwap" component={SubmittedSwap} />

      {/* --------------------------- P2P flow ---------------------*/}
      <Stack.Screen name="P2PMain" component={P2PMain} />
      <Stack.Screen name="BuyUSDT" component={BuyUSDT} />
      <Stack.Screen name="Ordercreated" component={Ordercreated} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="OrdercancelReorder" component={OrdercancelReorder} />
      <Stack.Screen name="Paymenthelp" component={Paymenthelp} />
      <Stack.Screen name="Cancelorder" component={Cancelorder} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />

      {/* --------------------------- Post Ads flow ---------------------*/}
      <Stack.Screen name="CloseAds" component={CloseAds} />
      <Stack.Screen name="SetTypeandPrice" component={SetTypeandPrice} />
      <Stack.Screen name="SetAmountandmethods" component={SetAmountandmethods} />
      <Stack.Screen name="Setconditions" component={Setconditions} />
      <Stack.Screen name="AdSuccessfullyPosted" component={AdSuccessfullyPosted} />

      {/* --------------------------- Transaction history flow---------------------*/}
      <Stack.Screen name="Transactionhistoryscreen" component={Transactionhistoryscreen} />
      <Stack.Screen name="Deposithistory" component={Deposithistory} />
      <Stack.Screen name="Withdrawalhistory" component={Withdrawalhistory} />
      

      {/* --------------------------- Settings flow---------------------*/}
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Termsofuse" component={Termsofuse} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="System" component={System} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Currency" component={Currency} />
      <Stack.Screen name="Soundsandvibration" component={Soundsandvibration} />
      <Stack.Screen name="Clipboard" component={Clipboard} />
      <Stack.Screen name="Systempermissions" component={Systempermissions} />


      {/* --------------------------- Changepassword flow---------------------*/}

      <Stack.Screen name="Changepassword" component={Changepassword} />
      <Stack.Screen name="PasswordchangedSuccessfully" component={PasswordchangedSuccessfully} />


      {/* --------------------------- Add Bank flow---------------------*/}

      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="SearchBank" component={SearchBank} />
      <Stack.Screen name="Bankaddedsuccessfully" component={Bankaddedsuccessfully} />


      {/* --------------------------- 2FA Security Flow---------------------*/}
      <Stack.Screen name="SetTradingPassword" component={SetTradingPassword} />
      <Stack.Screen name="Changetradingpassword" component={Changetradingpassword} />
      <Stack.Screen name="EmptyTradingPassword" component={EmptyTradingPassword} />
      <Stack.Screen name="AddTradingPassword" component={AddTradingPassword} />
      <Stack.Screen name="ChangetradingpasswordSuccessfully" component={ChangetradingpasswordSuccessfully} />
      <Stack.Screen name="TradingEnterOtp" component={TradingEnterOtp} />
      <Stack.Screen name="AddAuthenticatorAppverification" component={AddAuthenticatorAppverification} />
      <Stack.Screen name="Set2FAAuthenticator" component={Set2FAAuthenticator} />
      <Stack.Screen name="EnableAuthenticator" component={EnableAuthenticator} />
      <Stack.Screen name="VerifyAuthenticator" component={VerifyAuthenticator} />
      <Stack.Screen name="EmptyEmailVerification" component={EmptyEmailVerification} />
      <Stack.Screen name="SetEmailVerification" component={SetEmailVerification} />
      <Stack.Screen name="VerifyEmailVerificator" component={VerifyEmailVerificator} />
      <Stack.Screen name="AddPhoneverification" component={AddPhoneverification} />
      <Stack.Screen name="SetPhonenumberverification" component={SetPhonenumberverification} />
      <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
      <Stack.Screen name="Security" component={Security} />

      
      
      
      
      




    </Stack.Navigator>
  );
};

export default RouteNavigation;
