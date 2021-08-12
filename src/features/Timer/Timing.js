import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton'


export const Timing = ({ onChangeTime }) => {
    return (
        <>
            <View style={styles.timingButton}>
                <RoundedButton title={'10min'} size={75} onPress={() => onChangeTime(10)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton title={'15min'} size={75} onPress={() => onChangeTime(15)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton title={'20min'} size={75} onPress={() => onChangeTime(20)} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    }
})

