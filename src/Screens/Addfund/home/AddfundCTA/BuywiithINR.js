import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const BuywiithINR = (props) => {
    const [selectedPercentage, setSelectedPercentage] = useState(1); // Default selected percentage
    const [inputValue, setInputValue] = useState("1");
    const [input, setInput] = useState("");
    const percentages = [1200, 4000, 8000, "Max"];
    const refRBSheet2 = useRef();
    const refRBSheet4 = useRef();
    const handlePress = (value) => {
        if (value === "delete") {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + value);
        }
    };

    const handleSelectPercentage = (percentage) => {
        setSelectedPercentage(percentage);
        setInput(percentage === "Max" ? "Max" : percentage.toString());
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainviewStyle}>
                <Header
                    INR={true}
                    navigate={() => props.navigation.goBack()}
                    INRPress={() => { }}
                />
                <Text style={styles.logintext}>Buy crypto</Text>

                <View style={{ flexDirection: 'row', width: width * 0.65, alignSelf: 'center', alignItems: 'center', marginTop: '8%', justifyContent: 'center' }}>

                    <TextInput
                        placeholder='0'
                        style={styles.input}
                        placeholderTextColor={'#fff'}
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        keyboardType="numeric"
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}>
                        <Image source={IMAGEPATH.Rupees} style={{ width: 18, height: 18 }} />
                        <TouchableOpacity onPress={props.INRPress} style={{ width: width * 0.14, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <Text style={styles.account1}>INR</Text>

                            <VECTOR_ICONS.AntDesign name={'caretdown'} size={10} color={'rgba(255, 255, 255, 0.6)'} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Text style={styles.logintext2}>200 - 20,00,000 INR</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#2A2B32', borderRadius: 20, alignSelf: 'center', padding: '4%', marginVertical: '10%' }}>
                    <VECTOR_ICONS.AntDesign name={'swap'} color={'#FFFFFF'} size={20} />
                    <Text style={styles.ustStyle}>USDT</Text>
                </View>


                <TouchableOpacity  onPress={() => { refRBSheet4.current.open() }} style={styles.FlatlistView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                        <Image source={IMAGEPATH.Tether} style={{ width: 45, height: 45 }} />
                        <View style={styles.TextView}>
                            <Text style={styles.Text11}>Buy</Text>
                            <Text style={[styles.Text2]} >USDT</Text>
                        </View>
                    </View>
                    <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                        {/* <Text style={styles.Text3}>{item?.item?.price}</Text> */}

                        <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} size={20} />

                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { refRBSheet2.current.open() }}  style={styles.FlatlistView}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                        <Image source={IMAGEPATH.P2Puser} style={{ width: 45, height: 40 }} />
                        <View style={styles.TextView}>
                            <Text style={styles.Text11}>Buy with</Text>
                            <Text style={[styles.Text2]} >UPI</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                        {/* <Text style={styles.Text3}>{item?.item?.price}</Text> */}

                        <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} size={20} />

                    </View>

                </TouchableOpacity>


                {/* <View style={styles.optionsContainer}>
                    {percentages.map((percentage) => (
                        <TouchableOpacity
                            key={percentage}
                            style={[
                                styles.option,
                                selectedPercentage === percentage && styles.selectedOption,
                            ]}
                            onPress={() => handleSelectPercentage(percentage)}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    selectedPercentage === percentage && styles.selectedOptionText,
                                ]}
                            >
                                ₹{percentage}

                            </Text>
                        </TouchableOpacity>
                    ))}
                </View> */}

                <View style={styles.optionsContainer}>
                    {percentages.map((percentage) => (
                        <TouchableOpacity
                            key={percentage}
                            style={[
                                styles.option,
                                selectedPercentage === percentage && styles.selectedOption,
                            ]}
                            onPress={() => handleSelectPercentage(percentage)}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    selectedPercentage === percentage && styles.selectedOptionText,
                                ]}
                            >
                                ₹{percentage}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>



                <View style={styles.container1}>
                    {/* Custom Keypad */}
                    <View style={styles.keypad}>
                        {[
                            "1", "2", "3",
                            "4", "5", "6",
                            "7", "8",  // Empty gap here
                            "9", "", "0"
                        ].map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.key,
                                    item === "" && { backgroundColor: "transparent", elevation: 0 }, // Styling for empty gap
                                ]}
                                onPress={() => item !== "" && handlePress(item)} // Prevent clicks on empty gap
                                disabled={item === ""} // Disable interaction for the gap
                            >
                                {item !== "" && <Text style={styles.keyText}>{item}</Text>}
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={[styles.key, styles.deleteKey]}
                            onPress={() => handlePress("delete")}
                        >
                            <Image source={IMAGEPATH.Union} style={{ width: 35, height: 25 }} />
                            {/* <VECTOR_ICONS.AntDesign name="close" size={24} color="white" /> */}
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>


            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={680}
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

                    <Text style={styles.logintext1}>Pay with</Text>
                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>P2P Trading </Text>
                            <VECTOR_ICONS.AntDesign name={'questioncircle'} color={'rgba(255, 255, 255, 0.6)'} size={12} style={{ marginTop: '5%' }} />
                        </View>
                        <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>Price</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#CD85E9', width: 2, height: 15, }} />
                            <Text style={styles.account1}>  Lightning </Text>
                            <Text style={styles.account1}>UPI</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>

                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#0084FF', width: 2, height: 15, }} />
                            {/* <Text style={styles.account1}>  Lightning </Text> */}
                            <Text style={styles.account1}>  UPI</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>
                        </View>
                    </View>

                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>P2P Trading </Text>
                            <VECTOR_ICONS.AntDesign name={'questioncircle'} color={'rgba(255, 255, 255, 0.6)'} size={12} style={{ marginTop: '5%' }} />
                        </View>
                        <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>Price</Text>

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image source={IMAGEPATH.Visa} style={{ height: 30, width: 30 }} />
                            {/* <Text style={styles.account1}>  Lightning </Text> */}
                            <Text style={styles.account1}>  Card (VISA/Mastercard)</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>
                        </View>
                    </View>

                    <WholeButton1 Label={'Confirm'} Action={() => { refRBSheet2.current.close()}} styles={{ width: width * 0.9, marginTop: height * 0.22 }} />







                </View>
            </RBSheet>



            <RBSheet
                ref={refRBSheet4}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={460}
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
                    <Text style={styles.logintext1}>Preview order</Text>

                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                        <View>
                            <Text style={[styles.accountstyle, { color: 'rgba(255, 255, 255, 0.6)' }]}>Trade with</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.3 }}>

                                <Text style={[styles.accountstyle, { color: '#FFF' }]}>Crypto-vendor</Text>
                                <Image source={IMAGEPATH.RightStar} style={{ width: 20, height: 20 }} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.34, marginTop: '2%' }}>
                                <Text style={[styles.accountstyle1]}>Trade(s)</Text>
                                <Text style={styles.accountstyle1}>1451 (99.80%)</Text>
                            </View>


                            <Text style={[styles.signStyle1, { marginTop: '7%' }]}>Advertiser’s requirements</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8 }}>
                                <Text style={styles.signStyle1}>1. Open any of the UPI application </Text>
                                <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} />


                            </View>

                        </View>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                        <View>
                            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8, }}>
                                <Text style={styles.accountstyle1}>P2P Trading</Text>
                                <Text style={styles.Text13}>₹ 1,200.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8, }}>

                                <Text style={styles.accountstyle1}>You Receive</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.26 }}>
                                    <Text style={styles.Text13}>12.82 USDT </Text>
                                    <VECTOR_ICONS.AntDesign name={'down'} size={14} color={'rgba(255, 255, 255, 0.6)'} />

                                </View>


                            </View>

                        </View>


                    </View>


                    <View style={{ flexDirection: 'row', marginTop: '6%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Back'} Action={() => {refRBSheet4.current.close()}} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Refresh in 26s'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>






                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default BuywiithINR

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '13%',
        lineHeight: 32.97,
    },
    logintext2: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // marginVertical: '%',
        alignSelf: 'center'
    },
    ustStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FFFFFF',
        marginLeft: '2%'

    },
    FlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(42, 43, 47, 1)',
        padding: '4%',
        marginTop: '5%',
        borderRadius: 7

    },
    TextView: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    Text12: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },
    Text2: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',


    },


    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        paddingHorizontal: 14,
        marginTop: '6%',
        borderRadius: 8,
        // height: 50,
        // marginBottom: 16,

    },
    input: {
        // width: width * 0.43,

        justifyContent: 'flex-end',
        textAlign: 'right',
        fontSize: 65,
        color: '#fff',
        marginLeft: '3%'
    },
    percentageSymbol: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '500'
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginVertical: '8%'
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginHorizontal: 4,
        borderRadius: 8,
        backgroundColor: 'rgba(118, 140, 92, 0.1)',
    },
    selectedOption: {
        backgroundColor: '#768C5C',

    },
    optionText: {
        color: '#768C5C',

        fontSize: 16,
    },
    selectedOptionText: {
        color: '#FFFFFF',

    },



    container1: {
        
        justifyContent: "center",
        alignItems: "center",
        
    },
    input1: {
        fontSize: 32,
        color: "#fff",
        // marginBottom: 20,
    },
    keypad: {
        width: width * 0.9,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",

    },
    key: {
        width: "30%",
        aspectRatio: 1.2,
        backgroundColor: "rgba(107, 107, 107, 1)",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    deleteKey: {
        // backgroundColor: "red",
        backgroundColor:'transparent'
    },
    keyText: {
        fontSize: 25,
        color: "rgba(255, 255, 255, 1)",
        fontWeight: "bold",
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
    Text13: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',

    },
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '2%'

    },
    account1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    accountstyle1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',

    },
    accountstyle: {
        color: 'rgba(255, 255, 255, 0.87)',
        fontSize: 12,
        fontWeight: '400',
    },
 
})