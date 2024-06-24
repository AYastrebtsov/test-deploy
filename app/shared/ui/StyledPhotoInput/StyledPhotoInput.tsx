import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import { UseFormSetValue } from "react-hook-form";

import { resizeFile } from "~/shared/resizeFile/resizeFile";
import { postSendFile } from "~/requests/postSendFile/postSendFile";

import {
  useTheme,
  SxProps,
  Theme,
  Box,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";

import { Loader } from "../Loader/Loader";
import profileIcon from "./icons/profileIcon.svg";

type PhotoInputProps = {
  inputType: "photo";
  name: string;
  value: string;
  onChange: UseFormSetValue<{
    [x: string]: unknown;
    [x: number]: unknown;
  }>;
  onImmediateChange: () => void;
  triggerValidation: (value: string) => void;

  validation: "default" | "none";
  url: string;

  disabled?: boolean;
  heading?: string;
  error?: string;
  status?: "warning";

  helperInfo?: {
    text?: string;
    link?: {
      text: string;
      path: string;
      type: "external" | "internal";
    };
  };

  dividerTop?: true;
  dividerBottom?: true;
  styles?: SxProps<Theme>;
  inputStyles?: SxProps<Theme>;
};

// (6 megabites)
const MAX_FILE_SIZE = 6000000;

export const StyledPhotoInput = ({
  onChange,
  triggerValidation,
  ...props
}: PhotoInputProps) => {
  const theme = useTheme();

  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    if (props.error) {
      setError(props.error);
    }
  }, [props.error]);

  useEffect(() => {
    if (loaded === true) {
      triggerValidation(props.name);
      setLoaded(false);
    }
  }, [triggerValidation, props.name, loaded]);

  return (
    <>
      <Box sx={props.styles}>
        {props.dividerTop ? <Divider sx={{ marginBottom: "16px" }} /> : null}

        <Box sx={props.inputStyles}>
          {props.heading ? (
            <Typography
              component="p"
              variant="Bold_14"
              sx={{
                textAlign: "center",
                color: theme.palette["Black"],
                marginBottom: "8px",
              }}
            >
              {props.heading}
            </Typography>
          ) : null}

          <Box>
            <label
              htmlFor={props.name}
              style={{
                display: "block",
              }}
            >
              <Avatar
                alt="profile"
                src={value === "" ? profileIcon : value}
                sx={{
                  width: 90,
                  height: 90,
                  margin: "0 auto",
                  border: "1px solid",
                  borderColor:
                    props.status === "warning"
                      ? theme.palette["Yellow"]
                      : "transparent",
                }}
              />

              <Typography
                component="p"
                variant="Bold_16"
                sx={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  textAlign: "center",
                  color: theme.palette["Corp_1"],
                  display: props.disabled ? "none" : "block",
                }}
              >
                {value === "" ? "Загрузить фото" : "Заменить фото"}
              </Typography>
            </label>

            <input
              type="file"
              id={props.name}
              ref={ref}
              disabled={props.disabled}
              onChange={async (evt) => {
                if (evt.target.files) {
                  const file = evt.target.files[0];

                  let maxSize = false;
                  const formData = new FormData();

                  if (file.size > MAX_FILE_SIZE) {
                    setError(
                      "Ошибка загрузки документа, допускается загрузка документов формата jpg, png не более 6MB."
                    );
                    maxSize = true;
                  }

                  // sendPhoto
                  if (maxSize === false) {
                    setLoading(true);
                    const image = await resizeFile(file);
                    formData.append(`file`, image as File);

                    postSendFile(
                      props.url,
                      formData,
                      (data) => {
                        setValue(data.resFile);
                        onChange(props.name, data.resFile);
                        props.onImmediateChange();
                        setLoading(false);
                        setLoaded(true);
                      },
                      (error) => {
                        setValue("");
                        onChange(props.name, "");
                        setError(error);
                        setLoading(false);
                      }
                    );
                  }
                }
              }}
              accept="image/png, image/jpeg, image/jpg"
              style={{
                display: "none",
              }}
            />

            <input
              type="text"
              value={value}
              name={props.name}
              style={{ display: "none", pointerEvents: "none" }}
              readOnly
            />
          </Box>

          {error !== "" ? (
            <Typography
              component="p"
              variant="Reg_12"
              sx={{
                marginTop: "4px",
                textAlign: "center",
                color: theme.palette["Red"],
              }}
            >
              {error}
            </Typography>
          ) : null}

          {props.helperInfo ? (
            <Typography
              component="p"
              variant="Reg_12"
              sx={{
                marginTop: "4px",
                textAlign: "center",
                color: theme.palette["Corp_1"],
              }}
            >
              {props.helperInfo.text}{" "}
              {props.helperInfo.link ? (
                <>
                  {props.helperInfo.link.type === "internal" ? (
                    <Link
                      style={{
                        textDecorationLine: "underline",
                      }}
                      to={props.helperInfo.link.path}
                    >
                      {props.helperInfo.link.text}
                    </Link>
                  ) : (
                    <a
                      style={{
                        textDecorationLine: "underline",
                      }}
                      href={props.helperInfo.link.path}
                    >
                      {props.helperInfo.link.text}
                    </a>
                  )}
                </>
              ) : null}
            </Typography>
          ) : null}
        </Box>

        {props.dividerBottom ? <Divider sx={{ marginTop: "16px" }} /> : null}
      </Box>

      {loading ? <Loader /> : null}
    </>
  );
};
