import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@Clients/sanityClient';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: string): any => builder.image(source);

export default urlFor;
