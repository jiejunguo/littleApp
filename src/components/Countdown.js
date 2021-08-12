import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { spacing, fontSizes } from '../utils/sizes'

const minutesToMillis = (min) => min * 1000 * 60
const formatTime = (time) => time < 10 ? `0${time}` : time

export const Countdown = ({
    minutes,
    isPaused,
    onProgress,
    onEnd
}) => {
    const interval = React.useRef(null)
    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                // do more stuff here
                clearInterval(interval.current)

                return time
            }
            const timeLeft = time - 1000;
            // below will cause render external item from internal
            // onProgress(timeLeft / minutesToMillis(minutes))
            return timeLeft
        })
    }

    useEffect(() => {
        onProgress(millis / minutesToMillis(minutes))
        if (millis === 0) {
            onEnd()
        }
    }, [millis])

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    }, [minutes])



    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current)
            return
        }
        //every second run countDown to subtract a second
        interval.current = setInterval(countDown, 1000)
        return () => clearInterval(interval.current)
    }, [isPaused])
    const [millis, setMillis] = useState(minutesToMillis(minutes))
    const minute = Math.floor(millis / 1000 / 60) % 60
    const seconds = Math.floor(millis / 1000) % 60
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(94, 132, 226, 0.1)',
        borderRadius: 10,
    },
    text: {
        fontSize: fontSizes.xxxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,

    }
})

