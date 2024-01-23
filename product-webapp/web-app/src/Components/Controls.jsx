import MeetingButton from "./MeetingButton";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ChatIcon from '@mui/icons-material/Chat';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Controls = ({meetingSession , open , setOpen}) => {

  const navigate = useNavigate()

  console.log({open})
  const [micOn, setMicOn] = useState(open.micOn);
  const [webcamOn, setWebcamOn] = useState(open.webcamOn);
  const [screenShareRef, setScreenShareRef] = useState(Boolean(open.screenShareRef));

  const MeetingButtons = [
    {
      on: micOn,
      onIcon: <MicIcon />,
      offIcon: <MicOffIcon />,
      onClick: () => { console.log("Mic Meeting"); setMicOn(!micOn); meetingSession.toggleMic() } 
    },
    {
      on: webcamOn,
      onIcon: <VideocamIcon />,
      offIcon: <VideocamOffIcon />,
      onClick: () => { console.log("WebCam Meeting"); setWebcamOn(!webcamOn); meetingSession.toggleWebcam() }  
    },
    {
      on: screenShareRef,
      onIcon: <ScreenShareIcon />,
      offIcon: <StopScreenShareIcon />,
      onClick: () => { console.log("Scrren Meeting"); setScreenShareRef(!screenShareRef); meetingSession.toggleScreenShare() }
    },
    // {
    //   on: true,
    //   onIcon: <FiberSmartRecordIcon />,
    //   offIcon: <FiberManualRecordIcon />,
    //   onClick: () => {
    //     console.log("Scrren Record");
    //   },
    // },
    {
      on: open.open,
      onIcon: <MarkUnreadChatAltIcon />,
      offIcon: <ChatIcon />,
      onClick: () => {
        setOpen(!open.open)
      },
    },
    {
      on: true,
      onIcon: <CallEndIcon />,
      offIcon: <CallEndIcon />,
      onClick: () => { console.log("Leave Meeting"); meetingSession.leave(); navigate('/mycourse'); }
    },
    
  ];
  console.log("meetingSession==>" , meetingSession)
  return (
    <div style={{ display: "flex" , flexDirection:"row" , alignContent:"space-around" , justifyContent:"space-around", width:"100%", margin:"0px 25% 0px 25%" }}>
     {MeetingButtons.map((meetingButton) => {
          const { onIcon, offIcon, on, onClick } = meetingButton;
          return (
            <MeetingButton
              on={on}
              onIcon={onIcon}
              offIcon={offIcon}
              onClick={onClick}
            />
          );
        })}
    </div>
  );
};

export default Controls;
