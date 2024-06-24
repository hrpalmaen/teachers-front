import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import TgUser from "@/assets/upload/tguser.svg";
import { Controller, useFormContext } from "react-hook-form";

interface UploadFileProps {
  setFile?: (file: File) => void;
  setFileBase64?: (file: string) => void;
  isPDF?: boolean;
  message?: string;
  name?: string;
  resetFile: boolean;
}

export const UploadFileComponent = ({
  setFile,
  isPDF = false,
  setFileBase64,
  message,
  name = "fileInput",
  resetFile,
}: UploadFileProps) => {
  const { control } = useFormContext();
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const formatFile = isPDF ? "application/pdf" : "image/*";
  const textFormatFile = isPDF ? "PDF" : "JPEG/PNG";

  useEffect(() => {
    if (resetFile) setSelectedFileName("");
  }, [resetFile]);

  const handleFileClick = () => {
    const fileInput = document.getElementById(name);
    if (fileInput) fileInput.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const file = files[0];
    setSelectedFileName(file.name);
    // settear file;
    setFile !== undefined && setFile(file);
    // settear file in base64
    setFileBase64 !== undefined && handleFileBase64(file);
  };

  const handleFileInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): File | undefined => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
    setSelectedFileName(file.name);
    // settear file;
    setFile !== undefined && setFile(file);
    // settear file in base64
    setFileBase64 !== undefined && handleFileBase64(file);
  };

  const handleFileBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setFileBase64(e.target.result);
    };
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        border: "10px ridge rgba(109, 205, 243, 0.25)",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onClick={handleFileClick}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
    >
      <Typography
        sx={{
          color: "#b0b0b0",
          fontSize: "0.8rem",
          padding: { lg: "2rem 0.5rem", xs: "0.5rem" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
        // className="flex flex-col items-center justify-center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={TgUser} alt="TgUser" />
          </Box>
          <Box sx={{ fontWeight: 700, textAlign: "center" }}>
            <b>Haz clic para subir o arrastra y suelta</b>

            <Box sx={{ color: "#001A7B", textAlign: "center" }}>{message}</Box>
          </Box>
          <Box
            sx={{
              fontStyle: "italic",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            (Formato {textFormatFile})
          </Box>
          {selectedFileName && (
            <Box
              className="w-full p-2 overflow-hidden mt-4 flex justify-center items-center h-8 rounded-2xl"
              style={{
                background: "#ede6e6",
                maxWidth: "90%",
              }}
            >
              <Box className="text-xs text-gray-500 dark:text-gray-400">
                {selectedFileName}
              </Box>
            </Box>
          )}
        </Box>
        {/* <input
          type="file"
          accept={formatFile}
          style={{ display: "none" }}
          onChange={handleFileInput}
          id={name}
          name={name}
        /> */}
        <Controller
          control={control}
          render={({ field, fieldState: { error } }) => (
            // <TextField
            //   label={label}
            //   {...field}
            //   fullWidth
            //   variant="outlined"
            //   error={!!error}
            //   helperText={error ? error.message : null}
            // />
            <input
              type="file"
              {...field}
              accept={formatFile}
              style={{ display: "none" }}
              onChange={handleFileInput}
              id={name}
            />
          )}
          name={name}
        />
      </Typography>
    </Box>
  );
};
