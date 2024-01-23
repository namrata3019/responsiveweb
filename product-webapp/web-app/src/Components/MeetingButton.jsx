import { Fab, IconButton } from "@mui/material";
import ToggleIcon from "material-ui-toggle-icon";

const MeetingButton = (props) => {
    const { onIcon , offIcon , on , onClick } = props;
    return (
        <Fab size="large" style={{margin:"0 10px 10 5px"}}>
        <IconButton style={{ border : "2px solid red" , backgroundColor: "red" , height:50, width:50 }} onClick={onClick}>
          <ToggleIcon
            style={{ color : "white"}}
            on={on}
            onIcon={onIcon}
            offIcon={offIcon}
          />
        </IconButton>
        </Fab>
    )
}

export default MeetingButton;