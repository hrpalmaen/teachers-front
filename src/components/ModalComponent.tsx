import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { SectionFormComponent } from "./SectionFormComponent";

interface ModalProps {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalComponent = ({
  title,
  onClose,
  open,
  children,
}: ModalProps) => {
  const toCamelCase = (text: string | undefined) => {
    if (!text) return text;
    const [startText, ...restTxt] = text;
    return startText.toUpperCase() + restTxt.join("").toLowerCase();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#193b58",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
          width: { md: "70%", sm: "70%", xs: "80%", lg: "70%" },
          maxHeight: "90%",
        }}
      >
        {/* header */}
        <Box
          sx={{
            borderRadius: "12px 12px 0 0",
            margin: "1rem",
            minHeight: "50px",
          }}
        >
          <SectionFormComponent>
            <Typography sx={styles.title} id="modal-title">
              {toCamelCase(title)}
              <IconButton sx={styles.closeButton} onClick={onClose}>
                <Close />
              </IconButton>
            </Typography>
          </SectionFormComponent>
        </Box>
        {/* body */}
        <Box
          sx={{
            padding: "1rem 0.2rem 1rem 1rem",
            overflowY: "auto",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

const styles = {
  closeButton: {
    color: "secondary.main",
    position: "absolute",
    right: 0,
    padding: "0.2rem 0.7rem",
    fontWeight: "bold",
  },
  title: {
    // color: "#FF5144",
    color: "secondary.main",
    fontSize: "1.2rem",
    fontWeight: "700",
    textAlign: "center",
    padding: 0,
  },
};
