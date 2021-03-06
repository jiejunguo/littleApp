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
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => this.handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.handleTap("operator", "/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => this.handleTap("number", 7)} />
          <Button text="8" onPress={() => this.handleTap("number", 8)} />
          <Button text="9" onPress={() => this.handleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>
        <Row>
          <Button text="4" onPress={() => this.handleTap("number", 4)} />
          <Button text="5" onPress={() => this.handleTap("number", 5)} />
          <Button text="6" onPress={() => this.handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.handleTap("operator", "-")}
          />
        </Row>
        <Row>
          <Button text="1" onPress={() => this.handleTap("number", 1)} />
          <Button text="2" onPress={() => this.handleTap("number", 2)} />
          <Button text="3" onPress={() => this.handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => this.handleTap("number", ".")} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
          />
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e4375",
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
