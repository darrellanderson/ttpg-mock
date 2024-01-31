import { MockDrawingLine } from "./mock-drawing-line";

it("clone", () => {
    const line = new MockDrawingLine();
    const clone = line.clone();
    expect(clone.points).toEqual(line.points);
    expect(clone.color).toEqual(line.color);
    expect(clone.thickness).toEqual(line.thickness);
    expect(clone.rounded).toEqual(line.rounded);
    expect(clone.normals).toEqual(line.normals);
    expect(clone.tag).toEqual(line.tag);
    expect(clone.emissiveStrength).toEqual(line.emissiveStrength);
    expect(clone.players).toEqual(line.players);
});
