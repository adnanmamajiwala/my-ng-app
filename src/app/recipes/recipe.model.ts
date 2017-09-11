export class Recipe {
  public name: string;
  public descripting: string;
  public imagePath: string;

  constructor(name: string, descripting: string, imagePath: string) {
    this.name = name;
    this.descripting = descripting;
    this.imagePath = imagePath;
  }
}
