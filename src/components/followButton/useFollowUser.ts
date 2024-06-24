import { useState } from 'react';

import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler.ts';

import {
  useFollowUserMutation,
  useGetIsFollowingQuery,
} from '../../redux/userApiSlice.ts';

export const useFollowUser = ({ userId }: { userId?: string }) => {
  const [error, setError] = useState<string>();

  const { data: isFollowing, refetch } = useGetIsFollowingQuery(userId!);
  const [followUser] = useFollowUserMutation();

  const handleFollow = async () => {
    try {
      await followUser(userId!);
      refetch();
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError(errMsg);
      } else if (isErrorWithMessage(err)) {
        setError(err.message);
      }
    }
  };

  return { handleFollow, isFollowing, error };
};
