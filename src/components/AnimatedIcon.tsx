import React, { forwardRef } from "react";
import { Player } from "@lordicon/react";

interface AnimatedIconProps {
  icon: object; // Accetta un oggetto JSON
  size?: number;
}

const AnimatedIcon = forwardRef<Player, AnimatedIconProps>(
  ({ icon, size = 48 }, ref) => {
    return (
      <div>
        <Player
          ref={ref}
          icon={icon}
          size={size}
          onReady={() => {
            // Imposta l'icona come statica di default (frame 0)
            if (ref && typeof ref !== "function") {
              ref.current?.goToFrame(0);
            }
          }}
        />
      </div>
    );
  }
);

export default AnimatedIcon;
