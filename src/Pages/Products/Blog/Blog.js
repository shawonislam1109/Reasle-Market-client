import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/3 mx-auto mt-5 mb-16 lg:mb-28'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-xl font-medium text-slate-600'>Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-8">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-xl font-medium text-slate-600'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-8">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='text-xl font-medium text-slate-600'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-8">
                <div className="collapse-title text-xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className='text-xl font-medium text-slate-600'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;