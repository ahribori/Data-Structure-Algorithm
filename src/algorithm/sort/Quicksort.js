export default class Quicksort {
    constructor(_list) {
        const list = _list;
        const quicksort = list => {
            if (Array.isArray(list)) {
                if (list.length === 0) {
                    return [];
                }
                const lt = [];
                const gt = [];
                const pivot = list[0];
                for (let i = 0; i < list.length; i++) {
                    if (list[i] < pivot) {
                        lt.push(list[i]);
                    } else if (list[i] > pivot) {
                        gt.push(list[i]);
                    }
                }
                return quicksort(lt).concat(pivot, quicksort(gt));
            }
        };
        return quicksort(list);
    }
}