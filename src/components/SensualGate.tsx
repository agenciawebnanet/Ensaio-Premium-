import React from 'react';
import { BRAND_LOGO } from '../data/catalogData';

interface SensualGateProps {
  onAccept: () => void;
  onReject: () => void;
}

export const SensualGate: React.FC<SensualGateProps> = ({ onAccept, onReject }) => {
  return (
    <div className="portao" role="dialog" aria-modal="true" aria-labelledby="portao-t">
      <div className="caixa">
        <div className="selo-wrapper" aria-hidden="true">
          <img
            src={BRAND_LOGO}
            alt="Premium Ensaio"
            className="selo-img"
          />
        </div>

        <h1 id="portao-t">Ensaio Sensual</h1>
        <p>Este catálogo é só para maiores de 18 anos.</p>

        <div className="acoes">
          <button
            type="button"
            className="btn-ouro"
            onClick={onAccept}
          >
            Tenho 18 anos ou mais
          </button>
          <button
            type="button"
            className="btn-linha"
            onClick={onReject}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};
