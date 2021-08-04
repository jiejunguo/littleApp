import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CurrencyRow from '../components/CurrencyRow'

const CurrencyScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Currency</Text>
            </View>
            <CurrencyRow />
            <Text style={styles.text}>=</Text>
            <CurrencyRow />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black'
    },
    titleContainer: {},
    title: {
        fontSize: 30,
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        marginLeft: 30
    }

})

export default CurrencyScreen
