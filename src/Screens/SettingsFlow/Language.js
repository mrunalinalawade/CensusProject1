import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header';
import { VECTOR_ICONS } from '../../assets/Theme';

const { height, width } = Dimensions.get('window');
const Language = (props) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const Data = [{
        id: 1,
        crpto: "English",

    },
    {
        id: 2,
        crpto: "Hindi",

    },
    {
        id: 3,
        crpto: "Urdu",

    },
    {
        id: 4,
        crpto: "Arabic",

    },
    {
        id: 5,
        crpto: "Hindi",

    },
    {
        id: 6,
        crpto: "Urdu",

    },

    {
        id: 7,
        crpto: "Arabic",

    },
    {
        id: 8,
        crpto: "English",

    },
    {
        id: 9,
        crpto: "Hindi",

    },
    {
        id: 10,
        crpto: "Urdu",

    },
    {
        id: 11,
        crpto: "Arabic",

    },
    {
        id: 12,
        crpto: "English",

    },
    ]
    const handleSelectItem = (id) => {
        setSelectedItem(id); // Update the selected item ID
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Language'}
                    // label4={true}
                    navigate={() => props.navigation.goBack()} />


                <FlatList
                    showsVerticalScrollIndicator={false}


                    data={Data}
                    style={{ marginVertical: '4%', }}
                    ListEmptyComponent={() => (
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }}>
                            No Data Found
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={() => handleSelectItem(item.id)}><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>

                            {selectedItem === item.id && (
                                <VECTOR_ICONS.AntDesign
                                    name={'check'}
                                    size={20}
                                    color={'#FFFFFF'}
                                />)}

                        </View>
                        
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export default Language

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
    },
    textStyle1: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    itemContainer: {
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center', marginTop: '8%'


    }
})