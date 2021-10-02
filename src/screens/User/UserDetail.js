import React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'
import {
    Header,
    IconButton,
    FavoriteButton,
    CartQuantityButton
} from '../../components'
import { FONTS, SIZES, COLORS, icons } from '../../constants'


const UserDetail = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <Header
                title="DETAIL USER"
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

                rightComponent={
                    <CartQuantityButton
                        icon={icons.cart}
                        quantity={2}
                        onPress={() => navigation.goBack()}
                    />
                }
            />
        )
    }
    const renderHeaderDetails = () => {
        return (
            <View style={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding,
                paddingHorizontal: SIZES.padding,

            }}>
                {/* Section */}
                <View style={{
                    height: 200,
                    borderRadius: 15,
                    backgroundColor: COLORS.lightGray2
                }}>
                    {/* Calories & Favorite */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.radius,
                    }}>
                        {/* Calories */}
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text
                                style={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.body4
                                }}
                            >
                                23 calories
                            </Text>
                        </View>

                        {/* Favorites */}
                        <FavoriteButton
                            icon={icons.love}
                            iconStyle={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.gray2,
                            }}
                            onPress={() => console.log('Favorite Ok')}
                        />

                    </View>

                    {/* Image show */}
                    <Image
                        source={icons.love}
                        resizeMode='contain'
                        style={{
                            height: 170,
                            width: '100%',
                        }}
                    />
                </View>  

                {/* Food info section */}
                <View style={{
                    marginTop: SIZES.padding
                }}>
                    {/* Name & Description */}
                    <Text style={{
                         ...FONTS.h2 
                    }}>
                        Information name
                    </Text>

                    <Text style={{
                         marginTop:SIZES.base,
                         color:COLORS.darkGray,
                         textAlign: 'justify',
                         ...FONTS.body4
                    }}>
                        long test de l,information de la table merde nous sommes nous ous la demander
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}>

            {/* Header */}
            {renderHeader()}

            {/* Body */}
            {renderHeaderDetails()}
            

            {/* Footer */}

        </View>
    )
}

export default UserDetail;