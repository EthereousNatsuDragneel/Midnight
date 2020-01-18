import React, { Component } from "react";
import {TouchableOpacity,View, Text } from "react-native";
import useHome from './useHome'
function Home(props){const {startFreeGame}=useHome(props)
const rulesContent="1. The quiz comprises of 10 questions based on recent events \n 2. You have 15 seconds to each question \n 3. If you answer a question correctly, you score points for yourself \n 4. If a question is answered incorrectly or all the time runs out before you answer, you lose points \n 5. You can only skip one question a quiz, you won't get any points for skipping, but you won't lose any either \n 6. If you choose to use a lifeline to answer a question correctly, you gain points, but less than that you would have gained without using a lifeline \n That's all!"
const rules="RULES"
const lb="LEADERBOARD"
const lbContent="Empty"
const [heading,setHeading]=useState(rules)
const [content,setContent]=useState(rulesContent)
const Toggle=useCallback(()=>{if(rules=="RULES"){
setHeading(lb)
setContent(lbContent)}
else{setHeading(rules)
setContent(rulesContent)}},[])
return(<View style={{backgroundColor:"navy",flex:1,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:30,color:"yellow",textAlign:"center"}}>QUIZ</Text>
<TouchableOpacity onPress={startFreeGame}><Text style={{color:"yellow"}}>Start Free Game</Text></TouchableOpacity>
<Text style={{fontSize:30,color:"yellow",textAlign:"center"}}>{"\n \n \n"}{heading}</Text>
<TouchableOpacity onPress={Toggle}><Text style={{color:"yellow"}}>Rules/Leaderboard</Text></TouchableOpacity>
<Text style={{color:"yellow"}}>{content}</Text>
</View>)}
export default Home