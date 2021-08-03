import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const Dice = ({ num }) => {
    const showDice = (num) => {
        switch (num) {
            case 1:
                return <FontAwesome5 name="dice-one" style={styles.dice} />;
                break
            case 2:
                return <FontAwesome5 name="dice-two" style={styles.dice} />
            case 3:
                return <FontAwesome5 name="dice-three" style={styles.dice} />
            case 4:
                return < FontAwesome5 name="dice-four" style={styles.dice} />
            case 5:
                return <FontAwesome5 name="dice-five" style={styles.dice} />
            case 6:
                return <FontAwesome5 name="dice-six" style={styles.dice} />
        }
    }
    return (
        <View>
            {showDice(num)}
        </View>
    )
}

const styles = StyleSheet.create({
    dice: {
        fontSize: 100,
        color: 'white',
        padding: 10
    }

})

export default Dice
