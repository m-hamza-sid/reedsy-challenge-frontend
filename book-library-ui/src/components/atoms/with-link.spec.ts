import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import WithLink from "./with-link.vue";

describe("with-link", () => {
  test("should render the link", () => {
    const iLink = "/some-link";
    const wrapper = mount(WithLink, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: { link: iLink }
    });

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(iLink);
  });
});
