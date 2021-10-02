import React from 'react'
import {
    View
} from 'react-native'
import { TextButton } from '../../components'
import { FONTS, SIZES, COLORS } from '../../constants'


const Setting = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between'
                }}
            >
                <TextButton
                    label='Setting Page'
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                    onPress={() => navigation.navigate('UserDetail')}

                />
            </View>
        </View>
    )
}

export default Setting;