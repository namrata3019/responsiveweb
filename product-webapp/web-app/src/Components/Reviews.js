import * as React from "react";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import "../css/qna.css";
import QNA from "./QNA";
import Modal from "./Modal";

function Reviews() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box className="reviews" sx={{ width: "68.6%", typography: "body1" }}>
        <QNA/>
      </Box>
    </div>
  );
}

export default Reviews;
