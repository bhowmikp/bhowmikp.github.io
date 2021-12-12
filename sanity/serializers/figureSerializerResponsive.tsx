/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
import urlFor from '@Service/sanityImageService';
import React, { ReactElement } from 'react';
import { IImage } from '@Interfaces/image';
import Image from 'next/image';

export const figureSerializerResponsive = {
    types: {
        // eslint-disable-next-line react/display-name
        figureResponsive: (props: { node: IImage }): ReactElement => (
            // eslint-disable-next-line react-hooks/rules-of-hooks

            <figure>
                <Image
                    src={urlFor(props.node.image).url()}
                    alt={props.node.alt}
                    width={props.node.width}
                    height={props.node.height}
                    layout="responsive"
                />

                <figcaption>{props.node.caption}</figcaption>
            </figure>
        )
    }
};

export default figureSerializerResponsive;
