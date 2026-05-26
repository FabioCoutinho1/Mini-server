export class User {
  constructor(
    public readonly id: number,
    public user_name: string,
    public password: string,
    public create_at: Date,
  ) {}
}
