export class Task {
  constructor(
    public readonly id: number,
    public name: string,
    public done: boolean,
    public favorite: boolean,
    public create_at: Date,
    public user_id: number,
  ) {}
}
