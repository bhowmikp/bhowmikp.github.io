import { urlFor } from '@Service/sanityImageService';

export const homepageSerializer = {
    types: {
        figure: props => (
            <figure>
                <img
                    src={urlFor(props.node.image)
                        .width(600)
                        .url()}
                    alt={props.node.alt}
                />
                <figcaption>{props.node.caption}</figcaption>
            </figure>
        )
    }
}