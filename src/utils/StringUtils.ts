export class StringUtils {
  public static toUpperCamelCase(input: string): string {
    const camelCase = this.toCamelCase(input.toLowerCase())
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
  }

  public static toCamelCase(input: string): string {
    return input.replace(/[-_](.)/g, (_, group1) => group1.toUpperCase())
  }
}
