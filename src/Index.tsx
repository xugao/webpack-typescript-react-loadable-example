import * as React from "react";

import Loadable from "react-loadable";

export const LoadableHello = Loadable({
	loader: () => import(/* webpackChunkName: "hello" */ "./Hello"),
	loading: () => <div>loading ...</div>
});
