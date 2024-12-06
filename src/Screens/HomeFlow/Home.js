import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';

const { height, width } = Dimensions.get('window');
const Home = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState('Favorites');
  const tabs = ['Favorites', 'Hot', 'Gainer', 'Losers', 'Exchange', 'New listings'];

  const filterData = [
    {
      id: 1,
      img1: IMAGEPATH.UnFavoriteStar,
      img2: IMAGEPATH.BitCoin,
      coinname: 'Bitcoin',
      UiId: 'Bitcoin/USDT',
      img3: IMAGEPATH.Graphgreen,
      price: '$1,270.10',
      percentage: '+2.76%',
    },
    {
      id: 2,
      img1: IMAGEPATH.FavouriteSatr,
      img2: IMAGEPATH.Ethereum,
      coinname: 'Etherium',
      UiId: 'Eth/USDT',
      img3: IMAGEPATH.Graphred,
      price: '$1,270.10',
      percentage: '-1.02%',
    },
    {
      id: 3,
      img1: IMAGEPATH.UnFavoriteStar,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'Bitcoin',
      UiId: '1 Inch/ USDT',
      img3: IMAGEPATH.Graphgreen,
      price: '$1,270.10',
      percentage: '+2.76%',
    },
    {
      id: 4,
      img1: IMAGEPATH.UnFavoriteStar,
      img2: IMAGEPATH.Bitcoin2,
      coinname: 'Bitcoin',
      UiId: '1 Inch/ USDT',
      img3: IMAGEPATH.Graphgreen,
      price: '$1,270.10',
      percentage: '+2.76%',
    },


  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.HeaderStyle}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Settings')}}><Image source={IMAGEPATH.BT} style={{ width: 43, height: 19 }} /></TouchableOpacity>
         
          <View style={styles.InputViewFiled}>
            <TouchableOpacity
              style={{ alignSelf: "center", marginLeft: '4%' }} >
              <VECTOR_ICONS.AntDesign
                name="search1"
                color={"rgba(127, 128, 130, 1)"}
                size={18}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search here.."
              style={{
                width: width * 0.4,
                color: 'rgba(127, 128, 130, 1)',
                marginLeft: '2%',
                // backgroundColor:'red'
                
              }}
              placeholderTextColor={"rgba(127, 128, 130, 1)"}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <View style={styles.rowStyle}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Security')}}><Image source={IMAGEPATH.Scanner} style={{ width: 40, height: 18 }} /></TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Transactionhistoryscreen')}}><Image source={IMAGEPATH.Bell} style={{ width: 23, height: 17 }} /></TouchableOpacity>
           
            <Image source={IMAGEPATH.Headset} style={{ width: 20, height: 17 }} />
          </View>

        </View>
        <View style={styles.mainStyele}>
          <View>
            <Text style={styles.walletStyle}>Main Wallet</Text>
            <Text style={styles.walletStyle1}>$150.83</Text>
          </View>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate('Addfundoptions')}} style={styles.fundStyle}><Text style={{
            fontSize: 12, fontWeight: '600',
            color: '#FFFFFF',marginHorizontal:'2%'
          }}>Add Fund</Text></TouchableOpacity>
        </View>
        <View style={styles.mainStyele} >
          <View style={styles.deStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Selectcurrency')}
              style={styles.loginWithGoogleViewIos}>
              <Image source={IMAGEPATH.Deposit} style={{ width:28, height: 30  }} />
            </TouchableOpacity>
            <Text style={styles.depoStyle}>Deposit</Text>
          </View>
          <View style={styles.deStyle}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('WithdrawSearchcoin') }} style={styles.loginWithGoogleViewIos}>
              <Image source={IMAGEPATH.Withdraw} style={{ width:28, height: 30 }} />
            </TouchableOpacity>
            <Text style={styles.depoStyle}>Withdraw</Text>
          </View>
          <View style={styles.deStyle}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('SwapScreen')}} style={styles.loginWithGoogleViewIos}>
              <Image source={IMAGEPATH.Swap} style={{ width:30, height:27}} />
            </TouchableOpacity>
            <Text style={styles.depoStyle}>Swap</Text>
          </View>
          <View style={styles.deStyle}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('P2PMain')}} style={styles.loginWithGoogleViewIos}>
              <Image source={IMAGEPATH.P2P} style={{ width: 30, height:28 }} />
            </TouchableOpacity>
            <Text style={styles.depoStyle}>P2P</Text>
          </View>

        </View>
        <View style={styles.viewStyle}></View>

        <View style={[styles.mainStyele, { backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '3%', borderRadius: 7 }]}>
          <View style={{ marginVertical: '3%' }}>
            <Image source={IMAGEPATH.MegaOffer} style={{ width: 140, height: 50, marginLeft: '5%' }} />
            <Text style={[styles.walletStyle, { color: 'rgba(255, 255, 255, 0.9)', width: width * 0.5, marginTop: '6%' }]} >In publishing and graphic design, Lorem ipsum is a placeholder</Text>
          </View>
          <Image source={IMAGEPATH.Gift} style={{ width: 130, height: 108, top: -29 }} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={styles.tabButton}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === tab && styles.selectedTabText,
                  ]}
                >
                  {tab}
                </Text>
                {selectedTab === tab && <View style={styles.underline} />}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          style={{ marginTop: '5%', marginBottom: '2%' }}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
          ListEmptyComponent={() => (
            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONTS.semiBold, textAlign: 'center', marginTop: '15%' }} >
              No Data Found
            </Text>
          )}
          renderItem={(item) => (
            <View style={styles.FlatlistView}>
              <Image source={item?.item?.img1} style={{ width: 20, height: 20, top: -10 }} />
              <Image source={item?.item?.img2} style={{ width: 50, height: 50 }} />
              <View style={styles.TextView}>
                <Text style={styles.Text11}>{item.item?.coinname}</Text>
                <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
              </View>
              <Image source={item?.item?.img3} style={{ width: 68, height: 30 }} />
              <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                <Text style={styles.Text3}>{item?.item?.price}</Text>
                <Text style={[styles.Text3, { color: 'rgba(66, 201, 161, 1)' }]} >{item?.item?.percentage} </Text>
              </View>

            </View>
          )}
        />







      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: '3%'
  },
  InputViewFiled: {
    backgroundColor: "rgba(42, 43, 47, 1)",
    alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    width: width * 0.5,
    borderRadius: 6,
     marginLeft: '1%',
    //  padding:'0%'

  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.25,

  },
  mainStyele: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width * 0.9,
    marginVertical: '6%'

  },
  walletStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)'

  },
  walletStyle1: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: '5%'

  },
  fundStyle: {
    backgroundColor: '#768C5C',
    padding: '4.8%', borderRadius: 25,
    alignItems: 'center',
    width: width * 0.33,
  },
  loginWithGoogleViewIos: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '10%',
    width: width * 0.17,
    height: height * 0.08,
    alignSelf: 'center'
  },
  deStyle: { width: width * 0.2, alignSelf: 'center', alignItems: 'center' },
  depoStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: '12%'

  },
  viewStyle: {
    width: width,
    backgroundColor: '#2D2E36',
    height: 1.5,
    marginTop: '5%'


  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    alignItems: 'center',
    alignSelf: 'center',
    left: '2%',
    // marginLeft:'2%',
    right: 4
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  selectedTabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '80%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
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
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',

  },
  Text2: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '2%'

  },
  Text3: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: '2%'

  }

})