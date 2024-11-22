import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const BackimageofID = (props) => {

    const [progressStep, setProgressStep] = useState(1);

    const handleNext = () => {
        if (progressStep < 3) setProgressStep(progressStep + 1);
        // props.navigation.navigate('BackimageofID')
    };

    const handlePrevious = () => {
        if (progressStep > 1) setProgressStep(progressStep - 1);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    camera={true}
                    navigate={() => props.navigation.goBack()}

                />



                <View style={styles.container}>
                    {/* Stepper */}
                    <View style={styles.stepperContainer}>
                        {/* Step 1 */}
                        <View style={styles.stepContainer}>
                            <View
                                style={[
                                    styles.circle,
                                    progressStep >= 1 && styles.activeCircle,
                                ]}
                            >
                                <Text style={styles.stepText}>1</Text>
                            </View>
                            <View
                                style={[
                                    styles.line,
                                    progressStep >= 2 && styles.activeLine,
                                ]}
                            />
                        </View>

                        {/* Step 2 */}
                        <View style={styles.stepContainer}>
                            <View
                                style={[
                                    styles.circle,
                                    progressStep >= 2 && styles.activeCircle,
                                ]}
                            >
                                <Text style={styles.stepText}>2</Text>
                            </View>
                            <View
                                style={[
                                    styles.line,
                                    progressStep === 3 && styles.activeLine,
                                ]}
                            />
                        </View>

                        {/* Step 3 */}
                        <View>
                            <View
                                style={[
                                    styles.circle,
                                    progressStep === 3 && styles.activeCircle,
                                ]}
                            >
                                <Text style={styles.stepText}>3</Text>
                            </View>
                        </View>
                    </View>

                    {/* Buttons */}
                    {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    // </View> */}
    </View>
















                </View>
                <Text style={styles.textStylr}>Take photo of the back of your identity document</Text>
                <View style={[styles.viewStyle, { marginTop: '10%' }]}></View>
                <View style={{ backgroundColor: '#23242A', width: width, height: height * 0.4, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '600', fontSize: 12, color: '#717381' }} >CAM AREA</Text></View>
                <View style={[styles.viewStyle]}></View>
                <TouchableOpacity onPress={() => { handleNext() }}>
                    <Image source={IMAGEPATH.Cameraball} style={{ width: 70, height: 70, alignSelf: 'center', marginTop: '20%' }} />

                </TouchableOpacity>



        </SafeAreaView>
    )
}

export default BackimageofID

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    textStylr: {
        color: '#FFFFFF',
        width: width * 0.9,
        fontSize: 20,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: '14%',
        textAlign: 'center',
        lineHeight: 29
    },
    viewStyle: {
        width: width,
        backgroundColor: '#FFFFFF',
        height: 1.5,



    },

    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#121212",
    },
    stepperContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width:width*0.9,
        marginTop:'15%'
        // marginBottom: 50,
    },
    stepContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 15,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    activeCircle: {
        backgroundColor: "rgba(118, 140, 92, 1)",
    },
    stepText: {
        color: "white",
        fontSize: 16,
    },
    line: {
        width: 78,
        height: 2,
        backgroundColor: "gray",
        marginLeft:'10%',
    },
    activeLine: {
        backgroundColor: "rgba(118, 140, 92, 1)",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        backgroundColor: "rgba(118, 140, 92, 1)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
})