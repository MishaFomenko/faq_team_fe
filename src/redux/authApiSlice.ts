import { apiSlice } from 'redux/apiSlice';
import {
  RequestLogin,
  RequestNewPass,
  RequestRegistration,
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
        url: `${USERS_URL}${paths.getUser}/${id}`,
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
    saveGeneralInfo: builder.mutation({
      query: data => ({
        url: `${USERS_URL}${paths.saveGeneralInfo}`,
        method: 'POST',
        body: data,
      }),
    }),
    saveCardInfo: builder.mutation({
      query: data => ({
        url: `${USERS_URL}${paths.saveCardInfo}`,
        method: 'POST',
        body: { paymentMethod: data.paymentMethod, id: data.id },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useRestorePassMutation,
  useFindUserMutation,
  useNewPassMutation,
  useVerifyOtpMutation,
  useUpdateUserMutation,
  useSaveGeneralInfoMutation,
  useSaveCardInfoMutation,
  useGetUserQuery,
} = appApiSlice;
