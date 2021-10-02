import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import { FormInput, TextButton, AuthLayout } from '../../components'
import { icons, FONTS, SIZES, COLORS } from '../../constants'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import dyaxios from './apiAuth'


const schema = yup.object().shape({
    email: yup.string().email().required().min(3).max(200)
})

const ForgotPassword = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema), mode: "onChange"
    })
    const [message, setMessage] = useState(null)
    
    const onSubmit = async (data) => {
        try {
            const response = await dyaxios.resetPassword(data)
            if (response) {
                navigation.navigate('SuccessPasswordReset');
            }

        } catch (error) { setMessage(error.response.data.message) }
    }

    return (
        <AuthLayout
            title="Reset your password"
            subtitle="Enter your user account's verified email address and we will send you a password reset link."
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}

            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.red,
                        marginTop: SIZES.base,
                        ...FONTS.body3
                    }}>
                    {message}
                </Text>
                {/* Form Inputs  */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Email"
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Email address'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMsg={errors.email?.message}
                            autoCorrect={false}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image
                                        source={errors?.email ? icons.cross : icons.correct}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: errors.email ? COLORS.red : COLORS.green
                                        }}
                                    />
                                </View>
                            }
                        />
                    )}
                    name="email"
                    defaultValue=""
                />

            </View>

            {/* Sign In */}
            <TextButton
                label="Send password reset email"
                disabled={!isValid}
                buttonContainerStyle={{
                    height: 50,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isValid ? COLORS.blue : COLORS.transparentBlue
                }}
                onPress={handleSubmit(onSubmit)}
            />
            {/* Sign Up */}
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                justifyContent: 'center'
            }}>
                <Text
                    style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}
                >
                    Already have an account ?
                </Text>

                <TextButton
                    label='Sign In'
                    buttonContainerStyle={{
                        marginLeft: 3,
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.blue,
                        ...FONTS.h3
                    }}
                    onPress={() => navigation.goBack()}

                />
            </View>
        </AuthLayout>
    )
}

export default ForgotPassword;