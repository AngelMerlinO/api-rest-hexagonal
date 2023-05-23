export class Podcast {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly producer: string,
    readonly duration: number,
    readonly categoria: string
  ) {}
}
