
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const GroupModal = (props) => {
    // const [modalVisible, setModalVisible] = useState(false)
    const Height1 = Platform.OS === 'android' ? height * 0.16 : height * 0.17
    const Height2 = Platform.OS === 'android' ? height * 0.17 : height * 0.2
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.visible}
                // onRequestClose={() => {
                //   setModalVisible(false);
                // }}
                // onBackdropPress={() => {
                //   setModalVisible(false);
                // }}
                style={{
                    height: Platform.OS === 'android' ? height * 0.05 : height * 0.08,
                }}
            >
                <TouchableWithoutFeedback onPress={props?.closeModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <SafeAreaView
                    style={[
                        StyleSheet.absoluteFill,
                        {

                            height: props?.CreateGroup || props?.DeleteChat ? Height1 : Height2,
                        },
                    ]}
                >
                    {
                        <View
                            style={{
                                backgroundColor:'#1C1D22',
                                width: "45%",
                                padding: 10,
                                marginTop: "10%",
                                alignSelf: "flex-end",
                                borderRadius: 3,
                                marginRight: '7%',
                                flex: 1,
                                borderColor: '#000',
                                borderWidth: 1,

                            }}
                        >

                            {

                                props?.CreateGroup && (<>
                                    <TouchableOpacity
                                        onPress={() => {
                                            props?.Gmember();

                                        }}
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: 4,
                                        }}
                                    >
                                         <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20, }} />
                                        <Text style={styles.TextStyle_1}>Report</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        onPress={() => {
                                            props?.Gmember2();

                                        }}
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginVertical: 4,
                                            marginTop:'6%'
                                        }}
                                    >
                                        <VECTOR_ICONS.AntDesign name={'search1'} color={'#A4A5A7'} size={20} />
                                        <Text style={styles.TextStyle_1}>Search</Text>
                                    </TouchableOpacity>
                                </>




                                )}

                            {/* {
                                props?.line &&
                                <View style={{ width: width * 0.45, backgroundColor: '#000', height: height * 0.001, alignSelf: 'center', marginRight: '1%', }}></View>
                            } */}
                            {/* {
                                props?.DeleteChat &&
                                <TouchableOpacity
                                    onPress={() => {
                                        props?.deletechat();
                                    }}
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: 6,
                                        marginTop: props?.DeleteChat ? '4%' : '7%'
                                    }}
                                >
                                    <Text style={styles.TextStyle_1}>Delete Chat</Text>
                                </TouchableOpacity>
                            } */}
                        </View>
                    }
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default GroupModal

const styles = StyleSheet.create({
    TextStyle_1: {
        // fontFamily: FONT.Regular,
fontWeight:'400',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 14,
        marginLeft: "8%",
    },
    modalOverlay: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})