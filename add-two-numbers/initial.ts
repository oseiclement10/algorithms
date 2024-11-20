// const testNumOne = [2, 4, 8];
// const testNumTwo = [5, 6, 7];

// const testNumOne = [1, 2, 3];
// const testNumTwo = [2, 3, 4];

// const testNumOne = [5, 6, 5];
// const testNumTwo = [4, 3, 4];

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

function addTwoNumbers  (l1: number[], l2: number[]): ListNode {

    const totals: number[] = [];
    let carry = 0;

    let listNodeOne: ListNode | null = setupNodes(l1);
    let listNodeTwo: ListNode | null = setupNodes(l2);



    do {
        const sum = (listNodeOne?.val || 0) + (listNodeTwo?.val || 0) + carry;
        totals.push(sum % 10);
        carry = Math.floor(sum / 10);

        listNodeOne = listNodeOne?.next ? listNodeOne.next : null;
        listNodeTwo = listNodeTwo?.next ? listNodeTwo.next : null;

    } while (containsValue(listNodeOne?.val) || containsValue(listNodeTwo?.val));

    if(carry){
        totals.push(carry);
    }

    return setupNodes(totals);
}

const containsValue = (e: any) => {
    if (e || e == 0) {
        return true;
    }
    return false;
}


const setupNodes = (list: number[]):ListNode => {
    const head = new ListNode(list[0]);
    let tail = head;

    list.slice(1).forEach(elem => {
        tail.next = new ListNode(elem);
        tail = tail.next;
    });

    return head;
}

console.log(addTwoNumbers(testNumOne, testNumTwo));