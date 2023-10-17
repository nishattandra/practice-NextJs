import React from 'react';

const SingleBlogPage = ({params}) => {
    console.log(params.segments)

    const [year, id] = params.segments
    return (
        <div>
            SingleBlogPage {year} for {id}
        </div>
    );
};

export default SingleBlogPage;