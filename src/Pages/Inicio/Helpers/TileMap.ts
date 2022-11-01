export default class tilemap {
  tileSize: number;
  soil1: HTMLImageElement;
  soil2: HTMLImageElement;
  soil3: HTMLImageElement;
  soil4: HTMLImageElement;
  soil5: HTMLImageElement;
  soil6: HTMLImageElement;
  soil7: HTMLImageElement;
  soil8: HTMLImageElement;
  soil9: HTMLImageElement;
  soilL: HTMLImageElement;
  soilR: HTMLImageElement;
  soil: HTMLImageElement;
  carrot1: HTMLImageElement;
  carrot2: HTMLImageElement;
  carrot3: HTMLImageElement;
  carrot4: HTMLImageElement;

  constructor(tileSize: number) {
    this.tileSize = tileSize;
    // Background para la primera layaer
    this.soil1 = this.images('../../../Assets/Tiles/soil-1.png');
    this.soil2 = this.images('../../../Assets/Tiles/soil-2.png');
    this.soil3 = this.images('../../../Assets/Tiles/soil-3.png');
    this.soil4 = this.images('../../../Assets/Tiles/soil-4.png');
    this.soil5 = this.images('../../../Assets/Tiles/soil-5.png');
    this.soil6 = this.images('../../../Assets/Tiles/soil-6.png');
    this.soil7 = this.images('../../../Assets/Tiles/soil-7.png');
    this.soil8 = this.images('../../../Assets/Tiles/soil-8.png');
    this.soil9 = this.images('../../../Assets/Tiles/soil-9.png');
    this.soilR = this.images('../../../Assets/Tiles/soil-R.png');
    this.soilL = this.images('../../../Assets/Tiles/soil-L.png');
    this.soil = this.images('../../../Assets/Tiles/soil.png');
    // Las plantas y sus estados
    this.carrot1 = this.images('../../../Assets/Tiles/carrot1.png');
    this.carrot2 = this.images('../../../Assets/Tiles/carrot2.png');
    this.carrot3 = this.images('../../../Assets/Tiles/carrot3.png');
    this.carrot4 = this.images('../../../Assets/Tiles/carrot4.png');
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
    [6, 7, 7, 7, 8],
    [3, 10, 11, 9, 5],
    [3, 10, 11, 9, 5],
    [3, 10, 11, 9, 5],
    [0, 1, 1, 1, 2]
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
            image = this.soil1;
            break;
          case 1:
            image = this.soil2;
            break;
          case 2:
            image = this.soil3;
            break;
          case 3:
            image = this.soil4;
            break;
          case 4:
            image = this.soil5;
            break;
          case 5:
            image = this.soil6;
            break;
          case 6:
            image = this.soil7;
            break;
          case 7:
            image = this.soil8;
            break;
          case 8:
            image = this.soil9;
            break;
          case 9:
            image = this.soilR;
            break;
          case 10:
            image = this.soilL;
            break;
          case 11:
            image = this.soil;
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