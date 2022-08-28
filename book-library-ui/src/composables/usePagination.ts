import { $ } from "vue/macros";
import type { Ref, ComputedRef } from "vue";

export interface IPaginationStruct<T> {
  goToNextPage: () => void;
  goToBackPage: () => void;
  goToPage: (page: number) => void;
  getCurrentPage: () => number;
  paginatedData: ComputedRef<Array<T>>;
  totalPages: ComputedRef<number>;
}

export default function usePagination(oData: Ref<Array<any>>, oPerPage: Ref<number>): IPaginationStruct<any> {
  let page = $ref(1);
  const data = $(oData);
  const perPage = $(oPerPage);

  const paginatedData = computed(() => data.slice((page - 1) * perPage, page * perPage));
  const totalPages = computed(() => Math.ceil(data.length / perPage));

  const goToNextPage = () => {
    if (page !== Math.ceil(data.length / perPage)) {
      page += 1;
    }
  };

  const goToBackPage = () => {
    if (page !== 1) {
      page -= 1;
    }
  };

  const goToPage = (numPage: number) => {
    if (numPage >= 1 && numPage <= totalPages.value) {
      page = numPage;
    }
  };

  const getCurrentPage = () => {
    return page;
  };

  return { paginatedData, totalPages, getCurrentPage, goToNextPage, goToBackPage, goToPage };
}
