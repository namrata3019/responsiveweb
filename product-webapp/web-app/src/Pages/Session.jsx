import {
  Grid
} from "@mui/material";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controls from "../Components/Controls";
import Join from "../Components/Join";
import JoinView from "../Components/JoinView";
import Meeting from "../Components/Meeting";
import MeetingChat from "../Components/MeetingChat";
import { getToken } from "../Service/Meeting";

const Session = () => {
  const params = useParams();
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState(params.meetingId);

  const [participantName, setParticipantName] = useState("");
  const [readyToJoin, setReadyToJoin] = useState(false);
  const [isMeetingStarted, setMeetingStarted] = useState(false);

  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);

  const [open, setOpen] = useState(false);
  const [screenShareRef, setScreenShareRef] = useState(null);

  useEffect(() => {
    if (!meetingId) {
      setMeetingId(params.meetingId);
    }
  }, [params.meetingId]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 }, audio: true })
      .then((stream) => {
        let video = screenShareRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((e) => {
        alert(e);
        console.error(e);
      });
  };

  console.log("screenShareRef", open, screenShareRef , token);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        backgroundColor:"#1F2335"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "90%",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {!readyToJoin && (
            <Grid
              item
              style={{ backgroundColor: "white", borderRadius: "1.25rem" }}
            >
              <Join
                meetingId={meetingId}
                setReadyToJoin={setReadyToJoin}
                setMeetingId={(e) => {
                  setMeetingId(e);
                }}
              />
            </Grid>
          )} */}
          {!readyToJoin && meetingId && !isMeetingStarted && (
            <Grid
              item
              style={{ backgroundColor: "white", borderRadius: "1.25rem" }}
            >
              <JoinView
                meetingId={meetingId}
                participantName={participantName}
                setParticipantName={setParticipantName}
                onClickStartMeeting={(username) => {
                  setParticipantName(username);
                  setToken(getToken());
                }}
                micOn={micOn}
                setMicOn={setMicOn}
                webcamOn={webcamOn}
                setWebcamOn={setWebcamOn}
              />
            </Grid>
          )}
          {token && (
            <MeetingProvider
              config={{
                meetingId,
                micEnabled: micOn,
                webcamEnabled: webcamOn,
                name: participantName,
              }}
              token={token}
              reinitialiseMeetingOnConfigChange={false}
              joinWithoutUserInteraction={false}
            >
              <Meeting
                setMeetingStarted={setMeetingStarted}
                setScreenShareRef={setScreenShareRef}
                screenShareRef={screenShareRef}
              />
              {
            (open) && <MeetingChat /> }
            </MeetingProvider>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "10%",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        
        {isMeetingStarted && <Controls meetingSession={isMeetingStarted} open={{ open  , micOn , webcamOn , screenShareRef}} setOpen={setOpen}/>}
      </div>
    </div>
  );
};

export default Session;
