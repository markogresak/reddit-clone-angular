import { FromNowPipe } from './from-now.pipe';

describe('FromNowPipe', () => {
  const pipe = new FromNowPipe();

  const oneMinute = 60 * 1000;
  const oneDay = 24 * 60 * oneMinute;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  it('displays "less than a minute ago" when date is just now', () => {
    const justNow = new Date(Date.now() - 10);
    expect(pipe.transform(justNow)).toBe('less than a minute ago');
  });

  it('displays "1 minute ago" when date is one minute ago', () => {
    const oneMinuteAgo = new Date(Date.now() - oneMinute);
    expect(pipe.transform(oneMinuteAgo)).toBe('1 minute ago');
  });

  it('displays "5 minutes ago" when date is 5 minutes ago', () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * oneMinute);
    expect(pipe.transform(fiveMinutesAgo)).toBe('5 minutes ago');
  });

  it('displays "1 day ago" when the date is one day in the past', () => {
    const oneDayAgo = new Date(Date.now() - oneDay);
    expect(pipe.transform(oneDayAgo)).toBe('1 day ago');
  });

  it('displays "5 days ago" when the date is 5 days in the past', () => {
    const fiveDaysAgo = new Date(Date.now() - 5 * oneDay);
    expect(pipe.transform(fiveDaysAgo)).toBe('5 days ago');
  });

  it('displays "about 1 month ago" when the date is one month in the past', () => {
    const oneMonthAgo = new Date(Date.now() - oneMonth);
    expect(pipe.transform(oneMonthAgo)).toBe('about 1 month ago');
  });

  it('displays "5 months ago" when the date is 5 months in the past', () => {
    const fiveMonthsAgo = new Date(Date.now() - 5 * oneMonth);
    expect(pipe.transform(fiveMonthsAgo)).toBe('5 months ago');
  });

  it('displays "about 1 year ago" when the date is one year in the past', () => {
    const oneYearAgo = new Date(Date.now() - oneYear);
    expect(pipe.transform(oneYearAgo)).toBe('about 1 year ago');
  });

  it('works with date as string', () => {
    const oneMinuteAgo = new Date(Date.now() - oneMinute);
    expect(pipe.transform(oneMinuteAgo.toISOString())).toBe('1 minute ago');
  });
});
