import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Synopsis from "./synopsis.vue";

describe("author", () => {
  test("should render text without truncation if limit is not given", () => {
    const iSynopsis =
      "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, " +
      "published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own" +
      " life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of " +
      "Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from " +
      "1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.";

    const wrapper = mount(Synopsis, { props: { synopsis: iSynopsis } });

    expect(wrapper.text().length).toEqual(iSynopsis.length);
  });

  test("should render text with truncation as per given limit and ellipses", () => {
    const iLimit = 30;
    const iSynopsis =
      "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, " +
      "published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own" +
      " life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of " +
      "Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from " +
      "1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.";

    const wrapper = mount(Synopsis, { props: { synopsis: iSynopsis, limit: iLimit } });

    expect(wrapper.text().length).toEqual(iLimit + 3);
  });
});
