import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MenWomenSelector, FrontPageCard } from '../index';

import { cardsData } from '../../data/cardsData'

import './FrontPageSection.css';

type FrontPageSectionProps = {
  text: string;
  children?: React.ReactNode;
}

const options: (keyof typeof cardsData)[] = ['hombres', 'mujeres', 'unisex'];


export const FrontPageSectionsAnim = ({text}: FrontPageSectionProps) => {
  const [active, setActive] = useState(0);

  const ref = useRef(null)
  const inView = useInView(ref, { once: true });

  const cardsArray = cardsData[options[active]];

  return (
    <motion.section
      ref={ref}
      className='front-page-section'
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 1.1, ease: 'easeInOut' }}
    >

      <div>
        <h3> {text} </h3>
      </div>

      <MenWomenSelector
        active={active}
        setActive={setActive}
      >
      </MenWomenSelector>

      <div className='cards-list'>
        {cardsArray.map((card, idx) => (
          <FrontPageCard
            key={idx}
            cardText={card.cardsText}
            cardDescription={card.cardDescription}
            linkCard={card.linkCard}
          />
        ))}
      </div>
    </motion.section>
  ) 
}