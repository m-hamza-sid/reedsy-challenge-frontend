import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, test, vi } from "vitest";
import Pagination from "./pagination.vue";

describe("cover", () => {
  const goToNextPage = vi.fn();
  const goToBackPage = vi.fn();
  const goToPage = vi.fn();
  const getCurrentPage = vi.fn();
  const perPage = 10;
  const totalPages = 10;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should render correct number of paginator items", () => {
    const props = {
      goToNextPage,
      goToBackPage,
      goToPage,
      getCurrentPage,
      perPage,
      totalPages
    };
    const wrapper = mount(Pagination, { props });
    expect(wrapper.findAll('[data-test-id="pg-step"]').length).toEqual(10);
  });

  test("should render correct cursor for first pagination stepper", () => {
    const getCurrentPage = vi.fn().mockReturnValue(1);
    const props = {
      goToNextPage,
      goToBackPage,
      goToPage,
      getCurrentPage,
      perPage,
      totalPages
    };
    const wrapper = mount(Pagination, { props });
    expect(wrapper.find('[data-test-id="pg-step-first"]').classes()).toContain("cursor-not-allowed");
  });

  test("should render correct cursor for last pagination stepper", () => {
    const getCurrentPage = vi.fn().mockReturnValue(10);
    const props = {
      goToNextPage,
      goToBackPage,
      goToPage,
      getCurrentPage,
      perPage,
      totalPages
    };
    const wrapper = mount(Pagination, { props });
    expect(wrapper.find('[data-test-id="pg-step-last"]').classes()).toContain("cursor-not-allowed");
  });

  test("should have correct event listener bindings", async () => {
    const props = {
      goToNextPage,
      goToBackPage,
      goToPage,
      getCurrentPage,
      perPage,
      totalPages
    };
    const wrapper = mount(Pagination, { props });

    for (const elem of wrapper.findAll('[data-test-id="pg-step"]')) {
      await elem.trigger("click");
    }
    await wrapper.find('[data-test-id="pg-step-first"]').trigger("click");
    await wrapper.find('[data-test-id="pg-step-last"]').trigger("click");

    expect(goToPage).toBeCalledTimes(10);
    expect(goToNextPage).toBeCalledTimes(1);
    expect(goToBackPage).toBeCalledTimes(1);
  });
});
