import { Component } from '@angular/core';

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
  onClickMe() {
    this.done = !this.done;
  }
}
