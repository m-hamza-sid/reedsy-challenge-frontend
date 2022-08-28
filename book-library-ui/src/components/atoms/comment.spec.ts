import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Comment from "./comment.vue";

describe("comment", () => {
  test("should render with content prop", () => {
    const iContent = "some content";
    const wrapper = mount(Comment, { props: { content: iContent } });
    expect(wrapper.text()).toContain(iContent);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
