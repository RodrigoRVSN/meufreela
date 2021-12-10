import formatPhone from '@App/core/helpers/formatPhone';

describe('formatPhone', () => {
  it('should format phone correctly', () => {
    expect(formatPhone('15997154489')).toBe('(15) 99715-4489');
  });
});
