export class ToDo {
  constructor(private _taskName: string, private _status: string) {}
  public get taskName(): string {
    return this._taskName;
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
}
