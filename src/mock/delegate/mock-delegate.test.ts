import { MockDelegate } from "./mock-delegate";

it("constructor", () => {
    new MockDelegate<(number) => void>();
});

it("add", () => {
    const delegate = new MockDelegate<() => void>();

    let a = 0;
    const aHandler = () => {
        a++;
    };

    let b = 0;
    const bHandler = () => {
        b++;
    };

    delegate.add(aHandler);
    delegate.add(bHandler);
    delegate._trigger();
    expect(a).toEqual(0);
    expect(b).toEqual(1); // only last add called
});

it("remove", () => {
    const delegate = new MockDelegate<() => void>();

    let a = 0;
    const aHandler = () => {
        a++;
    };

    delegate.add(aHandler);
    delegate._trigger();
    expect(a).toEqual(1);

    delegate.remove(aHandler);
    delegate._trigger();
    expect(a).toEqual(1);
});

it("clear", () => {
    const delegate = new MockDelegate<() => void>();

    let a = 0;
    const aHandler = () => {
        a++;
    };
    delegate.add(aHandler);
    delegate._trigger();
    expect(a).toEqual(1);

    delegate.clear();
    delegate._trigger();
    expect(a).toEqual(1);
});
