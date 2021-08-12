import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { colors } from '../../utils/colors'
import { spacing, fontSizes } from '../../utils/sizes'
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";

const Timer = ({ focusSubject }) => {
    const [minutes, setMinutes] = useState(1)
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)

    const updateProgress = (progress) => {
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(min)
        setProgress(1)
        setIsStarted(false)
    }



    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={updateProgress} />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <ProgressBar progress={progress} color='#5E84E2' style={{ height: 10 }} />
            </View>
            <View style={styles.buttonWapper}>
                <Timing onChangeTime={changeTime} />
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
        flexDirection: 'row',
        flex: 0.3,
        padding: spacing.xxl,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Timer
