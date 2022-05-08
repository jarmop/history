import data from './england-data'

interface Ruler {
  name: string
  start: number
  end: number
}

// interface Event {
//     name: string;
//     year: number;
// }

const mapYearToRuler = data.rulers.reduce((accumulator, currentValue) => {
  accumulator[currentValue.start] = currentValue
  return accumulator
}, [] as Ruler[])

const mapYearToEventName = data.events.reduce((accumulator, currentValue) => {
  accumulator[currentValue.year] =
    (accumulator[currentValue.year]
      ? accumulator[currentValue.year] + ', '
      : '') + currentValue.name
  return accumulator
}, [] as string[])

export const getRulerName = (year: number): string => {
  const ruler = mapYearToRuler[year]
  return ruler ? ruler.name : ''
}

export const getEventName = (year: number): string => {
  const eventName = mapYearToEventName[year]
  return eventName ? eventName : ''
}
