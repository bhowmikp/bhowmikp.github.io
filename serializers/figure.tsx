/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
import urlFor from '@Service/sanityImageService';
import React, { ReactElement } from 'react';
import { IImage } from '@Interfaces/image';
import { useAmp } from 'next/amp';
import Image from 'next/image';

export const config = { amp: 'hybrid' };

export const figureSerializer = {
    types: {
        // eslint-disable-next-line react/display-name
        figure: (props: { node: IImage }): ReactElement => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isAmp = useAmp();

            return (
                <>
                    {isAmp ? (
                        <div>
                            <amp-img
                                width={props.node.width}
                                height={props.node.height}
                                src={urlFor(props.node.image).url()}
                                alt={props.node.alt}
                            />
                            <p>{props.node.caption}</p>
                        </div>
                    ) : (
                        <figure>
                            <Image
                                src={urlFor(props.node.image).url()}
                                alt={props.node.alt}
                                width={props.node.width}
                                height={props.node.height}
                            />

                            <figcaption>{props.node.caption}</figcaption>
                        </figure>
                    )}
                </>
            );
        }
    }
};

export default figureSerializer;
