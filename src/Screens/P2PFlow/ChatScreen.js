import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Keyboard} from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import COLORS from '../../assets/colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GroupModal from '../../Components/AllModals/GroupModal';

const { height, width } = Dimensions.get('window');
const ChatScreen = (props) => {
    const [message, setmessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false)

    const handleSendMessage = () => {
        if (message.trim().length === 0) {
          return;
        }
        console.log('Sending message:', message);
        setmessage('');
        Keyboard.dismiss();
      };
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
                        <View    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '13%' }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between',alignSelf:'center' ,}}>
                    <View style={[styles.TextInput,{width:message.length > 0 ?width * 0.75:width * 0.9,}]}>

                        <TextInput
                            value={message}
                            placeholder="Type message......"
                            // ref={textInputRef}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            maxLength={5000}
                            onChangeText={(text) => {
                                setmessage(text);
                            }}
                            style={[styles.TextInput1,{ width:message.length > 0 ?width * 0.6:width * 0.73,}]}
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
                Gmember={() => { props?.navigation?.navigate('CreateChat'),setModalVisible(false) }}
                deletechat={() => { setModalVisible(false) }}
                closeModal={() => setModalVisible(false)}
                CreateGroup
                message='Create Group'
            />
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
    account: {
        fontSize: 10,
        fontWeight: '400',
        // color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 19,
        // marginVertical: '1.5%'
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
    }

})