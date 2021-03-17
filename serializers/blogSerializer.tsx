import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const blogSerializer = {
    types: {
        block: (props) => {
            const { style = 'normal' } = props.node;

            if (/^h1/.test(style)) {
                return (
                    <h1 className="" id={props.children[0].replace(/\s/g, '-')}>
                        {props.children}
                    </h1>
                );
            }

            if (/^h2/.test(style)) {
                return <h1>{props.children}</h1>;
            }

            if (/^h3/.test(style)) {
                return <h1>{props.children}</h1>;
            }

            if (/^h4/.test(style)) {
                return <h1>{props.children}</h1>;
            }

            if (/^h5/.test(style)) {
                return <h1>{props.children}</h1>;
            }

            if (/^h6/.test(style)) {
                return <h1>{props.children}</h1>;
            }

            if (/^p/) {
                return <p className="test">{props.children}</p>;
            }

            return BlockContent.defaultSerializers.types.block(props);
        },
        code: (props) => <p>Hello world</p>,
        figure: (props) => <p>Image</p>
    }
};
export default blogSerializer;
