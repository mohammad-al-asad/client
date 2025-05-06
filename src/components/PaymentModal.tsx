"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  boxShadow: 24,

 
};

export default function PaymentModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            src={`https://buy.onramper.com?apiKey=${process.env.ONRAMPER_API_KEY}&mode=buy`}
            title="Onramper Widget"
            height="430px"
            width="420px"
            allow="accelerometer; autoplay; camera; gyroscope; payment; microphone"
          />
        </Box>
      </Modal>
    </div>
  );
}
