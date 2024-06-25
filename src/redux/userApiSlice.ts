import { apiSlice } from 'redux/apiSlice';

import { paths } from 'const/paths';

import { ResponseGetUser } from './types';

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<ResponseGetUser, void>({
      query: () => ({
        url: `${paths.getUser}/user`,
      }),
    }),

    getPublicInfo: builder.query<ResponseGetUser, string | undefined>({
      query: id => ({
        url: `${paths.getUser}/user/${id}`,
      }),
    }),

    getIsFollowing: builder.query<boolean, string>({
      query: id => ({
        url: `${paths.getUser}/${id}/is-following`,
      }),
    }),

    followUser: builder.mutation<void, string>({
      query: follow_target_id => ({
        url: `${paths.getUser}/${follow_target_id}/follow`,
        method: 'POST',
      }),
    }),

    deleteMe: builder.mutation<void, string>({
      query: () => ({
        url: `${paths.getUser}/user/delete`,
        method: 'DELETE',
      }),
    }),
    getCardInfo: builder.query({
      query: () => ({
        url: `${paths.getUser}/get-card-info`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useGetIsFollowingQuery,
  useFollowUserMutation,
  useGetPublicInfoQuery,
  useDeleteMeMutation,
  useGetCardInfoQuery,
} = userApiSlice;
