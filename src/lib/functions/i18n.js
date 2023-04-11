import Polyglot from 'node-polyglot';
const polyglot = new Polyglot();

export function t(key, resource, interpolation) {
    polyglot.extend(resource);
    return polyglot.t(key, interpolation)
}

