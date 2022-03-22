const actionTypes = {
  SET_VALUE: 'SET_VALUE',
} as const;

export const setValue = (value: string) => {
  return {
    type: actionTypes.SET_VALUE,
    payload: {
      value,
    },
  };
};

export type GlobalActions = ReturnType<typeof setValue>;
