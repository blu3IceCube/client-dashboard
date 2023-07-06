import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL_ENDPOINT }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
