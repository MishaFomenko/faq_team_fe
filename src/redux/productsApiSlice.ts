import { apiSlice } from 'redux/apiSlice';

import { apiEndpoints } from 'const/apiEndpoints';

import {
  RequestGetProductsWithFilters,
  ResponseGetProductsWithFilters,
} from './types';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<
      ResponseGetProductsWithFilters,
      RequestGetProductsWithFilters
    >({
      query: ({ search, size, color, min, max, style, page, limit, order }) => {
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (size) params.append('size', size);
        if (color) params.append('color', color);
        if (min) params.append('min', min.toString());
        if (max) params.append('max', max.toString());
        if (style) params.append('style', style);
        if (page) params.append('page', page.toString());
        if (limit) params.append('limit', limit.toString());
        if (order) params.append('order', order);

        return {
          url: `${apiEndpoints.getAllProducts}?${params.toString()}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } =
  productsApiSlice;
