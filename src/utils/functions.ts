export const randomSelectFromArray = (arr: Array<any>) => {
    return arr[Math.floor(Math.random() * arr.length)]
}