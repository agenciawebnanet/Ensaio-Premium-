import React from 'react';
import { CatalogStep } from '../data/catalogData';

interface InstructionsProps {
  steps: CatalogStep[];
}

export const Instructions: React.FC<InstructionsProps> = ({ steps }) => {
  return (
    <section className="como" aria-label="Como escolher">
      <ol>
        {steps.map((s, idx) => (
          <li key={idx}>
            <span className="rn" aria-hidden="true">{s.num}</span>
            <b>{s.title}</b>
            <span>{s.desc}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
