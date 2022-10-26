export default class tilemap {
  tileSize: number;
  grass: HTMLImageElement;
  constructor(tileSize: number) {
    this.tileSize = tileSize;
    this.grass = this.images('grass.png');
  }

  images(filename: string): HTMLImageElement {
    const img = new Image();
    img.src = `../../../Assets/Tiles/${filename}`;
    return img;
  }

  // cada bracket es una fila
  // el contenido o las imagenes estaran definidas por numeros asignados
  // 0 - pasto
  // Para mas layers se hace otro mapa y se vuelven a llamar las funciones.

  map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  draw(
    canvas: HTMLCanvasElement | null,
    context: CanvasRenderingContext2D | null | undefined
  ): void {
    this.setCanvasSize(canvas);
    this.clearCanvas(canvas, context);
    this.drawMap(context);
  }

  drawMap(context: CanvasRenderingContext2D | null | undefined): void {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];
        let image = null;
        switch (tile) {
          case 0:
            image = this.grass;
            break;
        }
        if (image != null && context != null) {
          context.drawImage(
            image,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
        }
      }
    }
  }

  clearCanvas(
    canvas: HTMLCanvasElement | null,
    context: CanvasRenderingContext2D | null | undefined
  ): void {
    if (context != null && canvas != null) {
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  setCanvasSize(canvas: HTMLCanvasElement | null): void {
    if (canvas != null) {
      canvas.height = this.map.length * this.tileSize;
      canvas.width = this.map[0].length * this.tileSize;
    }
  }
}
