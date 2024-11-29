
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions, FlatList, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'


const { height, width } = Dimensions.get('window');
const SearchBank = (props) => {

  const [searchQuery, setSearchQuery] = useState("");
 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

      <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '4%' }}>
        <View style={styles.InputViewFiled}>
          <TouchableOpacity
            style={{ alignSelf: "center", marginLeft: '4%' }} >
            <VECTOR_ICONS.AntDesign
              name="search1"
              color={"rgba(127, 128, 130, 1)"}
              size={19}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
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
        <Text style={styles.textStyle}>Cancel</Text>
      </View>

      <Text style={[styles.textStyle, { color: '#fff', marginVertical: '5%', marginHorizontal: '6%' }]}>Bank list</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8,9]}
        style={{ marginBottom: '2%' }}
       
        ListEmptyComponent={() => (
          <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
            No Data Found
          </Text>
        )}
        renderItem={(item) => (
          <TouchableOpacity style={styles.FlatlistView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
              <Image source={IMAGEPATH.bank} style={{ width: 35, height: 35 }} />
              <View style={styles.TextView}>
                <Text style={styles.Text11}>SBI</Text>        
              </View>
            </View>
          </TouchableOpacity>
        )}
      />


    
    </SafeAreaView>
  )
}

export default SearchBank

const styles = StyleSheet.create({
  InputViewFiled: {
    backgroundColor: "rgba(42, 43, 47, 1)",
    alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    width: width * 0.7,
    borderRadius: 6, marginLeft: '1%'

  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#768C5C'
  },
  FlatlistView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'red',
    marginTop: '5%'
  },
  TextView: {
    width: width * 0.26
    // ,backgroundColor:'red'
  },
  Text11: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',

  },
  Text2: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '2%'

  },
  Text3: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginTop: '2%'

  },
  logintext1: {
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    alignSelf:'flex-start',
    color: '#fff',
    marginTop: '6%',
    lineHeight: 32.97,

},
signStyle1: {
  fontSize: 11,
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 18,
  marginTop: '3%',

},
crptoStyle:{
  fontSize:16,
  fontWeight: '600',

  color: '#fff',
  marginTop: '6%',

}

})