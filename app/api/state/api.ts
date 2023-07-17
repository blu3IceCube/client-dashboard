import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "api/products/",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
