import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screen = Dimensions.get("window");
const ButtonWidth = screen.width / 3;

const StopWatchScreen = () => {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(0);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const [start, setStart] = useState(false);
  const [lap, setLap] = useState([]);

  const formatMillis = (mil) => {
    const newMil = Math.floor((mil % 1000) / 10);
    return formatTime(newMil);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const isRecordLap = (min, sec, msec) => {
    setLap([
      ...lap,
      `${formatTime(min)}: ${formatTime(sec)}: ${formatMillis(msec)}`,
    ]);
  };

  const count = () => {
    setMillis((time) => {
      const timeNew = time + 10;
      return timeNew;
    });
  };

  useEffect(() => {
    if (start) {
      interval.current = setInterval(count, 10);
    } else if (!start && interval.current) {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [start, millis]);

  const isToggle = () => {
    setStart((n) => !n);
  };

  const isReset = () => {
    setMillis(0), setStart(false), setLap([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Stop Watch</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeNumber}>{formatTime(minute)}:</Text>
        <Text style={styles.timeNumber}>{formatTime(seconds)}:</Text>
        <Text style={styles.timeNumber}>{formatMillis(millis)}</Text>
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
            isRecordLap(minute, seconds, millis);
          }}
        >
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={lap}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.listText, marginLeft: 20 }}>{`lap ${
                index + 1
              }`}</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
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
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    height: 40,
    flex: 1,
  },
});

export default StopWatchScreen;
