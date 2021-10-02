import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import {
    TextButton,
    Header,
    IconButton,
    FavoriteButton,
    CartQuantityButton
} from '../components'
import { FONTS, SIZES, COLORS, icons } from '../constants'


const StatusInfo = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <Header
                title="STATUS INFO"
                containerStyle={{
                    height: 50,
                    marginTop: 40,
                    marginHorizontal: SIZES.padding
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}

                    />
                }
            />
        )
    }

    const renderInfo = () => {
        return (
            <View style={{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding

            }}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}>
                    Estimetes
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        ...FONTS.h2
                    }}>21 sept 2021 - 11:30</Text>
            </View>
        )
    }

    const renderTrackOrder = () => {
        return (
            <View style={{
                marginTop: SIZES.padding,
                paddingVertical: SIZES.padding,
                borderRadius: SIZES.radius,
                borderWidth: 2,
                borderColor: COLORS.lightGray2,
                backgroundColor: COLORS.white2
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    paddingHorizontal: SIZES.padding
                }}>
                    <Text style={{ ...FONTS.h3 }}>Track Ooder</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.gray }}>DoualaCM</Text>
                </View>

            </View>

        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding
        }}>
            {/* Header */}
            {renderHeader()}

            {/* Info */}
            {renderInfo()}

            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                {renderTrackOrder()}
            </ScrollView>



            {/* Footer */}
            <View style={{
                flexDirection: 'row',
                height: 55,
                marginVertical: SIZES.padding
            }}>

                <TextButton
                    label="Cancel"
                    labelStyle={{
                        color: COLORS.blue,
                    }}
                    buttonContainerStyle={{
                        width: '40%',
                        borderRadius: SIZES.base,
                        backgroundColor: COLORS.lightGray2
                    }}
                    onPress={() => navigation.navigate('Home')}
                />

                <TextButton
                    label="Continue"
                    labelStyle={{
                        color: COLORS.white,
                        ...FONTS.h3
                    }}
                    buttonContainerStyle={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        borderRadius: SIZES.base,
                        backgroundColor: COLORS.blue

                    }}
                    icon={icons.correct}
                    iconPosition='LEFT'
                    iconStyle={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base,
                        tintColor: COLORS.white
                    }}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

export default StatusInfo;