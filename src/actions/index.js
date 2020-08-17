import jsonph from "../api/jsonph";

export const fetchPosts = () => {
  //   const response = await jsonph.get("/posts");

  return {
    type: "FETCH_POSTS",
  };
};
