export type TPostCreateRequest = {
  title: string,
  content: string,
};

export type TPost = TPostCreateRequest & {
  url: string,
};
