import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    BackHandler,
} from 'react-native';
import { TextButton } from '../../components'
import { FONTS, SIZES, COLORS } from '../../constants'
import SvgUri from 'react-native-svg-uri';
// import SuccessSvg from '../../../assets/icons/SuccessSvg.svg'

const SuccessPasswordReset = ({ navigation, name }) => {


    useEffect(() => {
        const backHandler = BackHandler.addEventListener
            ('hardwareBackPress', () => { return true })

        return backHandler.remove()
    }, [])

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white
        }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <SvgUri
                    resizeMode='contain'
                    width="130"
                    height="130"
                    marginVertical="10"
                    source={require('../../../assets/icons/success.svg')}
                />
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
                    Success
                </Text>
                <Text style={{ textAlign: 'center', marginTop: SIZES.base, ...FONTS.body3, color: SIZES.darkGray }}>
                    Email send successfully check your email address !
                </Text>
            </View>

            {/* Button */}
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding
                }}
            >
                <TextButton
                    label="Login"
                    buttonContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

        </View>
    );
};

export default SuccessPasswordReset;