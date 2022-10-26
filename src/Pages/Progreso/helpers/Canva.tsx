import React, { useRef, useEffect } from 'react';
import TileMap from './TileMap';

const Canva: React.FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const TileSize = 64;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tileMap = new TileMap(TileSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line no-empty
    if (canvas == null) {
      return;
    }
    const context = canvas?.getContext('2d');
    // eslint-disable-next-line no-empty
    if (context == null) {
      return;
    }
    tileMap.draw(canvas, context);
  }, [tileMap]);
  return <canvas ref={canvasRef}></canvas>;
};

export default Canva;
