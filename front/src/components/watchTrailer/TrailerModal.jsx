import { Box, Modal } from "@mui/material";

export default function TrailerModal({ open, onClose, videoUrl }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        width={{ xs: "90vw", md: "50vw" }}
        height={{ xs: "300px", md: "50vh" }}
        margin={"0 auto"}
      >
        {" "}
        <iframe
          width={"100%"}
          height={"100%"}
          src={videoUrl}
          allow="fullscreen;"
        />
      </Box>
    </Modal>
  );
}
