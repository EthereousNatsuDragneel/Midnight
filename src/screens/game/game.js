import React, {useState,useCallback,useMemo,useEffect} from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
import useGame from './useGame'
function Game(props){const {QNum,time,set}=useGame(props)
return(<View style={{flex:1,backgroundColor:"navy",justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:70}}>{set}</Text>
<Text style={{fontSize:30,color:"yellow",textAlign:"center"}}>QUIZ</Text>
<Text style={{fontSize:30,color:"yellow",textAlign:"center"}}>{time}</Text>
<Text style={{textAlign:"center",color:"yellow"}}>Q{QNum}</Text>
<TouchableOpacity><Text style={{textAlign:"center",color:"yellow"}}>a. </Text></TouchableOpacity>
<TouchableOpacity><Text style={{textAlign:"center",color:"yellow"}}>b. </Text></TouchableOpacity>
<TouchableOpacity><Text style={{textAlign:"center",color:"yellow"}}>c. </Text></TouchableOpacity>
<TouchableOpacity><Text style={{textAlign:"center",color:"yellow"}}>d. </Text></TouchableOpacity>
</View>)}
export default Game