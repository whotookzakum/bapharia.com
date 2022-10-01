import Polyglot from 'node-polyglot';
const polyglot = new Polyglot();

export function t(key, resource, interpolation) {
    loadResource(resource);
    return polyglot.t(key, interpolation)
}

function loadResource(resource) {
    polyglot.extend(resource);
}

