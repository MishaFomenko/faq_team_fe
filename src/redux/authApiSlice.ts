import { apiSlice } from 'redux/apiSlice';
import {
  RequestLogin,
  RequestNewPass,
  RequestRegistration,
  RequestUpdateUser,
  RequestVerifyOtp,
  RequestVerifyOtp,
  ResponseGetUser,
  ResponseLogin,
  ResponseRegistration,
  ResponseVerifyOtp,
} from 'redux/types';

import { apiEndpoints } from 'const/apiEndpoints';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, RequestLogin>({
      query: data => ({
        url: `${apiEndpoints.signIn}`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<ResponseRegistration, RequestRegistration>({
      query: data => ({
        url: `${apiEndpoints.signUp}`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query<ResponseGetUser, string>({
      query: id => ({
        url: `${apiEndpoints.getUser}/${id}`,
      }),
    }),
    findUser: builder.mutation<ResponseGetUser[], { token: string }>({
      query: data => ({
        url: `${apiEndpoints.findUser}`,
        method: 'POST',
        body: data,
      }),
    }),
    restorePass: builder.mutation({
      query: data => ({
        url: `${apiEndpoints.restorePassword}`,
        method: 'POST',
        body: data,
      }),
    }),
    newPass: builder.mutation<void, RequestNewPass>({
      query: data => ({
        url: `${apiEndpoints.newPassword}`,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<ResponseVerifyOtp, RequestVerifyOtp>({
      query: data => ({
        url: `${apiEndpoints.verifyOtp}`,
        method: 'POST',
        body: data,
      }),
    }),
    update: builder.mutation<void, { id: string; data: RequestUpdateUser }>({
      query: ({ id, data }) => ({
        url: `${apiEndpoints.updateUser}/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getTotalSales: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSales}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getAverageSales: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getAverageSales}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getNumberOfOrders: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getNumberOfOrders}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getTotalSalesPerMonth: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSalesPerMonth}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getTotalSalesPerCategory: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getTotalSalesPerCategory}?userId=${id}`,
        method: 'GET',
      }),
    }),
    getLastOrders: builder.query({
      query: id => ({
        url: `${apiEndpoints.getOrders}${apiEndpoints.getLastOrders}?userId=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useRestorePassMutation,
  useFindUserMutation,
  useUpdateMutation,
  useGetUserQuery,
  useNewPassMutation,
  useVerifyOtpMutation,
  useGetAverageSalesQuery,
  useGetLastOrdersQuery,
  useGetNumberOfOrdersQuery,
  useGetTotalSalesPerCategoryQuery,
  useGetTotalSalesPerMonthQuery,
  useGetTotalSalesQuery,
} = appApiSlice;
