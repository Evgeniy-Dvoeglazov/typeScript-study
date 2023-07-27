interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 1234,
        height: 1234
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '44',
    size: {
        width: 10,
        height: 5
    },
}

rect2.color = 'black'

///
// Если объект пустой
const rect3 = {} as Rect;
const rect4 = <Rect>{} // старая запись

// =========================
// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1233',
    size: {
        width: 12,
        height: 3
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//=======================
// Взаимодействие интерфейса с классами

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// ==============
// Интерфейс для объекта с большим количеством динамических ключей
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solif black',
    marginTop: '2px',
    borderRadius: '4px'
}