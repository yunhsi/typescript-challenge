/**
 * 將兩個數字相除
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function divide(a: number, b: number): number {
    // 在此實現函式
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }
  
    return a / b
}

