import type { StoryObj, Meta } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";

import { createRemixStub } from "@remix-run/testing";
import { http, delay, HttpResponse } from "msw";

import CreatePin from "./route";

import {
  postRegStep2,
  mockResponseSuccess as postRegStep2MockResponseSuccess,
} from "~/requests/postRegStep2/postRegStep2";

const meta = {
  title: "Страницы/Вход/Создание пина",
  component: CreatePin,
  tags: ["autodocs"],
  parameters: {
    layout: {
      padded: false,
    },
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <h2>Адрес страницы: /signin/createPin</h2>
          <h3>Используемые запросы:</h3>
          {/* <p>
            getRegStep2() - VITE_REG_STEP_2 - {import.meta.env.VITE_REG_STEP_2}
          </p> */}
        </>
      ),
    },
  },
} satisfies Meta<typeof CreatePin>;

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
          action: async () => {
            const data = await postRegStep2({ test: "test" });

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
        http.post(import.meta.env.VITE_GET_FORM, async () => {
          await delay(2000);
          return HttpResponse.json(postRegStep2MockResponseSuccess);
        }),
      ],
    },
  },
};
