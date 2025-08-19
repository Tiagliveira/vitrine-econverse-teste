import React from "react";

interface OverlaySectionProps {
  children: React.ReactNode;
  onclose: () => void;
}

const OverlaySection: React.FC<OverlaySectionProps> = ({ children, onclose }) => {
  return (
    <div className="overlay-backdrop" onClick={onclose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onclose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default OverlaySection;
