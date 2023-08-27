import React from 'react';
import CV from '../../assets/Priya Makkar.pdf';
import { TfiArrowTopRight } from "react-icons/tfi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target='_blank' rel="noreferrer" className="btn">
        My Resume <TfiArrowTopRight/>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;