import createDataContext from "./createDataContext";

//Reducer
const reducer = (state, action) =>
{
    switch (action.type) {
        case 'add_blog':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
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


//Exporting Context and Provider to Children
export const { Context, Provider } = createDataContext(
         reducer, //Passing Reducer
         { addBlogPosts }, //Passing Actions
         [] //Passing Initial State
);
       




import createDataContext from './createDataContext';

//Reducer
const reducer = (state, action) =>
{
    switch (action.type)
    {
        case 'add_blog':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

//Actions
const addBlogPosts = (dispatch) =>
{
    return () =>
    {
        dispatch({ type: });
    }
};


//Exporting Context and Provider to Children
export const { Context, Provider } = createDataContext(
    reducer, //Passing Reducer
    { addBlogPosts }, //Passing Actions
    [] //Passing Initial State
);

//write in home screen to use context
//import React, {useState, useContext} from 'react';
//import {Context as BlogContext} from '../context/BlogContext';
//const {state, addBlogPosts} = useContext(BlogContext);