import { getCheckoutInfo } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
  jest.clearAllMocks();
});

const webinarInfo = {
  data: {
    webinar: {
      title: "FORTALEZA MENTAL",
      subtitle: "Desarrolla tu paciencia y creatividad",
      date: "14-04-2020",
      time: "8:30 pm",
      MXN: 240,
      USD: 15,
      cupon: "COVID-19"
    },
    webinarjam: {
      return_url: "https://www.google.com"
    }
  }
};

describe("Testing Axios functions", () => {
  test("getCheckoutInfo", async () => {
    getCheckoutInfo.mockResolvedValueOnce(webinarInfo);
    const {
      data: { webinar, webinarjam }
    } = await getCheckoutInfo();
    await flushPromises();
    expect(getCheckoutInfo).toHaveBeenCalledTimes(1);
    expect(webinar).not.toBeUndefined();
    expect(webinarjam).not.toBeUndefined();
  });
});
