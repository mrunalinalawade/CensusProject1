import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import SpotAssets from './NavbarAssetsFlow/SpotAssets';
import FundingAssets from './NavbarAssetsFlow/FundingAssets';
import TradingAssets from './NavbarAssetsFlow/TradingAssets';


const { height, width } = Dimensions.get('window');
const Assets = (props) => {
  const [selectedTab, setSelectedTab] = useState('Overview');
  const tabs = ['Overview', 'Spot', 'Funding', 'Trading'];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={styles.mainviewStyle}>

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
        {selectedTab === 'Overview' && (<>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginTop: '2%' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Image source={IMAGEPATH.eye} style={{ width: 20, height: 20 }} />
              <Text style={styles.total}> Total Assets</Text>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: '10%' }}>
              <TouchableOpacity><Image source={IMAGEPATH.Frame1} style={{ width: 35, height: 35 }} /></TouchableOpacity>
              <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 35, height: 35, marginTop: '2%' }} /></TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
            <Text style={styles.selectedTabText1}>$150.83 </Text>
            <Text style={styles.total}>USDT </Text>
            <VECTOR_ICONS.AntDesign name={'down'} size={12} color={'#FFFFFF'} />
          </View>


          <Text style={styles.logintext1}>I don’t have crypto assets</Text>

          <TouchableOpacity onPress={() => { props.navigation.navigate('P2PMainPage') }} style={styles.flexStyle}>
            <Image source={IMAGEPATH.P2Puser} style={{ width: 32, height: 28 }} />
            <View style={{ marginVertical: '2.5%' }}>
              <Text style={styles.crptoStyle}>P2P Trading</Text>
              <Text style={styles.signStyle1}>Buy from users. Competitive prices. Local payments</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { props.navigation.navigate('BuywiithINR') }} style={[styles.flexStyle, { marginTop: '2%', }]}>
            <Image source={IMAGEPATH.BuyINR} style={{ width: 32, height: 33 }} />
            <View style={{ marginVertical: '2.5%' }}>
              <Text style={styles.crptoStyle}>Buy with INR</Text>
              <Text style={styles.signStyle1}>Buy from users. Competitive prices. Local payments</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.logintext1}>I have crypto assets</Text>
          <View style={[styles.flexStyle]}>
            <Image source={IMAGEPATH.P2Puser} style={{ width: 32, height: 28 }} />
            <View style={{ marginVertical: '2.5%', width: width * 0.7, }}>
              <Text style={styles.crptoStyle}>Deposit Crypto</Text>
              <Text style={styles.signStyle1}>Send crypto to your BitTrans account</Text>
            </View>
          </View>
        </>)
        }

        {selectedTab === 'Spot' && (<SpotAssets />)}
        {selectedTab === 'Funding' && (<FundingAssets />)}
        {selectedTab === 'Trading' && (<TradingAssets />)}









      </View>
    </SafeAreaView>
  )
}

export default Assets

const styles = StyleSheet.create({
  mainviewStyle: {
    width: width * 0.9,
    alignSelf: 'center',

  },
  selectedTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  selectedTabText1: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  underline: {
    marginTop: 4,
    height: 3,
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#768C5C',
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.68,
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: '0.5%',
    marginTop: '6%',
    backgroundColor: '#1C1D22',

    right: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  total: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: '2%'

  },
  flexStyle: {
    flexDirection: 'row',
    marginTop: '6%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    backgroundColor: '#2A2B2F',

    borderRadius: 5,
    padding: '4%',
    marginVertical: '3%'
  },
  signStyle1: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 18,
    marginTop: '2.5%',

  },
  crptoStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    // marginTop: '1%',

  },
  logintext1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '13%',

  },
})