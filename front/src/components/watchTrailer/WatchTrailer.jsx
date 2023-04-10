import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TrailerModal from "./TrailerModal";
function WatchTrailer() {
  const [open, setOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/KwSLfOoU9sc";

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        <YouTubeIcon />{" "}
        <Typography variant="subtitle2" ml={0.5}>
          Watch trailer
        </Typography>
      </Button>
      <TrailerModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl={videoUrl}
      />
    </Box>
  );
}

export default WatchTrailer;
