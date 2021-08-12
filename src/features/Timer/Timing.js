import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton'


export const Timing = ({ onChangeTime }) => {
    return (
        <>
            <View style={styles.timingButton}>
                <RoundedButton title={'5min'} size={90} onPress={() => onChangeTime(5)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton title={'10min'} size={90} onPress={() => onChangeTime(10)} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton title={'30min'} size={90} onPress={() => onChangeTime(30)} />
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

