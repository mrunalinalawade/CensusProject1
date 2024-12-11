import { Dimensions, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RBSheet from 'react-native-raw-bottom-sheet';


const { height, width } = Dimensions.get('window');
const SupportAssistanceChat = (props) => {
    const [message, setmessage] = useState('');
    const refRBSheet1 = useRef();
    const handleSendMessage = () => {
        if (message.trim().length === 0) {
            return;
        }
        console.log('Sending message:', message);
        setmessage('');
        Keyboard.dismiss();
    };


    const [isClicked, setIsClicked] = useState(false);

    const handlePress = () => {
        setIsClicked(!isClicked);
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
                            <Text style={[styles.time, { marginLeft: '6%' }]}>Support</Text>
                            <Image source={IMAGEPATH.Evil} style={{ width: 15, height: 18, marginLeft: '7%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                            <Text style={[styles.tabText62, { right: 5 }]}>Available 24/7</Text>
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => modalVisible == false ? setModalVisible(true) : setModalVisible(false)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '3.8%', borderRadius: 7, alignItems: 'center', paddingHorizontal: '4.5%' }}>
                        <VECTOR_ICONS.Entypo name={'dots-three-horizontal'} size={20} color={'#FFFFFF'} />
                    </TouchableOpacity>
                </View>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }} contentContainerStyle={{ flex: 1 }} bounces={false}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: height * 0.21 }}>
                        <Text style={styles.tabText6}>10-24-2024</Text>
                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                        <Text style={styles.tabText6}>12:29:22</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Image source={IMAGEPATH.Default} style={{ width: 40, height: 40 }} />
                        <View style={{ backgroundColor: '#3A3D4B', borderRadius: 9, padding: '7%', alignItems: 'flex-start', marginLeft: '4%' }}>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: '#2F9ED6' }}>BitTrans Assistant</Text>
                            <Text style={[styles.time, { lineHeight: 20 }]}>welcome to BitTrans support, how {'\n'}may I assist you today?</Text></View>
                        <Text style={{ fontSize: 8, fontWeight: '400', color: '#737A98', alignSelf: 'flex-end', right: '35%', marginVertical: '2%' }}>23:12</Text>

                    </View>


                    <View style={{ borderWidth: 1, borderColor: '#768C5C', borderRadius: 35, padding: '5.5%', alignItems: 'center', marginLeft: '4%', width: width * 0.36, alignSelf: 'flex-end', marginTop: '12%' }}>
                        <Text style={{ fontSize: 13, color: '#768C5C', fontWeight: '400' }}>About Buy/Sell</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: '#768C5C', borderRadius: 35, padding: '5.5%', alignItems: 'center', marginLeft: '4%', width: width * 0.36, alignSelf: 'flex-end', marginTop: '3%' }}>
                        <Text style={{ fontSize: 13, color: '#768C5C', fontWeight: '400' }}>How to trade ?</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: '#768C5C', borderRadius: 35, padding: '5.5%', alignItems: 'center', marginLeft: '4%', width: width * 0.56, alignSelf: 'flex-end', marginTop: '3%' }}>
                        <Text style={{ fontSize: 13, color: '#768C5C', fontWeight: '400' }}>How do I withdraw money?</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#768C5C', borderRadius: 35, padding: '5.5%', alignItems: 'center', marginLeft: '4%', width: width * 0.56, alignSelf: 'flex-end', marginTop: '3%' }}>
                        <Text style={{ fontSize: 13, color: '#768C5C', fontWeight: '400' }}>How do I deposit money?</Text>
                    </View>

                </KeyboardAwareScrollView>
                <View style={[styles.viewStyle1,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                    <View style={[styles.TextInput, { width: width * 0.75 }]}>
                        <TextInput
                            value={message}
                            placeholder="Type message......"
                            // ref={textInputRef}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            maxLength={5000}
                            onChangeText={(text) => {
                                setmessage(text);
                            }}
                            style={[styles.TextInput1, { width: width * 0.6 }]}
                        />
                        <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={styles.documentView}  >
                            <VECTOR_ICONS.Entypo name='attachment' size={18} color={'rgba(255, 255, 255, 0.6)'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.SendIocn}
                        onPress={() => {
                            setmessage('');
                            handleSendMessage(message)
                        }}>
                        <VECTOR_ICONS.AntDesign name='arrowup' color={'rgba(255, 255, 255, 0.87)'} size={20} />
                    </TouchableOpacity>
                </View>
            </View>



            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={430}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>

                    <Text style={styles.change}>Upload file</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 16, marginTop: '5%', alignSelf: 'flex-start' }}>Never share your card details, expiry date, or CVV</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, marginVertical: '10%' }}>
                        <View style={{ backgroundColor: '#000000', width: width * 0.29, height: height * 0.15, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={IMAGEPATH.photocamera} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ backgroundColor: '#000000', width: width * 0.29, height: height * 0.15, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={IMAGEPATH.photocamera} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ backgroundColor: '#000000', width: width * 0.29, height: height * 0.15, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={IMAGEPATH.photocamera} style={{ width: 20, height: 20 }} />
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8,}}>
                        <TouchableOpacity onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,flexDirection:'row',alignItems:'center' }}>
                          <Image source={IMAGEPATH.gallaryicon} style={{width:20,height:20}} />
                            <Text style={styles.money}>Choose from gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%',marginTop:'3%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,flexDirection:'row',alignItems:'center' }}>
                        <Image source={IMAGEPATH.docicon} style={{width:18,height:22}} />
                            <Text style={styles.money}>Choose file</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default SupportAssistanceChat

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
        marginTop: '2%'
    },
    tabText62: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center'
    },
    time: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        marginTop: '4%',


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
    SendIocn: {
        backgroundColor: 'rgba(118, 140, 92, 1)',
        padding: '4%',
        borderRadius: 30,
        alignItems: 'center',
        width: width * 0.13,
    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '3%',
    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: '#63687F',

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
    change: {
        fontSize: 22,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: '6%',
        alignSelf: 'flex-start'

    },
    money:{
        fontSize: 18,
        fontWeight: '400',
        color: '#768C5C',
        marginLeft: '5%',

    },
})