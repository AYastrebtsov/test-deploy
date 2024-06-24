import { forwardRef } from "react";
import { Link } from "@remix-run/react";
import {
  useTheme,
  SxProps,
  Theme,
  Box,
  Typography,
  Divider,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

type StyledEmailFieldProps = {
  inputType: "email";
  name: string;
  value: string;
  placeholder: string;

  disabled?: boolean;
  heading?: string;
  error?: string;
  status?: "warning";
  validation?: "default" | "none";

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

  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onImmediateChange: () => void;
};

export const StyledEmailField = forwardRef(
  (props: StyledEmailFieldProps, ref) => {
    const theme = useTheme();

    return (
      <Box ref={ref} sx={props.styles}>
        {props.dividerTop ? <Divider sx={{ marginBottom: "16px" }} /> : null}

        <Box sx={props.inputStyles}>
          {props.heading ? (
            <Typography
              component="p"
              variant="Bold_14"
              sx={{
                color: theme.palette["Black"],
                marginBottom: "8px",
              }}
            >
              {props.heading}
            </Typography>
          ) : null}

          <FormControl
            sx={{
              width: "100%",
            }}
            disabled={props.disabled}
            error={props.error ? true : false}
          >
            <TextField
              id={props.name}
              name={props.name}
              value={props.value}
              error={props.error ? true : false}
              label={props.placeholder}
              onChange={(evt) => {
                props.onChange(evt);
                props.onImmediateChange();
              }}
              sx={{
                marginBottom: "4px",

                "& .MuiOutlinedInput-root": {
                  borderColor:
                    props.status === "warning"
                      ? theme.palette["Yellow"]
                      : "transparent",
                },
              }}
              disabled={props.disabled}
            />
            {props.error ? (
              <FormHelperText
                sx={{
                  margin: 0,
                }}
              >
                {props.error}
              </FormHelperText>
            ) : null}
          </FormControl>

          {props.helperInfo ? (
            <Typography
              component="p"
              variant="Reg_12"
              sx={{
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
    );
  }
);

StyledEmailField.displayName = "StyledEmailField";
