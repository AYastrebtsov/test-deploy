import { useEffect } from "react";
import {
  useLoaderData,
  useFetcher,
  useSubmit,
  useNavigation,
  ClientActionFunctionArgs,
  json,
  redirect,
} from "@remix-run/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  generateDefaultValues,
  generateInputsMarkup,
  generateValidationSchema,
} from "~/shared/constructor/constructor";

import { useTheme, Box, Typography, Button } from "@mui/material";
import { TopNavigation } from "~/shared/ui/TopNavigation/TopNavigation";
import { Loader } from "~/shared/ui/Loader/Loader";

import { getForm } from "~/requests/getForm/getForm";
import { postSaveForm } from "~/requests/postSaveForm/postSaveForm";

export async function clientLoader() {
  const data = await getForm(1);

  return json({
    formFields: data.result.formData,
    formStatus: data.result.type,
  });
}

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const fields = await request.json();

  const data = await postSaveForm(1, fields);

  if (data.result.type === "allowedNewStep") {
    throw redirect("/registration/step2");
  }

  return data;
}

export default function Step1() {
  const theme = useTheme();

  const submit = useSubmit();
  const fetcher = useFetcher();
  const navigation = useNavigation();

  const { formFields, formStatus } = useLoaderData<typeof clientLoader>();

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: generateDefaultValues(formFields),
    resolver: yupResolver(Yup.object(generateValidationSchema(formFields))),
    mode: "onChange",
    shouldUnregister: true,
  });

  useEffect(() => {
    reset(generateDefaultValues(formFields));
  }, [formFields, reset]);

  return (
    <>
      {navigation.state !== "idle" ? <Loader /> : null}

      <Box
        sx={{
          paddingBottom: "80px",
        }}
      >
        <TopNavigation
          header={{
            text: "Выбери своё направление",
            bold: true,
          }}
        />

        <Box
          sx={{
            padding: "24px 16px",
          }}
        >
          <Typography
            component="p"
            variant="Reg_18"
            sx={{
              color: theme.palette["Black"],
              paddingBottom: "14px",
            }}
          >
            Наши задания может выполнить{" "}
            <Typography
              component="span"
              variant="Reg_18"
              sx={{
                color: theme.palette["Corp_2"],
              }}
            >
              любой желающий
            </Typography>{" "}
            — они не требуют особых компетенций или опыта.
          </Typography>

          <Typography
            component="p"
            variant="Reg_14"
            sx={{
              color: theme.palette["Grey_2"],
              paddingBottom: "24px",
            }}
          >
            Набор сфер очень широкий — от маркетинга и аналитики до простых
            заданий в общепите и магазинах прямо рядом с вашим домом.
          </Typography>

          <Typography
            component="p"
            variant="Reg_14"
            sx={{
              color: theme.palette["Black"],
              paddingBottom: "24px",
            }}
          >
            Подумай и{" "}
            <Typography
              component="span"
              variant="Reg_14"
              sx={{
                color: theme.palette["Corp_2"],
              }}
            >
              сделай первый шаг.
            </Typography>
          </Typography>
        </Box>

        <form
          onSubmit={handleSubmit((values) => {
            submit(JSON.stringify(values), {
              method: "POST",
              encType: "application/json",
            });
          })}
          style={{
            display: "grid",
            rowGap: "16px",
          }}
        >
          {generateInputsMarkup(
            formFields,
            errors,
            control,
            setValue,
            trigger,
            () => {
              fetcher.submit(JSON.stringify(getValues()), {
                method: "POST",
                encType: "application/json",
              });
            }
          )}

          <Box
            sx={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              bottom: "0",
              left: "0",
              padding: "10px 16px 24px 16px",
              backgroundColor: theme.palette["White"],
            }}
          >
            <Button
              type="submit"
              disabled={formStatus !== "allowedNewStep"}
              variant="contained"
            >
              Продолжить
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
