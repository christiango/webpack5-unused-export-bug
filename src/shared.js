import * as React from 'react';

const ErrorDialog = React.lazy(() => import( './ErrorDialog').then((m) => ({
    default: m.ErrorDialog
})));

export function doSharedStuff() {
    return React.createElement(ErrorDialog, null);
}
