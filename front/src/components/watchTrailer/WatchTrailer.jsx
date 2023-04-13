import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TrailerModal from "./TrailerModal";
function WatchTrailer({ videoLink }) {
  const [open, setOpen] = useState(false);

  const video = `https://www.youtube.com/embed/${videoLink}`;

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color="secondary"
      >
        <YouTubeIcon />{" "}
        <Typography variant="subtitle2" ml={0.5}>
          Watch trailer
        </Typography>
      </Button>
      <TrailerModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl={video}
      />
    </Box>
  );
}

export default WatchTrailer;
