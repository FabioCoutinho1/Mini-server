export class Task {
  constructor(
    public readonly id: number,
    public name: string,
    public done: boolean,
    public favorite: boolean,
  ) {}
}
