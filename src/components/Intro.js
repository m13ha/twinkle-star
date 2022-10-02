import React from 'react';
import { useAppContext } from '../context/app-context';
import { ChevronLeft, ChevronRight, ChevronDoubleRight } from '../resources';

const Intro = () => {
  const { introPresentText, handleNextIntro, handlePrevIntro, skipIntro } =
    useAppContext();
  return (
    <section className='intro'>
      <button onClick={handlePrevIntro}>
        <ChevronLeft />
      </button>
      <article className='text'>{introPresentText}</article>
      <button onClick={handleNextIntro}>
        <ChevronRight />
      </button>
      <button onClick={skipIntro}>
        <ChevronDoubleRight />
      </button>
    </section>
  );
};

export default Intro;
