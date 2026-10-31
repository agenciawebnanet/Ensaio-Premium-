import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Scene } from '../data/catalogData';

interface SceneGridProps {
  scenes: Scene[];
  selectedCodes: string[];
  onToggleSelect: (cod: string) => void;
  onOpenLightbox: (scene: Scene) => void;
}

export const SceneGrid: React.FC<SceneGridProps> = ({
  scenes,
  selectedCodes,
  onToggleSelect,
  onOpenLightbox,
}) => {
  return (
    <ul className="grade" role="list">
      {scenes.map((scene, index) => {
        const isSelected = selectedCodes.includes(scene.cod);
        const codeDisplay = `N° ${scene.cod}`;

        // Top 8 photos are above the fold: load immediately with high priority
        const isAboveTheFold = index < 8;

        return (
          <li
            key={scene.cod}
            className={`cena ${isSelected ? 'escolhida' : ''}`}
            data-cod={scene.cod}
          >
            <div
              className="foto-container relative bg-[#17150f] overflow-hidden"
              style={{
                aspectRatio: `${scene.width} / ${scene.height}`,
              }}
            >
              <button
                type="button"
                className="foto-btn w-full h-full block"
                aria-label={`Ver a cena ${scene.cod} grande`}
                onClick={() => onOpenLightbox(scene)}
              >
                <img
                  src={scene.thumb}
                  width={scene.width}
                  height={scene.height}
                  alt={`Cena ${scene.cod}`}
                  loading={isAboveTheFold ? 'eager' : 'lazy'}
                  fetchPriority={isAboveTheFold ? 'high' : 'auto'}
                  decoding="async"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </button>

              <button
                type="button"
                className={`marcar ${isSelected ? 'selecionada' : ''}`}
                aria-pressed={isSelected}
                aria-label={isSelected ? `Remover cena ${scene.cod}` : `Escolher a cena ${scene.cod}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSelect(scene.cod);
                }}
              >
                {isSelected ? (
                  <Check className="w-4 h-4 text-[#0e0d0b]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#ede6da]" />
                )}
              </button>
            </div>

            <div className="rot">
              <span className="num">{codeDisplay}</span>
              {scene.nota && <span className="nota">{scene.nota}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
