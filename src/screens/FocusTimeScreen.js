import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Focus from '../features/Focus/Focus';
import Timer from '../features/Timer/Timer';
import { spacing } from '../utils/sizes'




const FocusTimeScreen = () => {
    const [focusSubject, setFocusSubject] = useState('Gardening')


    return (
        <View style={styles.container}>
            {focusSubject ?
                <Timer focusSubject={focusSubject} />
                :
                <Focus addSubject={setFocusSubject} />}
            <Text>{focusSubject}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
        backgroundColor: '#252250'
    }
})

export default FocusTimeScreen
