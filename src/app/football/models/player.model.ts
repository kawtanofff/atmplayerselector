export class Player {
  constructor(
    public id: number | null = null,
    public firstName: string = '',
    public lastName: string = '',
    public description: string = '',
    public currentClub: string = '',
    public age: number = 0,
    public rating: number = 0,
    public imageUrl: string = ''
  ) {
  }
}
