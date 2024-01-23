import { useMeeting } from "@videosdk.live/react-sdk";
import Participant from "../Components/Participant"

const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

const Participants = ({setScreenShareRef}) => {

  const {participants } = useMeeting()

  return ( <>
  {chunk([...participants.keys()]).map((k) => {
        return k.map((l) =>  {
            return <Participant key={l} participantId={l} setScreenShareRef={setScreenShareRef}/>            
          })
       
      })}
  </>
  )

}

export default Participants;

