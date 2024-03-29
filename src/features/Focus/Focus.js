import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton"


const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    What would you like to focus on?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ flex: 1, marginRight: 20 }}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                    />
                    <RoundedButton
                        size={50}
                        title={'+'}
                        onPress={() => addSubject(subject)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 0.4,
    },
    titleContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'

    },
    inputContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }

})

export default Focus
