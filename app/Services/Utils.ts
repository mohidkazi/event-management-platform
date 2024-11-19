export default class Utils {
  public static random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static uniqueId(): string {
    return String(`${Date.now()}${Utils.random(111, 999)}`);
  }
}
