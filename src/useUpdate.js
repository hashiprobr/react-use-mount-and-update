import { useEffect } from 'react';

export default function useUpdate(create, deps) {
    if (!Array.isArray(deps) || deps.length === 0) {
        throw TypeError('Second argument of useUpdate must be a non-empty array');
    }

    let mounted = true;
    let inst;

    function willUnmount() {
        if (inst) {
            inst();
        }
        mounted = false;
    }

    function didUpdate() {
        if (mounted) {
            inst = create();
        }
        return willUnmount;
    }

    return useEffect(didUpdate, deps);
}
