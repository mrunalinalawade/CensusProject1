import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Profile = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Profile'}
                    sun={true}
                    navigate={() => props.navigation.goBack()} />



                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ backgroundColor: '#30323B', alignItems: 'center', borderRadius: 80, width: 70, height: 70, justifyContent: 'center', marginLeft: '0%' }}>
                                <Text style={styles.Password}>28</Text>
                            </View>
                            <View style={{ marginLeft: '8%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.Password4}>**3028</Text>
                                    <TouchableOpacity onPress={() => { }} style={{ backgroundColor: 'rgba(47, 158, 214, 0.1)', borderRadius: 5, padding: '4%', marginLeft: '8%' }}>
                                        <Text style={[styles.signupStyle, { color: '#2F9ED6', fontSize: 10, marginHorizontal: '3%' }]}>verified</Text>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity onPress={() => { }} style={{ backgroundColor: 'rgba(255, 125, 0, 0.1)', borderRadius: 5, padding: '4%', marginLeft: '8%' }}>
                                    <Text style={[styles.signupStyle, { color: '#FF7D00', fontSize: 10 ,marginHorizontal:'3%'}]}>Unverified</Text>
                                </TouchableOpacity> */}
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                                    <Text style={styles.Password5}>UID: </Text>
                                    <Text style={styles.Password5}>2261885421</Text>
                                    <Image source={IMAGEPATH.Copy} style={{ width: 15, height: 16.5, marginLeft: '3%' }} />
                                </View>
                            </View>

                        </View>

                        <View style={{ backgroundColor: '#30323B', alignItems: 'center', borderRadius: 80, width: 40, height: 40, justifyContent: 'center', }}>
                            <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} size={15} />
                        </View>


                    </View>
                    {/* 
                    <View style={{ backgroundColor: 'rgba(255, 102, 102, 0.1)', padding: '4%', width: width * 0.8, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                        <Image source={IMAGEPATH.Reds} style={{ width: 20, height: 20 }} />
                        <View style={{marginLeft:'4%'}}>
                        <Text style={{fontSize:12,fontWeight:'400',color:'#FF6666'}}>Please verify your account</Text>
                        <Text style={[styles.Password5,{width:width*0.6,marginTop:'3%'}]}>Please complete identity verification to enable deposits, crypto purchases, and trading permissions.</Text>
                        </View>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 102, 102, 0.6)'} size={13} style={{marginTop:'9%'}} />
                       
                    </View>
                    </View> */}
                    {/* 
                    <View style={{ backgroundColor:'rgba(255, 145, 0, 0.1)', padding: '4%', width: width * 0.812, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:'center' ,marginVertical:'3%'}}>
                            <VECTOR_ICONS.Fontisto name={'clock'}  color={'#FF9100'} size={15} />
                            <Text style={{fontSize:12,fontWeight:'400',color:'#FF9100',marginLeft:'3%'}}>Verification in progress, check back in a bit</Text>
                        </View>
                    </View> */}


                    {/* <View style={{ backgroundColor: 'rgba(255, 102, 102, 0.1)', padding: '4%', width: width * 0.812, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginVertical: '3%' }}>
                            <VECTOR_ICONS.Fontisto name={'clock'} color={'#FF6666'} size={15} />
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6666', marginLeft: '3%' ,flexDirection:'row',alignItems:'center'}}>Verification failed<TouchableOpacity><Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6666',textDecorationLine:'underline',marginTop:'8%' }}>Try again</Text></TouchableOpacity></Text>
                        </View>
                    </View> */}



                </View>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                        <Image source={IMAGEPATH.verified} style={{ width: 25, height: 25 }} />
                        <Text style={styles.Password}>Security</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                        <Image source={IMAGEPATH.Authentcate} style={{ width: 20, height: 21 }} />
                        <Text style={styles.Password}>History</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                        <Image source={IMAGEPATH.setting} style={{ width: 25, height: 25 }} />
                        <Text style={[styles.Password]}>Settings</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                        <Image source={IMAGEPATH.phoneapp} style={{ width: 25, height: 25 }} />
                        <Text style={styles.Password}>Share to friends</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                        <Image source={IMAGEPATH.onlinesupport} style={{ width: 25, height: 25 }} />
                        <Text style={styles.Password}>Support</Text>
                    </TouchableOpacity>
                </View>








                <View style={{ backgroundColor:'rgba(255, 102, 102, 0.1)', padding: '4%', width: width * 0.25, alignSelf: 'center', borderRadius: 8, marginTop:height*0.22 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:'center'}}>
                        <Image source={IMAGEPATH.verifiedred} style={{ width: 20, height: 20 }} />
                            <Text style={{fontSize:12,fontWeight:'400',color:'#FF6666',marginLeft:'7%'}}>Logout</Text>
                        </View>
                    </View> 






            </View>
        </SafeAreaView>

    )
}

export default Profile

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
    },
    Password: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '6%'

    },
    Password5: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',


    },
    viewStyle: {
        width: width * 0.82,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        marginVertical: '2.5%'
        // right: 16,
    },
    signupStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#fff',
    },
    Password4: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',


    },
})