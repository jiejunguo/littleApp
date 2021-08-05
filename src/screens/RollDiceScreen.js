import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground, KeyboardAvoidingView } from 'react-native'
import Dice from '../components/Dice'

const RollDiceScreen = () => {
    const [diceOne, setDiceOne] = useState(1);
    const [diceTwo, setDiceTwo] = useState(1);

    const roll = () => {
        const dice1 = Math.floor(Math.random() * 5 + 1)
        const dice2 = Math.floor(Math.random() * 5 + 1)
        setDiceOne(dice1)
        setDiceTwo(dice2)
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/image/rollDiceBG.jpeg')} />
            <View style={styles.diceContainer}>
                <Dice num={diceOne} /><Dice num={diceTwo} />
            </View>
            <Pressable style={styles.button} onPress={() => roll()}>
                <Text style={styles.buttonText}>Roll</Text>
            </Pressable>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'

    },
    diceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
    },
    button: {
        backgroundColor: '#eae2b7',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 30,
        color: 'white'
    }

})

export default RollDiceScreen
