// const testNumOne = [2, 4, 3];
// const testNumTwo = [5, 6, 4];

// const testNumOne = [0];
// const testNumTwo = [0];

const testNumOne = [9, 9, 9, 9, 9, 9, 9];
const testNumTwo = [9, 9, 9, 9];

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const addTwoNumbers = (l1: number[], l2: number[]): ListNode => {
    let curry = 0;

    let listNodeOne: ListNode | null = setupNodes(l1);
    let listNodeTwo: ListNode | null = setupNodes(l2);

    const sumList = new ListNode(0);
    let current = sumList;

    while (listNodeOne || listNodeTwo || curry) {
        const sum = (listNodeOne?.val || 0) + (listNodeTwo?.val || 0) + curry;
        curry = Math.floor(sum / 10);

        //increment sum list node
        current.next = new ListNode(sum % 10);
        current = current.next;

        listNodeOne = listNodeOne?.next || null;
        listNodeTwo = listNodeTwo?.next || null;

    }

    return sumList.next!;

}


const setupNodes = (numArr: number[]): ListNode => {
    const dummyHead = new ListNode(0);
    let tail = dummyHead;

    numArr.forEach(elem => {
        tail.next = new ListNode(elem);
        tail = tail.next;
    });

    return dummyHead.next!;
}

const logList = (list: ListNode | null) => {
    const listLog = [];

    while (list) {
        listLog.push(list.val);
        list = list.next;
    }

    console.log(listLog.join(" --> "));
    return;
}


logList(addTwoNumbers(testNumOne,testNumTwo));