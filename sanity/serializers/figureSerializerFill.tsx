/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
import urlFor from '@Service/sanityImageService';
import React, { ReactElement } from 'react';
import { IImage } from '@Interfaces/image';
import Image from 'next/image';

export const figureSerializerFill = {
    types: {
        // eslint-disable-next-line react/display-name
        figureFill: (props: { node: IImage }): ReactElement => (
            // eslint-disable-next-line react-hooks/rules-of-hooks

            <figure>
                <Image
                    src={urlFor(props.node.image).url()}
                    alt={props.node.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                />

                <figcaption>{props.node.caption}</figcaption>
            </figure>
        )
    }
};

export default figureSerializerFill;
