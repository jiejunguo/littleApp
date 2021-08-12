import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Focus from '../features/Focus/Focus';
import FocusHistory from '../features/Focus/FocusHistory';
import Timer from '../features/Timer/Timer';
import { spacing } from '../utils/sizes';

const STATUSES = {
    COMPLETE: 1,
    CANCELLED: 2,
}

const FocusTimeScreen = () => {
    const [focusSubject, setFocusSubject] = useState(null)
    const [focusHistory, setFocusHistory] = useState([])

    const addFocusHistorySubjectWithState = (subject, status) => {
        setFocusHistory([...focusHistory, { key: String(focusHistory.length + 1), subject, status }])
    }

    const onClear = () => {
        setFocusHistory([])
    }

    const loadFocusHistory = async () => {
        try {
            const history = await AsyncStorage.getItem('focusHistory')
            if (history && JSON.parse(history).length) {
                setFocusHistory(JSON.parse(history))
            }
        } catch (e) {
            console.log(e)
        }
    }

    const saveFocusHistory = async () => {
        try {
            AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadFocusHistory()
    }, [])

    useEffect(() => {
        saveFocusHistory()
    }, [focusHistory])


    return (
        <View style={styles.container}>
            {focusSubject ?
                <Timer
                    focusSubject={focusSubject}
                    onTimerEnd={() => {
                        addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
                        setFocusSubject(null)
                    }}
                    clearSubject={() => {
                        addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED)
                        setFocusSubject(null)
                    }} />
                :
                <>

                    <Focus addSubject={setFocusSubject} />
                    <FocusHistory focusHistory={focusHistory} onClear={onClear} />
                </>
            }
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
