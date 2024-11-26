import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cancelorder = (props) => {
  return (
    <View>
      <Text>Tips for order cancellation</Text>
      <Text>Due to buyer</Text>
      <Text>I do not want to trade anymore</Text>
      <Text>I do not meet the requirements of the advertiser’s tradingterms and condition</Text>
      <Text>There is technical or network error with the paymentplatform</Text>
      <Text>I have not paid but clicked ‘transferred’</Text>
      <Text>Other reasons</Text>
      <Text>Due to seller</Text>
      <Text>Seller is asking for extra fee</Text>
      <Text>Problem with seller’s payment method in unsuccessful payments</Text>
      <Text>Seller can not release the order due to network issue. The seller has refunded the amount</Text>
      <Text>Not response from the seller</Text>
      <Text>Seller’s payment account is invalid/frozen</Text>
      <Text>I have not paid the seller / have received seller’s refund</Text>
   
    </View>
  )
}

export default Cancelorder

const styles = StyleSheet.create({})