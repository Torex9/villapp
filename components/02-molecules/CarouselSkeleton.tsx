'use client';

import { CarouselNavigationButton } from '../01-atoms/CarouselNavigationButton';
import { useWindowSize } from '../../lib/useWindowSize';
import clsx from 'clsx';
import { reduce, set } from 'lodash';
import { CSSProperties, ReactNode, useMemo, useRef, useState } from 'react';
import type SwiperType from 'swiper';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface CarouselThumb {
  content: ReactNode;
  className?: string;
  style?: CSSProperties;
  activeClassName?: string;
}

export interface CarouselSkeletonProps {
  id?: string;
  className?: string;
  navigation?: boolean | 'auto';
  thumbs?: CarouselThumb[];
  slidesPerView?: number;
  /** define how many slides to show at difference device sizes */
  breakpoints?: Record<string, number>;
  children?: ReactNode[];
  footer?: ReactNode;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
}

export function CarouselSkeleton(props: CarouselSkeletonProps) {
  const ref = useRef<SwiperType>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // READ-ONLY!
  const windowSize = useWindowSize();
  const slidesPerView = props.slidesPerView ?? 1;

  const slides = useMemo(() => {
    if (!props.children) return [];
    return props.children.map((child, index) => (
      <SwiperSlide key={`slide-${index}`} style={{ height: 'unset' }}>
        {child}
      </SwiperSlide>
    ));
  }, [props.children]);

  const breakpoints = useMemo(() => {
    if (!props.breakpoints) return undefined;
    return reduce(
      props.breakpoints,
      (result, value, key) => {
        return {
          ...result,
          [key]: {
            slidesPerView: value
          }
        };
      },
      {}
    );
  }, [props.breakpoints]);

  const navigationEnabled = useMemo(() => {
    if (props.navigation == undefined || props.navigation === true) return true;
    if (props.navigation === false) return false;

    // auto - hide/show depending on the number of slides vs the breakpoints vs the window size
    let currentSlidesPerView = slidesPerView;
    if (props.breakpoints) {
      for (const key in props.breakpoints) {
        if (windowSize.width > parseFloat(key)) currentSlidesPerView = props.breakpoints[key];
      }
    }

    return slides.length > currentSlidesPerView;
  }, [props.navigation, props.breakpoints, slidesPerView, slides, activeSlide, canPrev, canNext, windowSize]);

  const updateNavigation = (swiper: SwiperType) => {
    setCanPrev(!swiper.isLocked && (swiper.params.loop || !swiper.isBeginning));
    setCanNext(!swiper.isLocked && (swiper.params.loop || !swiper.isEnd));
    setActiveSlide(swiper.activeIndex);
  };

  const thumbs = useMemo(() => {
    if (!props.thumbs) return null;
    return props.thumbs?.map((thumb, index) => (
      <li key={`thumb-${index}`} className="flex flex-1 flex-col" onClick={() => ref.current?.slideTo(index)}>
        <button
          className={clsx(thumb.className, activeSlide === index && thumb.activeClassName)}
          style={thumb.style}
          data-active={activeSlide === index}
        >
          {thumb.content}
        </button>
      </li>
    ));
  }, [props.thumbs, activeSlide, ref.current]);

  return (
    <div className={clsx(props.className)} id={props.id}>
      {thumbs && <ul className="hidden flex-row gap-6 p-0 lg:flex">{thumbs}</ul>}
      <Swiper
        onBeforeInit={(swiper) => {
          set(ref, 'current', swiper);
          updateNavigation(swiper);
        }}
        onActiveIndexChange={updateNavigation}
        onLock={updateNavigation}
        onUnlock={updateNavigation}
        watchOverflow
        spaceBetween={16}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        modules={[Navigation, Thumbs, Autoplay]}
        autoplay={props.autoplay}
        watchSlidesProgress
      >
        {slides}
      </Swiper>
      {navigationEnabled && (
        <div className="mt-6 flex items-center justify-between">
          <div>{props.footer}</div>
          <div className="flex items-center">
            <CarouselNavigationButton direction="left" disabled={!canPrev} onClick={() => ref.current?.slidePrev()} />
            <CarouselNavigationButton direction="right" disabled={!canNext} onClick={() => ref.current?.slideNext()} />
          </div>
        </div>
      )}
    </div>
  );
}
