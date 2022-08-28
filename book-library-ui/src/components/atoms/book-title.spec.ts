import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import BookTitle from "./book-title.vue";

describe("book-title", () => {
  test("should render with title prop", () => {
    const iTitle = "some title";
    const wrapper = mount(BookTitle, { props: { title: iTitle } });
    expect(wrapper.text()).toContain(iTitle);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
