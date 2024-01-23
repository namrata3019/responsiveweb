import {
  Card,
  Avatar,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ToggleIcon from "material-ui-toggle-icon";
import { useParticipant } from "@videosdk.live/react-sdk";
import { useMemo } from "react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export const Participant = ({ participantId, setScreenShareRef }) => {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const onStreamEnabled = (stream) => {
    if (stream.kind === "share") {
      console.log("share", { stream });
    }
  };
  const onStreamDisabled = (stream) => {
    console.log(" disable share", { stream });
    if (stream.kind === "share") {
      setScreenShareRef(null);
    }
  };

  const {
    displayName,
    participant,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
    isLocal,
    isActiveSpeaker,
    isMainParticipant,
    switchTo,
    pinState,
    setQuality,
    setViewPort,
    enableMic,
    disableMic,
    enableWebcam,
    disableWebcam,
    pin,
    unpin,
  } = useParticipant(participantId, {
    onStreamEnabled,
    onStreamDisabled,
  });

  useEffect(() => {
    webcamOn && setQuality("high");
  }, [webcamStream, webcamOn]);

  const webcamMediaStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  const screenShareMediaStream = useMemo(() => {
    if (screenShareOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      setScreenShareRef(mediaStream);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) => console.error("mic  play() failed", error));
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);
  console.log(webcamMediaStream, webcamOn);
  return (
    <Card
      item
      xs={12}
      md={6}
      variant="outlined"
      elevation={8}
      style={{
        border: "0px solid green",
        background: "white",
        height: "50%",
        width: "33%",
        borderRadius: "20px",
        minHeight: "50px",
        backgroundColor: "rgb(56 57 60)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirecton: "row",
          justifyContent: "space-around",
          height: "10%",
          marginTop: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirecton: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "55px",
            minWidth: "150px",
            backdropFilter: "blur(2.5px)",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ fontWeight: "500", color: "#FFFF" }}>{displayName}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirecton: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5.25rem",
            minWidth: "50px",
            backdropFilter: "blur(2.5px)",
            background: "rgba(0,0,0,0.3)",
        }}
        >
          <ToggleIcon
            style={{ color: "white" }}
            on={micOn}
            onIcon={<MicIcon />}
            offIcon={<MicOffIcon />}
          />
        </div>
      </div>
      {!webcamOn ? (
        <Card
          style={{
            height: "90%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(56 57 60)",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "red",
              height: "80px",
              width: "80px",
              fontSize: "45px",
            }}
          >
            {displayName[0].toUpperCase()}
          </Avatar>
        </Card>
      ) : (
        <div
          item
          justifyContent={"center"}
          alignContent="center"
          style={{ height: "90%", width: "100%" }}
        >
          <ReactPlayer
            ref={webcamRef}
            //
            playsinline // very very imp prop
            playIcon={<></>}
            //
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={webcamMediaStream}
            //
            height={"100%"}
            width={"100%"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        </div>
      )}
    </Card>
  );
};

export default Participant;

/*
<div
        style={{
        width: "100%",
        height: "100vh",
        padding: 8,
        display: "flex",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"space-around",
        backgroundColor:"#1F2335"
      }}
      >
        
        {[1].map(() => <Card variant="outlined" elevation={8} style={{border:"0px solid green" , background:"white", height:"50%" , width:"33%", borderRadius:"20px" , minWidth:"50%", minHeight:"50px", backgroundColor:"rgb(56 57 60)"}}>
                <div style={{zIndex:1 ,display:"flex", flexDirecton:"row" , justifyContent:"space-around", height:"10%", marginTop:"4px"}}>
                    <div style={{display:"flex", flexDirecton:"row", justifyContent:"center" ,alignItems:"center" , borderRadius:"55px" , width:"113px" , backdropFilter:"blur(2.5px)" , background:"rgba(0,0,0,0.3)"}}>
                        <div style={{fontWeight:"500" , color:"#FFFF"}}>Kunal</div>
                    </div>
                    <div style={{display:"flex", flexDirecton:"row", justifyContent:"center" ,alignItems:"center" , borderRadius:"5.25rem" , width:"50px" , backdropFilter:"blur(2.5px)" , background:"red"}}>
                    <ToggleIcon
                    style={{ color : "white"}}
                    on={true}
                    onIcon={<MicIcon />}
                    offIcon={<MicOffIcon />}
          />
                    </div>
                </div>
                { true ? <Card style={{ height:"100%" , width:"100%" , display:"flex" , justifyContent:"center" ,alignItems:"center", backgroundColor:"rgb(56 57 60)" }}>
                <Avatar sx={{ bgcolor: "red", height:"80px", width:"80px", fontSize:"45px" }}>N</Avatar>
                </Card> : <video
                src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
                height="100%"
                width="100%"
                style={{ border : "4px solid red"}}

                />}

        </Card>)}

        </div>

*/
