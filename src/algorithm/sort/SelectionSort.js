export default class SelectionSort {
    constructor(_list) {
        const list = _list;

        const swap = (list, a, b) => {
            const temp = list[a];
            list[a] = list[b];
            list[b] = temp;
        };

        const selectionSort = list => {
            if (Array.isArray(list)) {
                if (list.length === 0) {
                    return [];
                }

                for (let i = 0; i < list.length; i++) {
                    let minIndex;
                    for (let j = i; j < list.length; j++) {
                        if (!minIndex || list[minIndex] > list[j]) {
                            minIndex = j;
                        }
                        console.log(j)
                    }
                    swap(list, i, minIndex);
                }

                return list;
            }
        };
        return selectionSort(list);
    }
}