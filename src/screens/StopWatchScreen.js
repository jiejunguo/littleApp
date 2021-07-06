import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screen = Dimensions.get("window");
const ButtonWidth = screen.width / 3;

const StopWatchScreen = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [start, setStart] = useState(false);
  const [lap, setLap] = useState([]);

  const padToTwo = (n) => (n <= 9 ? `0${n}` : n);

  const isToggle = () => {
    setStart((n) => !n);
  };

  const isRecordLap = (min, sec, msec) => {
    console.log(lap);
    setLap([...lap, `${padToTwo(min)}: ${padToTwo(sec)}: ${padToTwo(msec)}`]);
  };

  useEffect(() => {
    let id = null;
    if (start) {
      id = setInterval(() => {
        if (msec !== 99) {
          setMsec((n) => n + 1);
        } else if (sec !== 59) {
          setMsec(0), setSec((n) => n + 1);
        } else {
          setSec(0), setMsec(0), setMin((n) => n + 1);
        }
      }, 1);
    } else if (!start && msec & sec & (min !== 0)) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [start, msec]);

  const isReset = () => {
    setMsec(0), setSec(0), setMin(0), setStart(false), setLap([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Stop Watch</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeNumber}>{padToTwo(min)}:</Text>
        <Text style={styles.timeNumber}>{padToTwo(sec)}:</Text>
        <Text style={styles.timeNumber}>{padToTwo(msec)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isReset();
          }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isToggle();
          }}
        >
          <Text style={styles.buttonText}>{start ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isRecordLap(min, sec, msec);
          }}
        >
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={lap}
          renderItem={({ item }) => (
            <Text style={styles.listText}>{`lap   ${item}`}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#73d7f0",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#73d7f0",
  },
  title: {
    marginTop: "10%",
    backgroundColor: "#73d7f0",
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    height: screen.width / 3,
  },
  timeContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    borderColor: "#7628bf",
    backgroundColor: "#299cd6",
    paddingLeft: "8%",
    paddingRight: "4%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
  },
  timeNumber: {
    fontSize: 40,
    color: "#fff",
    height: 50,
    width: 60,
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    backgroundColor: "#299cd6",
  },
  button: {
    backgroundColor: "#299cd6",
    width: screen.width / 3,
    height: ButtonWidth - 65,
    borderRadius: 2,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#73d7f0",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#fff",
  },
  listContainer: {
    marginTop: "10%",
    flex: 7,
    backgroundColor: "#73d7f0",
  },
  list: {
    backgroundColor: "#73d7f0",
    height: 80,
  },
  listText: {
    fontSize: 30,
    color: "#fff",
    backgroundColor: "#73d7f0",
    alignSelf: "center",
    height: 40,
  },
});

export default StopWatchScreen;
