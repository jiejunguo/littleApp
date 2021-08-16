import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Row from "../components/Row";


function ToolsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Little Tools</Text>
            </View>
            <View style={styles.rowContainer}>
                <Row>
                    <AppButton
                        text="Stop Watch"
                        onPress={() => navigation.navigate("StopWatch")}
                    />
                    <AppButton
                        text="Calculator"
                        onPress={() => navigation.navigate("Calculator")}
                    />
                </Row>
                <Row>
                    <AppButton text="Counter" onPress={() => navigation.navigate("Counter")} />
                    <AppButton text="Counter2" onPress={() => navigation.navigate("CounterTwo")} />

                </Row>
                <Row>
                    <AppButton text="Focus Time" onPress={() => navigation.navigate("FocusTime")} />

                </Row>
                <Row>

                </Row>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#14213d",
    },
    headerContainer: {
        backgroundColor: "#14213d",
        flex: 1,
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        alignSelf: "center",
        color: "#e5e5e5",
    },
    rowContainer: {
        flex: 5,
    }
});

export default ToolsScreen;
