export default class BubbleSort {
    constructor(_list) {
        const list = _list;

        const swap = (list, a, b) => {
            const temp = list[a];
            list[a] = list[b];
            list[b] = temp;
        };

        const bubbleSort = list => {
            if(Array.isArray(list)) {
                if (list.length === 0) {
                    return [];
                }

                for (let i = list.length - 1; i > 0; i --) {
                    for (let j = list.length - 1 ; j >= list.length - i; j --) {
                        if (list[j-1] > list[j]) {
                            swap(list, j, j-1);
                        }
                    }
                }

                return list;
            }
        };

        return bubbleSort(list);
    }
}