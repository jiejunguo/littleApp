import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import CurrencyRow from '../components/CurrencyRow'

const CurrencyScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState()
    const [fromCurrencyAmount, setFromCurrencyAmount] = useState()
    const [toCurrencyAmount, setToCurrencyAmount] = useState()


    const getCurrencyRates = async () => {
        try {
            const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=b0080b1b0a0f67c29eb8e67a01b8f38b&format=1');
            const json = await response.json();
            setData(json.rates);
            const options = Object.keys(json.rates)
            setOptions(options)
            const baseCurrency = json.base
            setFromCurrency(fromCurrency)
            setToCurrency(fromCurrency)
            setFromCurrencyAmount("1")
            setToCurrencyAmount("1")
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCurrencyRates();
        console.log(fromCurrency, fromCurrencyAmount, toCurrency, toCurrencyAmount)
    }, [fromCurrencyAmount, toCurrencyAmount, fromCurrency, toCurrency]);


    const fromCurrencyChangge = (input) => {
        setFromCurrencyAmount(input)
    }



    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Currency</Text>
                    </View>
                    <CurrencyRow
                        onChangeText={text => fromCurrencyChangge(text)}
                        value={fromCurrencyAmount}
                        options={options}
                        onSelect={(selectedItem) => {
                            setFromCurrency(selectedItem)
                        }} />
                    <Text style={styles.text}>=</Text>
                    <CurrencyRow
                        value={toCurrencyAmount}
                        options={options}
                        onSelect={(selectedItem) => {
                            setToCurrency(selectedItem)
                        }} />
                </View>
            )}

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
