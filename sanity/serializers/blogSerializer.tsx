/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, { ReactElement, useRef, useContext, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { coyWithoutShadows } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import urlFor from '@Service/sanityImageService';
import { IImage } from '@Interfaces/image';
import Image from 'next/image';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useOnScreen } from '@Hooks/useOnScreen';
import { useTheme } from 'next-themes';
import { BlogContext } from '@Contexts/blogContext';

import { AdBanner } from '@Components/AdBanner';

const blogSerializer = {
    list: (props) => {
        const { type } = props;
        const bullet = type === 'bullet';
        if (bullet) {
            return <ul className="blog-ul">{props.children}</ul>;
        }
        return <ol className="blog-ol">{props.children}</ol>;
    },
    // eslint-disable-next-line no-underscore-dangle
    listItem: (props) => <li key={props.node._key}>{props.children}</li>,
    marks: {
        link: (props) => (
            <Link href={props.mark.href}>
                <a className="blog-link">{props.children[0]}</a>
            </Link>
        )
    },
    types: {
        block: (props) => {
            const ref = useRef<HTMLDivElement>();
            const [onScreenStatus, refElement] = useOnScreen<HTMLDivElement>(ref);
            const blogContext = useContext(BlogContext);

            useEffect(() => {
                if (
                    onScreenStatus === true &&
                    refElement.current !== undefined &&
                    refElement.current.id !== blogContext.state.id
                ) {
                    blogContext.setState({ id: refElement.current.id, onScreenStatus });
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [onScreenStatus, refElement]);

            switch (props.node.style) {
                case 'h1':
                    return (
                        <h1 className="blog-h1" id={props.children[0].replace(/\s/g, '-')} ref={ref}>
                            {props.children}
                        </h1>
                    );
                case 'h2':
                    return (
                        <h2 className="blog-h2" id={props.children[0].replace(/\s/g, '-')} ref={ref}>
                            {props.children}
                        </h2>
                    );
                case 'h3':
                    return (
                        <h3 className="blog-h3" id={props.children[0].replace(/\s/g, '-')} ref={ref}>
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
                    // eslint-disable-next-line no-constant-condition
                    if (/^p/) {
                        return props.children[0] === '' ? (
                            <p className="blog-text">&nbsp;</p>
                        ) : (
                            <p className="blog-text">{props.children}</p>
                        );
                    }
                    return BlockContent.defaultSerializers.types.block(props);
            }
        },
        code: (props) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { resolvedTheme } = useTheme();
            return (
                <SyntaxHighlighter
                    language={props.node.language}
                    showLineNumbers
                    wrapLongLines
                    style={resolvedTheme === 'dark' ? a11yDark : coyWithoutShadows}
                >
                    {props.node.code}
                </SyntaxHighlighter>
            );
        },
        horizontalRow: () => <hr className="blog-hr-style" />,
        figure: (props: { node: IImage }): ReactElement => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { resolvedTheme } = useTheme();

            return (
                <figure className="blog-image">
                    <Zoom
                        overlayBgColorStart={resolvedTheme === 'dark' ? '#2d3748D9' : '#ffffffD9'}
                        overlayBgColorEnd={resolvedTheme === 'dark' ? '#2d3748D9' : '#ffffffD9'}
                        closeText={`Unzoomed ${props.node.alt}`}
                        openText={`Zoomed ${props.node.alt}`}
                    >
                        <Image
                            src={urlFor(props.node.image).url()}
                            alt={props.node.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </Zoom>

                    <figcaption className="blog-image-caption">{props.node.caption}</figcaption>
                </figure>
            );
        },
        adBanner: (): ReactElement => <AdBanner />
    }
};

export default blogSerializer;
