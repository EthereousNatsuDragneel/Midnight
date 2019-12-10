import React, {useState,useCallback} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
function Store(){
return(<View style={{backgroundColor:"navy",flex:1,alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"yellow",fontSize:30,textAlign:"center"}}>STORE</Text>
<Text style={{color:"yellow",textAlign:"center"}}>You can buy lifelines that can help you during the game. You can only use a lifeline once in one game. For example, you can buy two Double Dips, but you cannot use them both in the same game. But you can use one Double Dip and one 50 50 in the same game</Text>
<TouchableOpacity><Text style={{color:"yellow",fontSize:15,textAlign:"center"}}>Go With the Crowd, Rs. 15</Text></TouchableOpacity>
<Text style={{color:"yellow"}}>Go With the Crowd will automatically tick the option that was chosen by most number of players, and averages the time taken by all other players</Text>
<TouchableOpacity><Text style={{color:"yellow",fontSize:15,textAlign:"center"}}>Double Dip, Rs. 15</Text></TouchableOpacity>
<Text style={{color:"yellow"}}>Double Dip allows the player to choose two options and if either of them is the correct answer, the player gets the point for answering the question correctly. Time taken is calculated as the average of the time taken to select both the options</Text>
<TouchableOpacity><Text style={{color:"yellow",fontSize:15,textAlign:"center"}}>50 50, Rs. 15</Text></TouchableOpacity>
<Text style={{color:"yellow"}}>50 50 removes two incorrect answer choices for a question, leaving the correct answer and an incorrect answer. Time taken to answer a question in which 50 50 was used is registered normally</Text>
</View>)}
export default Store