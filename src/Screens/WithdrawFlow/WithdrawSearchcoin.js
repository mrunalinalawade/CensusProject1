import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions, FlatList, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const WithdrawSearchcoin = (props) => {
  const refRBSheet = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const filterData = [
    {
      id: 1,

      img2: IMAGEPATH.BitCoin,
      coinname: 'USDT',
      UiId: 'Tehter',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 2,
      img2: IMAGEPATH.Ethereum,
      coinname: 'BTC',
      UiId: 'Bitcoin',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 3,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'ETH',
      UiId: 'Ethereum',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 4,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'LTC',
      UiId: 'Light coin',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 5,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'MATIC',
      UiId: 'Matic',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 6,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'DOT',
      UiId: 'Polka dot',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },
    {
      id: 7,
      img2: IMAGEPATH.Ethereum,
      coinname: 'BTC',
      UiId: 'Bitcoin',
      price: '0.0264968',
      percentage: '$ 0.026168',
    },


  ]
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

      <Text style={[styles.textStyle, { color: '#fff', marginVertical: '5%', marginHorizontal: '6%' }]}>Coin list</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filterData}
        style={{ marginBottom: '2%' }}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        ListEmptyComponent={() => (
          <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
            No Data Found
          </Text>
        )}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => { refRBSheet.current.open() }} style={styles.FlatlistView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
              <Image source={item?.item?.img2} style={{ width: 50, height: 50 }} />
              <View style={styles.TextView}>
                <Text style={styles.Text11}>{item.item?.coinname}</Text>
                <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
              </View>
            </View>
            <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
              <Text style={styles.Text3}>{item?.item?.price}</Text>
              <Text style={[styles.Text2]} >{item?.item?.percentage} </Text>
            </View>

          </TouchableOpacity>
        )}
      />


      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={305}
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
          <Text style={styles.logintext1}>Withdraw</Text>
          <View  style={{flexDirection:'row',marginTop:'9%',justifyContent:'space-between',alignItems:'center',width: width * 0.9,borderWidth:1,borderColor:'rgba(75, 77, 86, 1)',borderRadius:5,padding:'4%',marginVertical:'3%'}}>
          <Image source={IMAGEPATH.Deposit} style={{ width: 30, height: 30 }} />
            <View>
            <Text style={styles.crptoStyle}>Send via crypto network</Text>
            <Text style={styles.signStyle1}>Send to a known crypto address via crypto network</Text>
            </View>
           

          </View>

          <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width: width * 0.9,borderWidth:1,borderColor:'rgba(75, 77, 86, 1)',borderRadius:5,padding:'4%',marginVertical:'3%'}}>
          <Image source={IMAGEPATH.Deposit} style={{ width: 30, height: 30 }} />
            <View style={{width:width*0.68}}>
            <Text style={styles.crptoStyle}>Send via email / phone / ID</Text>
            <Text style={styles.signStyle1}>Send to BitTrans user. Easy an instant</Text>
            </View>
           

          </View>
       
       

        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default WithdrawSearchcoin

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
    width: width * 0.23
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