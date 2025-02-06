import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'

const { user } = useUser();
console.log(user)
const [userAttendance, setUserAttendance] = useState([]);
useEffect(()=>{
  user&&getYourAttendance();
},[user])

const getYourAttendance = ()=> {
    GlobalApi.getAttendance(user?.primaryEmailAddress?.emailAddress).then(resp=>{
      console.log(resp)
    })
  }

function Attendance() {
  return (
    <div>

    </div>
  )
}

export default Attendance