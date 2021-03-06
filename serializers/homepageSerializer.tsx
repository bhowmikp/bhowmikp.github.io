import { urlFor } from '@Service/sanityImageService';
import React from 'react';
import { IHomepageImage } from '@Interfaces/homepage';

const homepageSerializer = {
    types: {
        // eslint-disable-next-line react/display-name
        figure: (props: { node: IHomepageImage }) => {
            console.log(props);
            return (
                <figure>
                    <img src={urlFor(props.node.image).width(600).url()} alt={props.node.alt} />
                    <figcaption>{props.node.caption}</figcaption>
                </figure>
            );
        }
    }
};

export default homepageSerializer;
