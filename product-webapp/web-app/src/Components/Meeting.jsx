import { Grid, ImageList } from "@mui/material";
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import Participants from "./Participants";



const Meeting = ({ setMeetingStarted, setScreenShareRef, screenShareRef}) => {

  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }
  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }
  const onSpeakerChanged = (activeSpeakerId) => {
    console.log(" onSpeakerChanged", activeSpeakerId);
  };
  function onPresenterChanged(presenterId) {
    console.log(" onPresenterChanged", presenterId);
  }
  function onMainParticipantChanged(participant) {
    console.log(" onMainParticipantChanged", participant);
  }
  function onEntryRequested(participantId, name) {
    console.log(" onEntryRequested", participantId, name);
  }
  function onEntryResponded(participantId, name) {
    console.log(" onEntryResponded", participantId, name);
  }
  function onRecordingStarted() {
    console.log(" onRecordingStarted");
  }
  function onRecordingStopped() {
    console.log(" onRecordingStopped");
  }
  function onChatMessage(data) {
    console.log(" onChatMessage", data);
  }
  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }
  function onMeetingLeft() {
    console.log("onMeetingLeft");
    // onMeetingLeave();
  }
  const onLiveStreamStarted = (data) => {
    console.log("onLiveStreamStarted example", data);
  };
  const onLiveStreamStopped = (data) => {
    console.log("onLiveStreamStopped example", data);
  };

  const onVideoStateChanged = (data) => {
    console.log("onVideoStateChanged", data);
  };
  const onVideoSeeked = (data) => {
    console.log("onVideoSeeked", data);
  };

  const onWebcamRequested = (data) => {
    console.log("onWebcamRequested", data);
  };
  const onMicRequested = (data) => {
    console.log("onMicRequested", data);
  };
  const onPinStateChanged = (data) => {
    console.log("onPinStateChanged", data);
  };

  const onConnectionOpen = (data) => {
    console.log("onConnectionOpen", data);
  };

  const [joined, setJoined] = useState(false);

  const meetingSession = useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onMainParticipantChanged,
    onEntryRequested,
    onEntryResponded,
    onRecordingStarted,
    onRecordingStopped,
    onChatMessage,
    onMeetingJoined,
    onMeetingLeft,
    onLiveStreamStarted,
    onLiveStreamStopped,
    onVideoStateChanged,
    onVideoSeeked,
    onWebcamRequested,
    onMicRequested,
    onPinStateChanged,
    onConnectionOpen,
  });

  const {
    meetingId,
    meeting,
    localParticipant,
    mainParticipant,
    activeSpeakerId,
    participants,
    presenterId,
    localMicOn,
    localWebcamOn,
    localScreenShareOn,
    messages,
    isRecording,
    isLiveStreaming,
    pinnedParticipants,
    //
    join,
    leave,
    connectTo,
    end,
    //
    startRecording,
    stopRecording,
    //
    respondEntry,
    //
    muteMic,
    unmuteMic,
    toggleMic,
    //
    disableWebcam,
    enableWebcam,
    toggleWebcam,
    //
    disableScreenShare,
    enableScreenShare,
    toggleScreenShare,
    //
    getMics,
    getWebcams,
    changeWebcam,
    changeMic,

    startVideo,
    stopVideo,
    resumeVideo,
    pauseVideo,
    seekVideo,
    startLivestream,
    stopLivestream,
  } = meetingSession;

  const handleStartRecording = () => {
    startRecording();
  };
  const handleStopRecording = () => {
    stopRecording();
  };

  const joinMeeting = () => {
    join();
  };

  useEffect(() => {
    if (!joined) {
      joinMeeting();
      setMeetingStarted(meetingSession);
    }
  }, []);

  console.log("testMeeting ==>",screenShareRef)

  return (
    <Grid
      item
      justifyContent={"center"}
      alignContent="center"
      style={{ height: "100%", width: "100%" }}
    >
     { (screenShareRef && screenShareRef.active) ? <div
              item
              justifyContent={"center"}
              alignContent="center"
              style={{  height: "100%", width: "100%" , border:"2px solid red" , borderRadius: "5.25rem",
              backdropFilter: "blur(2.5px)",
              background: "rgba(0,0,0,0.3)",}}
            >
              <ReactPlayer
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
                url={screenShareRef}
                //
                height={"100%"}
                width={"100%"}
                onError={(err) => {
                  console.log(err, "participant video error");
                }}
              />
            </div> :
            <ImageList sx={{ width: "100%", height: "100%" }} cols={1}>
        <Grid
          container
          justifyContent={"space-around"}
          alignContent="center"
          spacing={8}
        >
          <Participants setScreenShareRef={setScreenShareRef}/>
        </Grid>
      </ImageList>
       }
    </Grid>
  );
};

export default Meeting;
