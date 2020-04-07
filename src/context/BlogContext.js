import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blog':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return;
    }
};

export const BlogProvider = ({ children }) =>
{
    const [state, dispatch] = useReducer(reducer, [])
    
    //Adding blog posts function
    const addBlogPosts = () =>
    {
        dispatch({type:'add_blog'})
    }

    return (
      <BlogContext.Provider value={{ data: state, addBlogPosts }}>
        {children}
      </BlogContext.Provider>
    );
};

export default BlogContext;