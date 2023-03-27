export type Error = {
  response: {
    data: {
      status: number;
      message: string;
      code: string;
    };
  };
};
