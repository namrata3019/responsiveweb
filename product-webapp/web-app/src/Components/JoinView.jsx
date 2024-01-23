import {
    Person,
    VideocamOff,
    MicOff,
    Mic,
    Videocam,
    ArrowBack,
  } from "@material-ui/icons";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

  import {
    TextField,
    Box,
    Button,
    InputAdornment,
    useTheme,
    Grid,
    IconButton,
    Tooltip,
    Typography,
  } from "@mui/material"  
import { makeStyles } from '@mui/styles';
import { useResponsiveSize } from "../Service/Meeting";
import { useEffect, useRef, useState } from "react";
import MeetingButton from "./MeetingButton";
  
  const useStyles = makeStyles((theme) => ({
    video: {
      borderRadius: "10px",
      backgroundColor: "#1c1c1c",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
    toggleButton: {
      borderRadius: "100%",
      minWidth: "auto",
      width: "44px",
      height: "44px",
    },
  
    previewBox: {
      width: "100%",
      height: "45vh",
      position: "relative",
    },
  }));

const JoinView = (
  {  
    onClickStartMeeting,
    meetingId,
  micOn,setMicOn, webcamOn,setWebcamOn
  }) => {
    
    const videoPlayerRef = useRef();
    const theme = useTheme();
    const styles = useStyles(theme);
  
    const [videoTrack, setVideoTrack] = useState(null);
    const [userName, setUserName] = useState("")
  
    const padding = useResponsiveSize({
      xl: 6,
      lg: 6,
      md: 6,
      sm: 4,
      xs: 1.5,
    });
  
    const _handleToggleMic = () => {
      setMicOn(!micOn);
    };
    const _handleToggleWebcam = () => {
      if (!webcamOn) {
        getVideo();
      } else {
        if (videoTrack) {
          videoTrack.stop();
          setVideoTrack(null);
        }
      }
      setWebcamOn(!webcamOn);
    };
  
    const getVideo = async () => {
      if (videoPlayerRef.current) {
        const videoConstraints = {
          video: {
            width: 1280,
            height: 720,
          },
        };
  
        const stream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        const videoTracks = stream.getVideoTracks();
  
        const videoTrack = videoTracks.length ? videoTracks[0] : null;
  
        videoPlayerRef.current.srcObject = new MediaStream([videoTrack]);
        videoPlayerRef.current.play();
        if (!videoTrack) {
          setWebcamOn(false);
        }
        setVideoTrack(videoTrack);
      }
    };
  
    useEffect(() => {
      if (webcamOn && !videoTrack) {
        getVideo();
      }
    }, [webcamOn]);
    return (
        <Box
        m={6}
        style={{
          display: "flex",
          flex: 1,
          width: "auto",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: padding,
        }}>
        <Box className={styles.previewBox}>
          <video
            autoplay
            playsInline
            muted
            ref={videoPlayerRef}
            controls={false}
            className={styles.video + " flip"}
            
          />

          {!webcamOn ? (
            <Box
              position="absolute"
              style={{
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
                left: 0,
              }}>
              <Typography>Camera is Turned Off</Typography>
            </Box>
          ) : null}

          <Box
            position="absolute"
            bottom={theme.spacing(2)}
            left="0"
            right="0">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}>
              <Grid item>
                <Tooltip
                  title={micOn ? "Turn off mic" : "Turn on mic"}
                  arrow
                  placement="top">
                  <Button
                    onClick={() => _handleToggleMic()}
                    variant="contained"
                    style={
                      micOn
                        ? {}
                        : {
                          backgroundColor: "red",
                          color: "white",
                        }
                    }
                    className={styles.toggleButton}>
                    {micOn ? <Mic /> : <MicOff />}
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip
                  title={webcamOn ? "Turn off camera" : "Turn on camera"}
                  arrow
                  placement="top">
                  <Button
                    onClick={() => _handleToggleWebcam()}
                    variant="contained"
                    style={
                      webcamOn
                        ? {}
                        : {
                          backgroundColor: "red",
                          color: "white",
                        }
                    }
                    className={styles.toggleButton}>
                    {webcamOn ? <Videocam /> : <VideocamOff />}
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <TextField
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
          id="outlined"
          label="Name"
          helperText={
            userName.length < 3
              ? "Enter Name with which you would like to join meeting"
              : ""
          }
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          variant="outlined"
          defaultValue={userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  disabled={userName.length < 3}
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    if (videoTrack) {
                      videoTrack.stop();
                      setVideoTrack(null);
                    }
                    onClickStartMeeting(userName);
                  }}
                  id={"btnJoin"}>
                  Start
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    )
}

export default JoinView;