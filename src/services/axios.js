import axios from "axios";
import qs from "query-string";

export function login() {
  const requestBody = {
    grant_type: "client_credentials"
  };

  const config = {
    auth: {
      username:
        "AeCenI6NlWiKbl-Z2VJNOUfk4dq0UZ1ikh3ih8FYb120-44YZq93Ys8qQB4QmXT1vsLQ3lrQSt7v3pFW",
      password:
        "ELscltMiCWjDSyPV-vU2P2kU6KwnZqz_ygwxHVxzifUMqILdxbRyRUhpCb-pYLYb2ynusSP-13eA5kaT"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  return axios.post(
    "https://api.sandbox.paypal.com/v1/oauth2/token",
    qs.stringify(requestBody),
    config
  );
}

export function createPayment(token, paymentInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  return axios.post(
    "https://api.sandbox.paypal.com/v1/payments/payment",
    paymentInfo,
    config
  );
}

export function getCheckoutInfo() {
  return axios.get("http://webinars-io.test/");
}
