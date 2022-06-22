import { Countdown } from "../../countdown-widget/types";

const BASE_ENDPOINT_URL = "http://localhost/bb-melhor-envio/wp-json/";
const REST_API_VERSION = "wbg-countdown/v1/";

const REST_API_URL = `${BASE_ENDPOINT_URL}${REST_API_VERSION}`;

const COUNTDOWN_WIDGET_REST_API_ENDPOINTS = {
  findById: {
    method: "GET",
    endpoint: (id: Countdown["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
  create: {
    method: "POST",
    endpoint: (id: Countdown["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
  update: {
    method: "PUT",
    endpoint: (id: Countdown["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
};

export { REST_API_URL, COUNTDOWN_WIDGET_REST_API_ENDPOINTS };
