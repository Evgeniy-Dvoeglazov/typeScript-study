const arrayOfNumbers: Array<number> = [1, 1, 3, 3, 5];
const arrayOfStrings: Array<string> = ['hello', 'evgeniy'];

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);