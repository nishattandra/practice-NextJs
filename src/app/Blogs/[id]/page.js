import React from 'react';

const SingleBlogPage = ({params}) => {
    console.log(params.id)
    return (
        <div>
            SingleBlogPage{params.id}
        </div>
    );
};

export default SingleBlogPage;