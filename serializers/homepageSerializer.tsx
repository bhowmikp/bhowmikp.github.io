/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
import { urlFor } from '@Service/sanityImageService';
import React, { ReactElement } from 'react';
import { IHomepageImage } from '@Interfaces/homepage';
import { useAmp } from 'next/amp';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@Clients/sanityClient';

export const config = { amp: 'hybrid' };

const homepageSerializer = {
    types: {
        // eslint-disable-next-line react/display-name
        figure: (props: { node: IHomepageImage }): ReactElement => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isAmp = useAmp();
            const imageProps = useNextSanityImage(client, props.node.image);

            return (
                <>
                    {isAmp ? (
                        <div>
                            <amp-img
                                width="600"
                                height="600"
                                src={urlFor(props.node.image).url()}
                                alt={props.node.alt}
                            />
                            <p>{props.node.caption}</p>
                        </div>
                    ) : (
                        <figure>
                            <Img {...imageProps} height="600" />
                            <figcaption>{props.node.caption}</figcaption>
                        </figure>
                    )}
                </>
            );
        }
    }
};

export default homepageSerializer;
