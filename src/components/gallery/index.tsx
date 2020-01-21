import React, { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { GalleryContainer, GalleryComponent } from './styles';
import { findIdealNodeSearch } from './utils/image-helper';
import { computeRowLayout } from './layouts/row-layout';
import Photo from './photo/photo';

export type Photo = {
    id: string;
    src: string;
    width: number;
    height: number;
};

type Props = {
    photos: Photo[];
    margin?: number;
    limitNodeSearch?: number;
    targetRowHeight?: number;
};

const Gallery = React.memo(
    ({ photos, margin = 2, limitNodeSearch = 2, targetRowHeight = 300 }: Props) => {
        const [containerWidth, setContainerWidth] = useState(0);
        const galleryItem = useRef(null);

        useEffect(() => {
            let animationFrameId: number;
            const observer = new ResizeObserver(entries => {
                const newWidth = entries[0].contentRect.width;
                if (containerWidth !== newWidth) {
                    animationFrameId = window.requestAnimationFrame(() => {
                        setContainerWidth(Math.floor(newWidth));
                    });
                }
            });

            const node = galleryItem.current;
            if (node !== null) {
                observer.observe(node);
            }

            return () => {
                observer.disconnect();
                window.cancelAnimationFrame(animationFrameId);
            };
        });

        if (!containerWidth) {
            return <GalleryComponent ref={galleryItem}>&nbsp;</GalleryComponent>;
        }

        const width = containerWidth - 1;
        if (containerWidth >= 450) {
            limitNodeSearch = findIdealNodeSearch(containerWidth, targetRowHeight);
        }

        const images = computeRowLayout({
            containerWidth: width,
            limitNodeSearch,
            targetRowHeight,
            margin,
            photos
        });

        return (
            <GalleryContainer>
                <GalleryComponent ref={galleryItem}>
                    {images.map((thumb: Photo) => {
                        return <Photo key={thumb.id} photo={thumb} margin={margin} />;
                    })}
                </GalleryComponent>
            </GalleryContainer>
        );
    }
);

export default Gallery;
