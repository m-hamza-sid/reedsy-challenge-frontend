import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Author from "./author.vue";

describe("author", () => {
  test("should render with name prop", () => {
    const iName = "some name";
    const wrapper = mount(Author, { props: { name: iName } });
    expect(wrapper.text()).toContain(iName);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
