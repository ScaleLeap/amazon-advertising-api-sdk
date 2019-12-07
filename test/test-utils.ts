export class DateTimeUtils {
  static date = new Date()

  static getCurrentISODate() {
    return this.date
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '')
  }
}

export class Ramdom {
  static getRandomTimeout(min = 1, max = 5): number {
    return Math.floor((Math.random() * (max - min) + min) * 1000)
  }
}
