export default class QuickSort {
    constructor(_list) {
        const list = _list;
        const quickSort = list => {
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

                return quickSort(lt).concat(pivot, quickSort(gt));
            }
        };
        return quickSort(list);
    }
}