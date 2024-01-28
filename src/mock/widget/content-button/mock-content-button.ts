import {
    ContentButton,
    MulticastDelegate,
    Player,
    Widget,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";
import { MockWidget, MockWidgetParams } from "../mock-widget";

export type MockContentButtonParams = MockWidgetParams & {
    child?: Widget;
};

export class MockContentButton extends MockWidget implements ContentButton {
    private _child: Widget | undefined = undefined;

    onClicked: MulticastDelegate<(button: this, player: Player) => void> =
        new MockMulticastDelegate<(button: this, player: Player) => void>();

    constructor(params?: MockContentButtonParams) {
        super(params);
        if (params?.child) {
            this._child = params.child;
        }
    }

    _clickAsPlayer(player: Player): this {
        const onClicked = this.onClicked as MockMulticastDelegate<
            (button: this, player: Player) => void
        >;
        onClicked._trigger(this, player);
        return this;
    }

    getChild(): Widget | undefined {
        return this._child;
    }

    setChild(child?: Widget | undefined): ContentButton {
        this._child = child;
        return this;
    }
}
