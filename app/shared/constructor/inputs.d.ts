/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @minItems 1
 */
export type Inputs = [
  (
    | {
        inputType: "text";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "snils";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "sms";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "select";
        name: string;
        value: string;
        placeholder: string;
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          }[],
        ];
        disabled?: boolean;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "radio";
        name: string;
        value: string;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            icon?: "telegram" | "viber" | "whatsapp";
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            icon?: "telegram" | "viber" | "whatsapp";
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "photo";
        name: string;
        value: string;
        validation: "none" | "default";
        url: string;
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "photoCheckbox";
        name: string;
        value: string[];
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            img: string;
            text?: string;
            details?: {
              text: string;
              details: string;
              img: string;
              link?: {
                text: string;
                path: string;
                type: "internal" | "external";
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            img: string;
            text?: string;
            details?: {
              text: string;
              details: string;
              img: string;
              link?: {
                text: string;
                path: string;
                type: "internal" | "external";
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "phone";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "month";
        name: string;
        value: string | null;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "inn";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "file";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        url: string;
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        drawerInfo?: {
          text?: string;
          images?: string[];
        };
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "email";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "date";
        name: string;
        value: string | null;
        placeholder: string;
        validation: "none" | "default" | "16years";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "checkboxMultiple";
        name: string;
        value: string[];
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "checkbox";
        name: string;
        value: boolean;
        label: string;
        validation: "none" | "checked" | "unchecked";
        heading?: string;
        error?: string;
        status?: "warning";
        disabled?: boolean;
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "card";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "account";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
  ),
  ...(
    | {
        inputType: "text";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "snils";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "sms";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "select";
        name: string;
        value: string;
        placeholder: string;
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          }[],
        ];
        disabled?: boolean;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "radio";
        name: string;
        value: string;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            icon?: "telegram" | "viber" | "whatsapp";
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            icon?: "telegram" | "viber" | "whatsapp";
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "photo";
        name: string;
        value: string;
        validation: "none" | "default";
        url: string;
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "photoCheckbox";
        name: string;
        value: string[];
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            img: string;
            text?: string;
            details?: {
              text: string;
              details: string;
              img: string;
              link?: {
                text: string;
                path: string;
                type: "internal" | "external";
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            img: string;
            text?: string;
            details?: {
              text: string;
              details: string;
              img: string;
              link?: {
                text: string;
                path: string;
                type: "internal" | "external";
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "phone";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "month";
        name: string;
        value: string | null;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "inn";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "file";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        url: string;
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        drawerInfo?: {
          text?: string;
          images?: string[];
        };
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "email";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "date";
        name: string;
        value: string | null;
        placeholder: string;
        validation: "none" | "default" | "16years";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "checkboxMultiple";
        name: string;
        value: string[];
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        /**
         * @minItems 1
         */
        options: [
          {
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          },
          ...{
            value: string;
            label: string;
            disabled: boolean;
            [k: string]: unknown;
          }[],
        ];
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "checkbox";
        name: string;
        value: boolean;
        label: string;
        validation: "none" | "checked" | "unchecked";
        heading?: string;
        error?: string;
        status?: "warning";
        disabled?: boolean;
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "card";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
    | {
        inputType: "account";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: boolean;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        additionalProperties?: never;
        [k: string]: unknown;
      }
  )[],
];