import React from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { fontSizes, spacing } from '../../utils/sizes'
import { RoundedButton } from '../../components/RoundedButton'
import { colors } from '../../utils/colors'


const HistoryItem = ({ item, index }) => {
    console.log(item);
    return (
        <Text style={styles.historyItem(item.status)}>
            {/* {JSON.stringify(item)} */}
            {item.subject}
        </Text>
    )
}

const FocusHistory = ({ focusHistory, onClear }) => {

    return (
        <>
            <SafeAreaView style={{ flex: 0.4, alignItems: 'center' }}>
                {!!focusHistory.length &&
                    <>
                        <Text style={styles.title}>Things we've focused on</Text>
                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                    </>
                }
            </SafeAreaView>
            <View style={styles.clearContainer}>
                <RoundedButton size={75} title={'Clear'} onPress={() => onClear()} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.lg
    }),
    title: {
        color: colors.white,
        fontSize: fontSizes.lg
    },
    clearContainer: {
        padding: spacing.md,
        alignItems: 'center',
        flex: 0.2
    }
})

export default FocusHistory
