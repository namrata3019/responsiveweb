import { Card, Grid, IconButton, InputAdornment, ListItem, ListItemText, List,TextField } from "@mui/material";
import { usePubSub } from "@videosdk.live/react-sdk";
import { useState } from "react";
import { Keyboard, SendRounded } from "@material-ui/icons";
import { useEffect } from "react";


const MeetingChat = () => {
 const pubSub= usePubSub("CHAT" , {});
 const { publish, messages } = pubSub;
  const [message, setMessage] = useState("");

  useEffect(() => {

  }, [message])

  return (
    <Card
      elevation={8}
      padding={8}
      variant="elevation"
      style={{
        height: "98%",
        width: "40%",
        border: "2px solid red",
        margin: "8px",
      }}
    >
      <Grid
        container
        style={{ minHeight: "100%" }}
        direction={"row"}
        alignContent="space-between"
      >
        <List item style={{ height: "80%" }}>
          {messages.map((message, i) => {
            const { senderName, message: text, timestamp } = message;

            return <ListItem>
              <ListItemText primary={text} secondary={senderName} />
            </ListItem>
          }

          )}
        </List>
        <TextField
          item
          fullwidth
          style={{
            marginTop: "1rem",
            width: "100%",
          }}
          required
          id="outlined"
          label="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          variant="outlined"
          defaultValue={""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Keyboard />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" variant="contained"
                onClick={(e) => {
                  console.log("Clicked" ,message);
                  if (message.length) {
                    publish(message, { persist: true });
                    setMessage("");
                  }
                }
                }
                >
                  <SendRounded />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Card>
  );
};

export default MeetingChat;