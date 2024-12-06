import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Market = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState('Favorites');
  const tabs = ['Favorites', 'Market'];
  const [selected1, setSelected1] = useState('All');



  const filterData = [
    {
      id: 1,
      coin: 'BNB',
      cointype: 'USDT',
      meter: '181.44M',
      price: '597.94',
      price1: '$ 597.94',
      value: '-0.36%'


    },
    {
      id: 2,
      coin: 'BTC',
      cointype: 'USDT',
      meter: '3.08B',
      price: '75,957.37',
      price1: '$ 75,957.37',
      value: '+1.64%'

    },
    {
      id: 3,
      coin: 'ETH',
      cointype: 'USDT',
      meter: '1.73B',
      price: '2,913.39',
      price1: '$2,913.39',
      value: '+2.53%'

    }

  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={styles.mainviewStyle}>

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
              placeholder="Search coin pairs"
              style={{
                width: width * 0.62,
                color: 'rgba(255, 255, 255, 0.4)',
                marginLeft: '3%',
                fontSize: 12, fontWeight: '400',
                // backgroundColor:'red'
              }}
              placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <Image source={IMAGEPATH.marketsun} style={{ width: 25, height: 28 }} />
        </View>


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

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginVertical: '8%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.34, alignSelf: 'flex-start', }}>
            <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
              <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelected1('Spot') }}
              style={[styles.inputStyle1, { backgroundColor: selected1 === 'Spot' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
              <Text style={[styles.exStyle, selected1 === 'Spot' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Spot</Text></TouchableOpacity>
          </View>
          <Image source={IMAGEPATH.edittext} style={{ width: 20, height: 20, }} />

        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginTop: '3%', }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.29, justifyContent: 'space-between', }}>
            <Text style={styles.selectedTabText1}>Name</Text>
            <VECTOR_ICONS.FontAwesome5 name={'sort'} color={'#444858'} size={20} style={{ marginLeft: '3%' }} />
            <Text style={[styles.selectedTabText1, { marginLeft: '3%' }]}>/</Text>
            <Text style={[styles.selectedTabText1, { marginLeft: '3%' }]}>Vol</Text>
            <VECTOR_ICONS.FontAwesome5 name={'sort'} color={'#444858'} size={20} style={{ marginLeft: '3%' }} />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.46, justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.21, justifyContent: 'space-between' }}>
              <Text style={styles.selectedTabText1}>Last Price</Text>
              <VECTOR_ICONS.FontAwesome5 name={'sort'} color={'#444858'} size={20} style={{ marginLeft: '3%' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.2, justifyContent: 'space-between' }}>
              <Text style={styles.selectedTabText1}>24h chg%</Text>
              <VECTOR_ICONS.FontAwesome5 name={'sort'} color={'#444858'} size={20} style={{}} />

            </View>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          ListEmptyComponent={() => (
            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
              No Data Found
            </Text>
          )}
          renderItem={(item) => (


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginTop: '8%', }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.29, justifyContent: 'space-between', }}>
                  <Text style={styles.selectedTabText}>{item?.item?.coin}</Text>
                  <Text style={[styles.selectedTabText1, { marginLeft: '1%' }]}>/</Text>
                  <Text style={[styles.selectedTabText1, { marginLeft: '1%' }]}>{item?.item?.cointype}</Text>
                  <View style={{
                    alignItems: 'center',
                    padding: '5%',
                    borderRadius: 6,
                    backgroundColor: '#303139'
                  }}><Text style={styles.xStyle}>10x</Text>
                  </View>
                </View>
                <Text style={styles.mStyle}>{item?.item?.meter}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.46, justifyContent: 'space-between', }}>
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.21, justifyContent: 'space-between' }}>
                    <Text style={styles.selectedTabText}>{item?.item?.price}</Text>
                  </View>
                  <Text style={styles.mStyle}>{item?.item?.price1}</Text>
                </View>

                <TouchableOpacity style={{ alignItems: 'center', width: width * 0.25, backgroundColor: '#F6465D', padding: '8%', borderRadius: 7 }}>
                  <Text style={[styles.selectedTabText1, {
                    fontWeight: '600',
                    color: '#FFFFFF',
                  }]}>{item?.item?.value}</Text>

                </TouchableOpacity>
              </View>

            </View>
          )}
        />

      </View>
    </SafeAreaView>
  )
}

export default Market

const styles = StyleSheet.create({
  mainviewStyle: {
    width: width * 0.9,
    alignSelf: 'center',

  },
  InputViewFiled: {
    backgroundColor: "rgba(42, 43, 47, 1)",
    alignSelf: "center",
    flexDirection: "row",
    width: width * 0.78,
    borderRadius: 6, marginLeft: '1%'

  },
  selectedTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  selectedTabText1: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
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
    width: width * 0.35,
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: '0.5%',
    marginTop: '8%',
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
  inputStyle1: {
    alignItems: 'center',
    padding: '6%',
    borderRadius: 5,
    // width: width * 0.2,
  },
  exStyle: {
    fontSize: 12,
    fontWeight: '500',
    marginHorizontal: '8%'
  },
  xStyle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '400',
  },
  mStyle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    fontWeight: '400',
    marginTop: '6%',
    textAlign: 'left'
  }


})