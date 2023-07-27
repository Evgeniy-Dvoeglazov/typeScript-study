const isFetching: boolean = true;
const isFLoading: boolean = true;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const numberArray: number[] = [1, 2, 3, 5];
const numberArray2: Array<number> = [1, 2, 3, 5];
const words: string[] = ['Hello', 'TypeScript'];
const words2: Array<string> = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['Evgeniy', 89999999999];

// Any
let variable: any = 42
// ...
variable = 'New String'

// =====
function sayMyName(name: string): void {  // ничего не возвращает
    console.log(name);
}

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// Type - создаем свой тип
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined