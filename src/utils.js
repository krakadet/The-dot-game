// @flow
export function isInteger(num: number) {
  return (num ^ 0) === num;
}

export function camelCaseToWord(s: string) {
  return s
    .split(/(?=[A-Z])/)
    .map(function (p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    })
    .join(" ");
}
