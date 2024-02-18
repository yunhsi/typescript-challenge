import { describe, it, expect } from 'vitest';
import { divide } from './calculator';

describe('簡單計算器', () => {
  it('當輸入 8 和 2 時，除法函式應返回 4', () => {
    expect(divide(8, 2)).toBe(4);
  });

  it('當嘗試除以零時，應拋出 "Cannot divide by zero" 錯誤', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});