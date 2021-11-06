import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Row from "../components/Row";
import Button from "../components/CalculatorButton";

const CalculatorScreen = () => {
  const [currVal, setCurrVal] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);

  handleTap = (type, value) => {
    if (type === "number") {
      if (currVal === "0") {
        setCurrVal(`${value}`);
      } else setCurrVal(`${currVal}${value}`);
    }
    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("0");
    }
    if (type === "clear") {
      setCurrVal("0");
      setOperator(null);
      setPrevVal(null);
    }
    if (type === "posneg") {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }
    if (type === "percentage") {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }
    if (type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === "+") {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
      }
      if (operator === "/") {
        setCurrVal(previous / current);
        setOperator(null);
        setPrevVal(null);
      }
      if (operator === "-") {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
      }
      if (operator === "*") {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{currVal}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Row type="yes">
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>
        <Row type="yes">
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>
        <Row type="yes">
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>
        <Row type="yes">
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap("number", 0)}
          />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="=" theme="accent" onPress={() => handleTap("equal")} />
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  textContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    textAlign: "right",
    fontSize: 40,
    marginRight: 20,
  },
  buttonContainer: {
    flex: 5,
  },
});

export default CalculatorScreen;
