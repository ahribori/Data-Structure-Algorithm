export default class InsertionSort {
    constructor(_list) {
        const list = _list;

        const insertionSort = list => {
            if (Array.isArray(list)) {
                if (list.length === 0) {
                    return [];
                }

                for (let i = 1; i < list.length; i++) {
                    for (let j = 0; j < i; j++) {
                        if (list[i] < list[j]) {
                            const temp = list[j];
                            list[j] = list[i];
                            list[i] = temp;
                        }
                    }
                }

                return list;
            }
        };
        return insertionSort(list);
    }
}