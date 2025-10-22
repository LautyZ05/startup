export class CheckState {
  static AllGood = new CheckState('allgood');
  static NotGood = new CheckState('notgood');

  constructor(name) {
    this.name = name;
  }
}
