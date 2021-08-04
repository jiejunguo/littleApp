import React, { useState } from 'react'
import { View, TextInput, StyleSheet, } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


const CurrencyRow = () => {
    const countries = ["USD", "RMB", "AUD"]
    return (
        <View style={styles.container}>
            <TextInput maxFontSizeMultiplier="number" style={styles.input} />
            <View style={styles.options}>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />

            </View>



        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        width: 150,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    options: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10

    }
})

export default CurrencyRow
