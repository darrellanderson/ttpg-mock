import { Delegate } from "@tabletop-playground/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class MockDelegate<T extends (...args: any[]) => any>
    implements Delegate<T>
{
    private _listener: T | undefined;

    add(fn: T): void {
        this._listener = fn;
    }

    remove(fn: T): void {
        if (this._listener === fn) {
            this._listener = undefined;
        }
    }

    clear(): void {
        this._listener = undefined;
    }

    _trigger(...args: Parameters<T>): void {
        if (this._listener) {
            this._listener(...args);
        }
    }
}
