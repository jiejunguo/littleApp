import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const StopWatchContainer = () => {
    const[min, setMin] =useState(0)
    const[sec, setSec] =useState(0)
    const[msec, setMsec] =useState(0)
    const[start, setStart] = useState(false)
    
    const padToTwo = (n) => n <= 9 ?`0${n}`:n

    const isToggle =()=>{
            setStart(n=>!n)
            
    }

    useEffect(() => {
        let id = null;
        if(start){
            id = setInterval(() => {
                if (msec !== 99){
                    setMsec(n => n + 1)
                } else if (sec !==59) {
                    setMsec(0),
                    setSec(n => n+1)
                } else {
                    setSec(0),
                    setMsec(0),
                    setMin(n => n+1)
                }
                      }, 1);
        } else if (!start && msec&sec&min!==0) {
          clearInterval(id);
        }
        return () => clearInterval(id);
      }, [start, msec]);

   
        
    const isReset =()=>{
        console.log(start)
        setMsec(0),
        setSec(0),
        setMin(0),
        setStart(false)
    }


    return (
      <View style={styles.container}>
          <Text style={styles.title}>Stop Watch</Text>
          <View style={styles.timeContainer}>
          <Text style={styles.timeNumber}>{padToTwo(min)}:</Text>
          <Text style={styles.timeNumber}>{padToTwo(sec)}:</Text>
          <Text style={styles.timeNumber}>{padToTwo(msec)}</Text>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>{isReset()}}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{isToggle()}}><Text style={styles.buttonText}>{start ? 'Pause' : 'Start'}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
          </View>
       
      </View>
    )
}
  
  const styles = StyleSheet.create({
      title:{
        marginTop:"10%",
        backgroundColor:"#214B71",
        color:"#CFAA69",
        fontSize:30,
        alignSelf:"center"
      },
    container:{
        backgroundColor:"#214B71",
        display:"flex",
        justifyContent:"space-around"
    },
    timeContainer:{  
        display:"flex",
        flexDirection:"row",
        marginTop:"10%",
        borderWidth:2,
        borderRadius: 10,
        borderColor:"#CFAA69",
        backgroundColor:"#214B71",
        paddingLeft:"8%",
        paddingRight:"8%",
        paddingTop:".5%",
        paddingBottom:".5%",
        alignSelf:"center"
      },
    timeNumber:{
        fontSize:40,
        color:"#CFAA69",
        height:50,
        width:60
    },
    buttonContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      marginTop:"10%",
      backgroundColor:"#214B71",
    },
    button: {
      backgroundColor:"#214B71",
      paddingTop:"5%",
      paddingBottom:"5%",
      paddingLeft:"5%",
      paddingRight:"5%",
      height:60,
      display:"flex",
    },
    buttonText:{
        alignSelf:"center",
        fontSize:20,
        color:"#CFAA69"
    }
  
  });
  
  export default StopWatchContainer;