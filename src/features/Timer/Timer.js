import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { spacing, fontSizes } from '../../utils/sizes'
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from "../../components/RoundedButton";

const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown isPaused={!isStarted} />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.buttonWapper}>
                {isStarted ? <RoundedButton title="pause" onPress={() => setIsStarted(false)} /> :
                    <RoundedButton title="start" onPress={() => setIsStarted(true)} />}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: colors.white,
        textAlign: "center"
    },
    task: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonWapper: {
        flex: 0.3,
        alignItems: 'center',
        paddingTop: spacing.xxl
    }
})

export default Timer
