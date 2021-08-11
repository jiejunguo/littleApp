import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'



const CurrencyRow = ({ options, onSelect, value, onChangeText }) => {
    const countries = ["USD", "RMB", "AUD"]

    return (
        <View style={styles.container}>

            <TextInput style={styles.input} value={value} onChangeText={onChangeText} />

            <View>
                <SelectDropdown
                    defaultButtonText="EUR"
                    buttonStyle={{ height: 50, width: 200, margin: 10, borderRadius: 3 }}
                    buttonTextStyle={{}}
                    data={options}
                    onSelect={onSelect}
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
