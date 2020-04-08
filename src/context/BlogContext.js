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
            title: action.payload.title,
            content: action.payload.content
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
    return (title, content) =>
    {
      dispatch({ type: "add_blog", payload: {title, content} });
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