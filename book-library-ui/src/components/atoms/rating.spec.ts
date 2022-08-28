import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Rating from "./rating.vue";

describe("rating", () => {
  test("should render with rating prop", () => {
    const iRating = "05";
    const wrapper = mount(Rating, { props: { rating: iRating } });
    expect(wrapper.text()).toContain(iRating);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
