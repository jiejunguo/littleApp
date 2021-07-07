import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Row from "../components/Row";
import AppButton from "../components/AppButton";


const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        case 'reset':
            return { ...state, count: action.payload }
        default:
            return state;
    }
};


const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const [number, setNumber] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.screenText}>Current Count: {state.count}</Text>
            </View >

            <View style={styles.rowContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={number => setNumber(number)}
                    value={number}
                    placeholder="Reset Number" />

                <Row>

                    <AppButton
                        text="Reset"
                        onPress={() => {
                            dispatch({ type: 'reset', payload: number })
                        }}
                    />

                </Row>
                <Row>
                    <AppButton
                        text="-"
                        onPress={() => {
                            dispatch({ type: 'decrement', payload: 1 });
                        }}
                    />
                    <AppButton
                        text="+"
                        onPress={() => {
                            dispatch({ type: 'increment', payload: 1 });
                        }}
                    />
                </Row>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#14213d",
    },
    input: {
        backgroundColor: "#fca311",
        borderRadius: 5,
        borderColor: "#e5e5e5",
        borderWidth: 1,
        height: 60,
    },
    screen: {
        backgroundColor: "#14213d",
        flex: 2,
        justifyContent: "center",
    },
    screenText: {
        justifyContent: "center",
        color: "#e5e5e5",
        fontSize: 40,
        alignSelf: "center"
    },
    headerText: {
        fontSize: 30,
        alignSelf: "center",
        color: "#e5e5e5",
    },
    rowContainer: {
        flex: 5,
    },

})



export default CounterScreen;
