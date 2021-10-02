import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    BackHandler,
} from 'react-native';
import { TextButton } from '../../components'
import { FONTS, SIZES, COLORS } from '../../constants'

const SuccessPage = ({ navigation, name }) => {


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
                <Image
                    source={require('../../../assets/icons/success.png')}
                    resizeMode='contain'
                    style={{
                        height: 130,
                        width: 130,
                        marginVertical: 10
                    }}
                />
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
                    Success
                </Text>
                <Text style={{ textAlign: 'center', marginTop: SIZES.base, ...FONTS.body3, color: SIZES.darkGray }}>
                    Email send successfully check your email address !
                </Text>
            </View>

            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding
                }}
            >
                <TextButton
                    label="Back to Home"
                    buttonContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

        </View>
    );
};

export default SuccessPage;