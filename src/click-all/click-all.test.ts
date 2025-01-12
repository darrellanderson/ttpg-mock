import { Button } from "@tabletop-playground/api";
import { clickAll } from "./click-all";
import { MockButton } from "../mock/widget/text-widget-base/button/mock-button";

it("clickAll", () => {
    const button: Button = new MockButton();
    clickAll(button);
});
