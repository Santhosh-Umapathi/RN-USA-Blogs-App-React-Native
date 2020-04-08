import createDataContext from "./createDataContext";

//Reducer
const reducer = (state, action) =>
{
    switch (action.type) {
      case "add_blog":
        return [
          ...state,
          {
            id: `${Math.floor(Math.random() * 9999)}`,
            title: `Blog Post #${state.length + 1}`,
          },
        ];

      case "delete_blog":
        return state.filter((blogPost) => blogPost.id !== action.payload);

      default:
        return state;
    }
};

//Actions
const addBlogPosts = (dispatch) =>
{
    return () =>
    {
          dispatch({ type: "add_blog" });
    }
};

const deleteBlogPosts = (dispatch) =>
{
    return (id) =>
    {
        dispatch({ type: 'delete_blog', payload: id });
    }
}



//Exporting Context and Provider to Children
export const { Context, Provider } = createDataContext(
         reducer, //Passing Reducer
         { addBlogPosts, deleteBlogPosts }, //Passing Actions
         [] //Passing Initial State
       );