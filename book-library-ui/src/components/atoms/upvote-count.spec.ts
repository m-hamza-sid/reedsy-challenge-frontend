import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import UpvoteCount from "./upvote-count.vue";
import { config } from "@vue/test-utils";

describe("upvote-count", () => {
  test("should render with upVoteCount prop", () => {
    console.log(config.global.plugins);
    const iUpVoteCount = 2;

    const wrapper = shallowMount(UpvoteCount, { props: { upVoteCount: iUpVoteCount } });

    expect(wrapper.text()).toContain(iUpVoteCount);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should not render anything if count is 0", () => {
    const iUpVoteCount = 0;

    const wrapper = shallowMount(UpvoteCount, { props: { upVoteCount: iUpVoteCount } });

    expect(wrapper.text()).toHaveLength(0);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should not render anything if count is null", () => {
    const iUpVoteCount = null;

    const wrapper = shallowMount(UpvoteCount, { props: { upVoteCount: iUpVoteCount } });

    expect(wrapper.text()).toHaveLength(0);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
