/* eslint-disable react/display-name */
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const blogSerializer = {
    list: (props) => {
        const { type } = props;
        const bullet = type === 'bullet';
        if (bullet) {
            return <ul className="blog-ul">{props.children}</ul>;
        }
        return <ol className="blog-ol">{props.children}</ol>;
    },
    listItem: (props) => <li>{props.children}</li>,
    types: {
        block: (props) => {
            switch (props.node.style) {
                case 'h1':
                    return (
                        <h1 className="blog-h1" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h1>
                    );
                case 'h2':
                    return (
                        <h2 className="blog-h2" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h2>
                    );
                case 'h3':
                    return (
                        <h3 className="blog-h3" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h3>
                    );
                case 'h4':
                    return (
                        <h4 className="blog-h4" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h4>
                    );
                case 'h5':
                    return (
                        <h5 className="blog-h5" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h5>
                    );
                case 'h6':
                    return (
                        <h6 className="blog-h6" id={props.children[0].replace(/\s/g, '-')}>
                            {props.children}
                        </h6>
                    );
                case 'blockquote':
                    return <blockquote className="blog-blockquote">{props.children}</blockquote>;
                default:
                    if (/^p/) {
                        return <p className="blog-text">{props.children}</p>;
                    }
                    return BlockContent.defaultSerializers.types.block(props);
            }
        },
        code: (props) => <p>Hello world</p>,
        figure: (props) => <p>Image</p>
    }
};
export default blogSerializer;
