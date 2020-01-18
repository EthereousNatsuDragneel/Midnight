import React, {Component} from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import useGame from './useGame'
function Game(props){const {tick,check,skip,skipColor,question}=useGame(props)
componentDidMount(){tick()}
return(<View style={{backgroundColor:"navy",flex:1,alignItems:"center",justifyContent:"center"}}>
<Text style={{fontSize:30,textAlign:"center",color:"yellow"}}>Question 1</Text>
<Text style={{textAlign:"center",color:"yellow"}}>Time: {timer} {"\n"}</Text>
<TouchableOpacity onPress={skip}><Text style={{textAlign:"center",color:skipColor}}>SKIP</Text></TouchableOpacity>
<Text style={{textAlign:"center",color:"yellow"}}>{question.Q}</Text>
<TouchableOpacity onPress={check(question.a.check)}><Text style={{textAlign:"center",color:"yellow"}}>{question.a.value}</Text></TouchableOpacity>
<TouchableOpacity onPress={check(question.b.check)}><Text style={{textAlign:"center",color:"yellow"}}>{question.b.value}</Text></TouchableOpacity>
<TouchableOpacity onPress={check(question.c.check}><Text style={{textAlign:"center",color:"yellow"}}>{question.c.value}</Text></TouchableOpacity>
<TouchableOpacity onPress={check(question.d.check)}><Text style={{textAlign:"center",color:"yellow"}}>{question.d.value}</Text></TouchableOpacity>
</View>)}
export default Game