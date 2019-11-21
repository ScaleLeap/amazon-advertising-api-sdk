export class DateTimeUtils {
  static date = new Date()

  static getCurrentISODate() {
    return this.date
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '')
  }
}
