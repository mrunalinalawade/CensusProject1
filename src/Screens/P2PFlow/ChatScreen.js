import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TextBase } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import COLORS from '../../assets/colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GroupModal from '../../Components/AllModals/GroupModal';
import RBSheet from 'react-native-raw-bottom-sheet';
import Inputfield1 from '../../Components/Inputfields1';
import { ValidateaddressField, ValidateEmail } from '../../Components/ValidationConfig/Validations';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const ChatScreen = (props) => {
    const refRBSheet4 = useRef();
    const refRBSheet2 = useRef();
    const [message, setmessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Address, setAddress] = useState('');
    const [AddressError, setAddressError] = useState('');
    const [searchQuery, setSearchQuery] = useState("");

    const handleSendMessage = () => {
        if (message.trim().length === 0) {
            return;
        }
        console.log('Sending message:', message);
        setmessage('');
        Keyboard.dismiss();
    };

    const [ShowError, setShowError] = useState({
        EmailError: false,
        AddressError: false

    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <View style={styles.logoStyle}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: '6%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={IMAGEPATH.Arti} style={{ width: 30, height: 30 }} />
                            <Text style={[styles.time, { marginLeft: '6%' }]}>Aarti1</Text>
                            <Image source={IMAGEPATH.RightStar} style={{ width: 15, height: 15, marginLeft: '4%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '13%' }}>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={30} color={'#42C9A1'} />
                            <Text style={[styles.tabText62, { right: 5 }]}>Online</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => modalVisible == false ? setModalVisible(true) : setModalVisible(false)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '3.8%', borderRadius: 7, alignItems: 'center', paddingHorizontal: '4.5%' }}>
                        <VECTOR_ICONS.Entypo name={'dots-three-horizontal'} size={20} color={'#FFFFFF'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewStylew2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.sell}>Buy</Text>
                            <Text style={styles.UsdtStyle}>USDT</Text>
                            <Text style={styles.withStyle}>with</Text>
                            <Text style={styles.UsdtStyle}>₹ 2,000.00 </Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: 'rgba(47, 158, 214, 0.1)', padding: '4%', borderRadius: 7, alignItems: 'center' }}><Text style={[styles.text6, { color: '#2F9ED6' }]}>Ongoing order </Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={styles.pay}>Pay the seller within</Text>
                            <Text style={styles.time}>14:04</Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 8, padding: '3%', alignItems: 'center' }}>
                            <Text style={styles.chatStyle}>Transferred, notify seller</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[styles.tabText62, { alignSelf: 'center', marginVertical: '4%' }]}>Welcome to the BitTrans Chatroom</Text>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: '2%' }} contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.EntireView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: '4%' }}>
                            <Text style={styles.tabText6}>10-24-2024</Text>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                            <Text style={styles.tabText6}>12:29:22</Text>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={IMAGEPATH.Arti} style={{ width: 30, height: 30 }} />
                            <View style={{ backgroundColor: '#3A3D4B', borderRadius: 9, padding: '7%', alignItems: 'flex-start', marginLeft: '4%' }}><Text style={[styles.time, { lineHeight: 15 }]}>I’m online please {"\n"}pay fast</Text></View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: '4%' }}>
                            <Text style={styles.tabText6}>10-24-2024</Text>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                            <Text style={styles.tabText6}>12:29:22</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 9, padding: '7%', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
                            <Text style={[styles.time, { lineHeight: 15 }]}>Ok I’m paying {"\n"}you</Text></View>
                        <View style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 19, padding: '4%', alignItems: 'flex-start', alignSelf: 'flex-end', marginTop: '3%' }}>
                            <Text style={[styles.time, { lineHeight: 15 }]}>Please be online</Text></View>

                    </View>
                </KeyboardAwareScrollView>

                <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', width: width * 0.9, backgroundColor: 'rgba(233, 116, 3, 0.1)', borderRadius: 7, padding: '4%', marginVertical: '1%' }}>
                    <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20, }} />
                    <Text style={[styles.account, { color: 'rgba(255, 125, 0, 1)', width: width * 0.70, marginLeft: '2%' }]}>IMPORTANT: Please be careful when checking payment proofs in the order chat during P@P transactions. Do not</Text>
                    <VECTOR_ICONS.Entypo name={'cross'} color={'rgba(255, 255, 255, 0.6)'} size={25} style={{ marginTop: '3%' }} />
                </View>


                <View style={[styles.viewStyle1,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                    <View style={[styles.TextInput, { width: message.length > 0 ? width * 0.75 : width * 0.9, }]}>

                        <TextInput
                            value={message}
                            placeholder="Type message......"
                            // ref={textInputRef}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            maxLength={5000}
                            onChangeText={(text) => {
                                setmessage(text);
                            }}
                            style={[styles.TextInput1, { width: message.length > 0 ? width * 0.6 : width * 0.73, }]}
                        />
                        <TouchableOpacity style={styles.documentView}  >
                            <VECTOR_ICONS.Entypo name='attachment' size={18} color={'rgba(255, 255, 255, 0.6)'} />
                        </TouchableOpacity>


                    </View>
                    {message.trim().length > 0 && (
                        <TouchableOpacity
                            style={styles.SendIocn}
                            onPress={() => {
                                setmessage('');
                                handleSendMessage(message)
                            }}>
                            <VECTOR_ICONS.AntDesign name='arrowup' color={'rgba(255, 255, 255, 0.87)'} size={20} />
                        </TouchableOpacity>
                    )}

                </View>
            </View>
            <GroupModal
                visible={modalVisible}
                Gmember={() => { refRBSheet4.current.open(), setModalVisible(false) }}
                Gmember2={() => { refRBSheet2.current.open(), setModalVisible(false) }}
                CreateGroup
            />




            <RBSheet
                ref={refRBSheet4}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={700}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Report</Text>

                    <Text style={styles.account}>Report reason</Text>

                    <TouchableOpacity style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Please select reason</Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.account}>Your email</Text>

                    <Inputfield1
                        placeholder={'Enter email address'}
                        MaxLength={256}
                        value={Email}
                        onBlur={() => {
                            if (Email != '' || Email != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    EmailError: true,
                                }));
                            }
                        }}
                        onChangeText={(text) => {
                            if (Email != '' || Email != undefined) {
                                setEmail(text);
                                setEmailError(ValidateEmail(text));
                            }
                        }}
                        ShowError={ShowError.EmailError}
                        Error={EmailError}
                    />

                    <Text style={styles.account}>Description</Text>

                    <Inputfield1
                        placeholder={'Please provide as much details as possible'}
                        MaxLength={256}
                        multiline
                        value={Address}
                        style={{ height: height * 0.2, textAlignVertical: 'top' }}
                        onBlur={() => {
                            if (Address.trim() !== '') {
                                setShowError((prevState) => ({
                                    ...prevState,
                                    AddressError: true,
                                }));
                            }
                        }}
                        onChangeText={(text) => {
                            if (Address != '' || Address != undefined) {
                                setAddress(text);
                                setAddressError(ValidateaddressField(text));
                            }
                        }}
                        ShowError={ShowError.AddressError}
                        Error={AddressError}
                    />

                    <Text style={styles.account}>Upload Proof</Text>
                    <Text style={styles.account2}>Screenshot, recording, document of payment and communication log.size 5MB </Text>


                    <TouchableOpacity style={styles.loginWithGoogleViewIos}>
                        <Image source={IMAGEPATH.plus} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>


                    <View style={[styles.viewStyle]}></View>

                    <WholeButton1 Label={'Submit'} Action={() => { }} styles={{ width: width * 0.9, marginTop: '4%', backgroundColor: 'rgba(118, 140, 92, 0.2)' }}
                        buttonStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />



                </View>

            </RBSheet>


            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={670}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Search</Text>

                    <Text style={[styles.account2,{ marginTop: '3%'}]}>Find your conversation record with this user here. Click to sync messagesfrom previous to this chatroom.</Text>


                    <View style={[styles.InputViewFiled, { marginTop: '10%', width: width * 0.9, }]}>
                        <TouchableOpacity
                            style={{ alignSelf: "center", marginLeft: '4%' }} >
                            <VECTOR_ICONS.AntDesign
                                name="search1"
                                color={"rgba(127, 128, 130, 1)"}
                                size={19}
                            />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Search Coin"
                            style={{
                                width: width * 0.6,
                                color: 'rgba(255, 255, 255, 0.4)',
                                marginLeft: '3%',
                                fontSize: 12, fontWeight: '400'
                            }}
                            placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>

                        <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20, marginTop: '2%' }} />
                        <Text style={styles.account2}>  Enter 4 to 50 numbers.</Text>
                    </View>


                    <View style={styles.ViewStylew3}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={styles.buy}>Buy</Text>
                                <Text style={styles.buyUS}>USDT</Text>
                            </View>

                            <TouchableOpacity onPress={props.orderPress} style={{ backgroundColor: 'rgba(255, 166, 0, 0.1)', borderRadius: 7, padding: '2.3%', alignItems: 'center' }}>
                                <Text style={{ color: '#FFA600', fontSize: 12, fontWeight: '500', marginHorizontal: '3%' }}>Pending payment</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.13, alignSelf: 'flex-end', marginTop: '10%', right: 8 }}>
                            <Image source={IMAGEPATH.Clock} style={{ height: 13, width: 12 }} />
                            <Text style={styles.accountstyle1}> 13:11</Text>
                        </View>

                        <View style={[styles.viewStle5, { marginTop: '3%' }]}>
                            <Text style={styles.tabText61} >Amount</Text>
                            <Text style={styles.tabText62}>₹ 2,000.00</Text>
                        </View>
                        <View style={[styles.viewStle5, { marginTop: '5%' }]}>
                            <Text style={styles.tabText61} >Price</Text>
                            <Text style={styles.tabText62}>₹ 89.95</Text>
                        </View>
                        <View style={styles.viewStle6}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.tabText61}>Quantity</Text>
                            </TouchableOpacity>
                            <Text style={styles.tabText62}>22.23 USDT</Text>
                        </View>
                        <View style={[styles.viewStle5, { marginTop: '3%' }]}>
                            <Text style={styles.tabText61} >Quantity</Text>
                            <Text style={styles.tabText62}>₹ 89.95</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: '4%' }}>
                            <Text style={styles.tabText6}>10-24-2024</Text>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                            <Text style={styles.tabText6}>12:29:22</Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.tabText623}>Tap or pull to load more</Text>
                    </TouchableOpacity>








                </View>
            </RBSheet>
















        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    mainviewStyle: {

        width: width * 0.9,
        alignSelf: 'center',
        flex: 1

    },
    logoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    tabText62: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center'

    },
    tabText623: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '5%'

    },
    time: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'

    },
    text6: {
        fontSize: 10,
        fontWeight: '400',

    },
    ViewStylew2: {

        width: width * 0.9,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        padding: '5%',
        borderRadius: 10,
        marginTop: '8%',

    },
    sell: {
        fontSize: 12,
        fontWeight: '600',
        color: '#42C9A1',

    },
    UsdtStyle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: '3%'

    },
    withStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF',
        marginLeft: '3%'

    },
    pay: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '400'
    },
    time: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '400'

    },
    chatStyle: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '400',
        marginHorizontal: '1%'

    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: '#63687F',

    },
    account2: {
        fontSize: 10,
        fontWeight: '400',
        // color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 15,
        alignSelf: 'flex-start',
        marginTop: '3%'
    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '3%',
    },
    TextInput: {

        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 7,
        backgroundColor: 'rgba(42, 43, 47, 1)',
        marginVertical: '4%'
    },
    TextInput1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 15,

        marginLeft: '2%',
        alignSelf: 'center',
    },
    documentView: {
        alignItems: "center",
        right: 10

    },
    EntireView: {
        width: width * 0.9,
        alignSelf: 'center',
        marginTop: '3%',
        flex: 1


    },
    SendIocn: {
        backgroundColor: 'rgba(118, 140, 92, 1)',
        padding: '4%',
        borderRadius: 30,
        alignItems: 'center',
        width: width * 0.13,
    },


    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    account: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '5%',
        alignSelf: 'flex-start'
    },
    InputFieldStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        paddingHorizontal: 8,
        fontSize: 12,
        fontWeight: '400',
        borderRadius: 7,
        width: width * 0.9,
        padding: '6%',
        // fontFamily: FONTS.regular,
        color: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    PlaceholderStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        marginLeft: '3%',
        fontWeight: '400',
        // fontFamily: FONTS.regular,

    },
    loginWithGoogleViewIos: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '10%',
        width: width * 0.23,
        height: height * 0.11,
        alignSelf: 'flex-start',
        marginTop: '5%'
    },
    viewStyle: {
        width: width,
        backgroundColor: '#2D2E36',
        height: 1.5,
        marginTop: '5.5%'


    },
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.7,
        borderRadius: 6, marginLeft: '1%'

    },
    ViewStylew3: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: width * 0.89,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        alignSelf: 'flex-start',
        padding: '4%',
        borderRadius: 10,
        marginTop: '8%',
        margin: 2
    },
    buy: {
        fontSize: 18,
        color: '#42C9A1',
        fontWeight: '600',

    },
    buyUS: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: '4%'

    },
    tabText61: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    tabText62: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },
    viewStle5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
       
    },
    viewStle6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginVertical: '4%'
    },
    accountstyle1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',

    },


})