export type Actions = any;

export interface State {}

export class Change<T> {
  constructor(public readonly previous: T, public readonly current: T) {}
}

export type Changes = { [K in keyof State]?: Change<State[K]> };

export class StarfieldState {
  public listeners: Map<any, (changes: Changes) => void> = new Map<
    any,
    (changes: Changes) => void
  >();

  public action(action: Actions) {
    const changes: Changes = {};
    switch (action.type) {
      default: {
        break;
      }
    }

    Object.keys(changes).forEach((key: string) => {
      (this as any)[`_${key}`] = (changes as any)[key].current;
    });

    this.onChange(changes);
  }

  private onChange(changes: Changes) {
    this.listeners.forEach((cb) => {
      cb(changes);
    });
  }
}

export const AppState = new StarfieldState();
