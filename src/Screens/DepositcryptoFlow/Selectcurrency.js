import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import RBSheet from 'react-native-raw-bottom-sheet';


const { height, width } = Dimensions.get('window');
const Selectcurrency = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const refRBSheet = useRef();
  const filterData = [
    {
      id: 1,

      img2: IMAGEPATH.Tether,
      coinname: 'USDT',
      UiId: 'Tehter',

    },
    {
      id: 2,
      img2: IMAGEPATH.BTC,
      coinname: 'BTC',
      UiId: 'Bitcoin',

    },
    {
      id: 3,
      img2: IMAGEPATH.ETH,
      coinname: 'ETH',
      UiId: 'Ethereum',

    },
    {
      id: 4,
      img2: IMAGEPATH.LTC,
      coinname: 'LTC',
      UiId: 'Light coin',

    },
    {
      id: 5,
      img2: IMAGEPATH.MATIC,
      coinname: 'MATIC',
      UiId: 'Matic',

    },
    {
      id: 6,
      img2: IMAGEPATH.DOT,
      coinname: 'DOT',
      UiId: 'Polka dot',

    },
    {
      id: 7,
      img2: IMAGEPATH.SOL,
      coinname: 'SOL',
      UiId: 'Solana',

    },
    {
      id: 8,
      img2: IMAGEPATH.JASMY,
      coinname: 'JASMY',
      UiId: 'Jasmy coin',

    },
    {
      id: 9,
      img2: IMAGEPATH.EGLD,
      coinname: 'EGLD',
      UiId: 'Elrond',

    },


  ]

  const Data = [{
    id: 1,
    crpto: "USDT",

  },
  {
    id: 2,
    crpto: "SOL",

  },
  {
    id: 3,
    crpto: "TRX",

  },
  {
    id: 4,
    crpto: "BTC",

  },
  {
    id: 5,
    crpto: "ETH",

  },
  {
    id: 6,
    crpto: "LCT",

  },
  ]

  const Selectnet = () =>{
    props.navigation.navigate('Addressreveal')
  }

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ width: width * 0.9, alignSelf: 'center', flex: 1 }}>


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
          <TouchableOpacity>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>

        </View>


        <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '4%' }}>
          <Text style={styles.historySTyle}>History</Text>
          <TouchableOpacity>
            <Image source={IMAGEPATH.Delete} style={{ width: 14, height: 18 }} />
          </TouchableOpacity>

        </View>


        <View style={[styles.USStyle, { marginVertical: '5%', paddingVertical: '3%', }]}>
          <Text style={styles.textStyle1}>USDT</Text>
        </View>

        <Text style={styles.historySTyle}>Hot</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={3}
          data={Data}
          style={{ marginVertical: '4%', height: height * 0.2, }}
          ListEmptyComponent={() => (
            <Text style={{ color: 'white', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }}>
              No Data Found
            </Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.USStyle}>
                <Text style={styles.textStyle1}>{item?.crpto}</Text>
              </View>
            </View>
          )}
        />
        <Text style={[styles.historySTyle, { marginTop: '4%' }]}>Available currencies</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          style={{ marginBottom: '4%', }}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
          ListEmptyComponent={() => (
            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
              No Data Found
            </Text>
          )}
          renderItem={(item) => (
            <TouchableOpacity onPress={() => {refRBSheet.current.open() }} style={styles.FlatlistView}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                <Image source={item?.item?.img2} style={{ width: 45, height: 45 }} />
                <View style={styles.TextView}>
                  <Text style={styles.Text11}>{item.item?.coinname}</Text>
                  <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
                </View>
              </View>


            </TouchableOpacity>
          )}
        />













      </View>


      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={580}
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
          <Text style={styles.logintext1}>Select Network</Text>

          <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, backgroundColor: 'rgba(233, 116, 3, 0.1)', borderRadius: 7, padding: '4%', marginVertical: '1%' }}>
            <Image source={IMAGEPATH.Orange} style={{ width: 20, height: 20, }} />
            <Text style={[styles.account, { color: 'rgba(255, 125, 0, 1)', width: width * 0.70, marginLeft: '2%' }]}>IMPORTANT: Please be careful when checking payment proofs in the order chat during P@P transactions. Do not</Text>
            <VECTOR_ICONS.Entypo name={'cross'} color={'rgba(255, 255, 255, 0.6)'} size={25} />
          </View>
          <TouchableOpacity onPress={Selectnet} style={[styles.TextView1,{marginTop:'10%'}]}>
            <Text style={styles.Text11}>ERC20</Text>
            <Text style={[styles.Text2]} >Ethereum(ETH)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Selectnet()} style={[styles.TextView1]}>
            <Text style={styles.Text11}>TRC20</Text>
            <Text style={[styles.Text2]} >Tron(TRX)</Text>
          </TouchableOpacity>
          <View style={[styles.TextView1]}>
            <Text style={styles.Text11}>TON</Text>
            <Text style={[styles.Text2]} >TON(TON)</Text>
          </View>
          <View style={[styles.TextView1]}>
            <Text style={styles.Text11}>SOL</Text>
            <Text style={[styles.Text2]} >Solana(SOL)</Text>
          </View>
          <View style={[styles.TextView1]}>
            <Text style={styles.Text11}>KAVA EVM Co-Chain</Text>
            <Text style={[styles.Text2]} >KAVA EVM Co-Chain(KAVAEVM)</Text>
          </View>
          <View style={[styles.TextView1]}>
            <Text style={styles.Text11}>ARBITRUM</Text>
            <Text style={[styles.Text2]} >Arbitrum one(ARBITRUM)</Text>
          </View>




        </View>
      </RBSheet>

    </SafeAreaView>
  )
}

export default Selectcurrency

const styles = StyleSheet.create({
  InputViewFiled: {
    backgroundColor: "rgba(42, 43, 47, 1)",
    alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    width: width * 0.7,
    borderRadius: 6,

  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#768C5C'
  },
  historySTyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)'

  },

  itemContainer: {
    width: '33.5%', // For 3 items per row
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:'1%'
    // backgroundColor:'red'
  },
  USStyle: {
    backgroundColor: '#2A2B2F',
    alignItems: 'center',
    paddingVertical: '12%',
    borderRadius: 7,
    width: width * 0.28,
    marginTop: '2%'
  },
  textStyle1: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500'
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
  TextView1: { alignSelf: 'flex-start', marginTop: '5%', width: width * 0.7 },

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
  logintext1: {
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    alignSelf: 'flex-start',
    color: '#fff',
    marginTop: '6%',
    lineHeight: 32.97,

  },
  viewStyle: {
    width: width,
    backgroundColor: '#2D2E36',
    height: 1.5,
    marginTop: '5.5%'


  },
  account: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginVertical: '1.5%'
  },
})