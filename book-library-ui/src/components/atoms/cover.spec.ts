import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Cover from "./cover.vue";

describe("cover", () => {
  test("should render in small size by default", () => {
    const iSrc = "https://some-cover.png";
    const wrapper = mount(Cover, { attrs: { src: iSrc } });
    expect(wrapper.attributes()).toContain({ src: iSrc });
    expect(wrapper.classes()).toContain("w-32");
  });
  test("should render in large size if size prop is not small", () => {
    const iSrc = "https://some-cover.png";
    const wrapper = mount(Cover, { attrs: { src: iSrc }, props: { size: "large" } });
    expect(wrapper.attributes()).toContain({ src: iSrc });
    expect(wrapper.classes()).toContain("w-72");
  });
  test("should match default snapshot", () => {
    const iSrc = "https://some-cover.png";
    const wrapper = mount(Cover, { attrs: { src: iSrc } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
