import type { StoryObj, Meta } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";

import { createRemixStub } from "@remix-run/testing";
import { http, delay, HttpResponse } from "msw";

import Step6 from "./route";

import { getForm } from "~/requests/getForm/getForm";
import {
  postSaveForm,
  // mockResponseNeedRequired,
  mockResponseAllowedNewStep,
} from "~/requests/postSaveForm/postSaveForm";
import { json } from "@remix-run/react";

const meta = {
  title: "Страницы/Регистрация/Шаг6",
  component: Step6,
  tags: ["autodocs"],
  parameters: {
    layout: {
      padded: false,
    },
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <h2>Адрес страницы: /registration/step6</h2>
          <h3>Используемые запросы:</h3>
          <p>getForm() - VITE_GET_FORM - {import.meta.env.VITE_GET_FORM}</p>
          <p>
            postSaveForm() - VITE_SAVE_FORM - {import.meta.env.VITE_SAVE_FORM}
          </p>
        </>
      ),
    },
  },
} satisfies Meta<typeof Step6>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Страница",
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          Component: Story,
          loader: async () => {
            const data = await getForm(6);

            return json({
              formFields: data.result.formData,
              formStatus: data.result.type,
            });
          },
          action: async ({ request }) => {
            const fields = await request.json();

            const data = await postSaveForm(6, fields);

            if (data.result.type === "allowedNewStep") {
              alert("Переходим на следующий шаг!");
            }

            return data;
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
  parameters: {
    msw: {
      handlers: [
        http.get(import.meta.env.VITE_GET_FORM, async () => {
          await delay(2000);
          return HttpResponse.json({
            result: {
              formData: [
                {
                  inputType: "inn",
                  name: "inn",
                  value: "",
                  placeholder: "ИНН",
                  validation: "default",
                  link: {
                    type: "external",
                    path: "https://www.google.com/",
                    text: "Узнай свой ИНН",
                  },
                },
                {
                  inputType: "snils",
                  name: "snils",
                  value: "",
                  placeholder: "СНИЛС",
                  validation: "default",
                  link: {
                    type: "external",
                    path: "https://www.google.com/",
                    text: "Электронные услуги и сервисы СФР",
                  },
                },
                {
                  inputType: "file",
                  name: "registration",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Адрес регистрации",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
                {
                  inputType: "file",
                  name: "migrationCard",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Миграционная карта",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
                {
                  inputType: "file",
                  name: "fingerprints",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Дактилоскопия",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
                {
                  inputType: "file",
                  name: "arrivalNotice",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Уведомление о прибытии",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
                {
                  inputType: "file",
                  name: "patent",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Патент",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                  dividerTop: true,
                },
                {
                  inputType: "file",
                  name: "patentPayment",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Квитанция оплаты патента",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
                {
                  inputType: "file",
                  name: "workPermit",
                  value: "",
                  url: "http://preprod.marriator-api.fivecorners.ru/api/saveFile",
                  placeholder: "Приложи документ",
                  validation: "default",
                  heading: "Разрешение на работу",
                  helperInfo: {
                    text: "Для подтверждения приложи фотографию документа",
                  },
                },
              ],
              step: 6,
              type: "needRequired",
            },
            status: "success",
          });
        }),
        http.post(import.meta.env.VITE_SAVE_FORM, async () => {
          await delay(2000);
          return HttpResponse.json(mockResponseAllowedNewStep);
        }),
      ],
    },
  },
};
