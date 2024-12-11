import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme'


const { height, width } = Dimensions.get('window');
const SupportChat = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handlePress = () => {
        setIsClicked(!isClicked);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainviewStyle}>
                <Header
                    textlabel={'Support'}
                    navigate={() => props.navigation.goBack()}
                />

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '6%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', marginLeft: '5%' }}>
                        <Image source={IMAGEPATH.chat} style={{ width: 23, height: 23 }} />
                        <Text style={[styles.Password, { marginLeft: '8%' }]}>Chat with us</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.previous}>Previous conversations</Text>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                <TouchableOpacity onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={handlePress}  style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={handlePress} style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}  style={{ backgroundColor: isClicked ? 'rgba(118, 140, 92, 0.1)' : 'transparent', padding: '6%', width: width * 0.8, alignSelf: 'center', borderRadius: 8,}}>
                    <Text style={styles.money}>How to add money to apple pay</Text>
                    <Text style={styles.close}>Closed</Text>
                    <Text style={styles.june}>June 2</Text>
                </TouchableOpacity>
                </View>






            </ScrollView>
        </SafeAreaView>
    )
}

export default SupportChat

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
        marginBottom:'9%'

    },
    previous: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        marginTop: '13%',

    },
    money:{
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',

    },
    close:{
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
         marginTop:'3%'

    },
    june:{
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf:'flex-end',
        marginTop:'1%'


    }
})