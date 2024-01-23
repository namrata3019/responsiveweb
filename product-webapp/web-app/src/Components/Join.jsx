import { Box, Button, Chip, InputAdornment, TextField } from "@mui/material";
import { Keyboard } from "@material-ui/icons";
import { useState } from "react";

const Join = ({ setMeetingId , meetingId , setReadyToJoin}) => {

  const [meet , setMeet ]= useState(meetingId);
  const [meetingIdError ,setMeetingIdError] = useState("")
  return (
     <Box
          m={6}
          style={{
            display: "flex",
            flex: 1,
            width: "80%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}>
          <Button
            style={{
                marginBottom:"1rem",
                color:"red"

            }}
            color="primary"
            variant="contained"
            onClick={(e) => {
              // onClickCreateMeeting();
            }}>
            Create Meeting
          </Button>

          <Chip label = "OR"/>

          <TextField
            fullwidth
            style={{
              marginTop: "1rem",
              maxWidth: "100%",
            }}
            required
            id="outlined"
            label="Meeting ID"
            helperText={
              false
                ? "Meeting id is not valid"
                : "Enter your meeting id Here"
            }
            onChange={(e) => {
              setMeet(e.target.value); 
            }}
            error={meetingIdError}
            variant="outlined"
            defaultValue={meet}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Keyboard />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    disabled={!meet.match("\\w{4}\\-\\w{4}\\-\\w{4}")}
                    color="primary"
                    variant="contained"
                    onClick={(e) => {
                      if (meet.match("\\w{4}\\-\\w{4}\\-\\w{4}"))
                        {
                          setMeetingId(meet);
                          setReadyToJoin(true);
                        }
                      else setMeetingIdError(true);
                    }}
                    id={"btnJoin"}>
                    Next
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          
    </Box> 
 
  )
}

export default Join;