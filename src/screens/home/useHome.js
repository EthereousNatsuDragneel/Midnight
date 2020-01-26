import {useState,useCallback,useMemo} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
function useHome({navigation}){const [user,setUser]=useState(null)
const [totalQ,setTotalQ]=useState(null)
const [qNow,setQNow]=useState(null)
var i=0
let j=0
const startFreeGame=useCallback(async ()=>{
const responseData=await firebaseHandle.getDBInstance("Questions").doc("set").get().then(function(documentSnapshot){
setTotalQ(documentSnapshot.data())})
const responseData2=await firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){setUser(doc.data())})})
/*while(i<10){let x=Math.floor(Math.random()*100)
if(x>50){x=x-50}
if(user.attempted!=[]){for(j=0;j<user.attempted.length;j++){
if(totalQ[x].Q==user.attempted[j]){break}}
if(j>=user.attempted.length){setQNow(qNow.concat(totalQ[x]))
i++}}
if(user.attempted==[]){setQNow(qNow.concat(totalQ[x]))
i++}
if(i>=10){i=0
break}}*/
navigation.navigate("Game",{set:totalQ})},[])
return{startFreeGame}}
export default useHome