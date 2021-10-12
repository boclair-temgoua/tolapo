import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import { Header, IconButton, TextButton } from '../../components'
import { FONTS, SIZES, COLORS, icons } from '../../constants'


const ChangePassword = ({ navigation }) => {
    const renderHeader = () => {
        return (
            <Header
                title="CHANGE PASSWORD"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />

                }
            />
        )
    }
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white
        }}>
            {/* Header */}
            {renderHeader()}


            {/* Info */}


            {/* Footer */}
        </View>
    )
}

export default ChangePassword;