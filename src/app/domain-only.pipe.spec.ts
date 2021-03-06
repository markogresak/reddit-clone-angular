import { DomainOnlyPipe } from './domain-only.pipe';

describe('DomainOnlyPipe', () => {
  const pipe = new DomainOnlyPipe();

  it('returns only the domain of a given URL', () => {
    expect(pipe.transform('http://example.com')).toBe('example.com');
    expect(pipe.transform('https://example.com/a/b/')).toBe('example.com');
  });

  it('returns an empty string when the URL is invalid', () => {
    expect(pipe.transform('example.com')).toBe('');
    expect(pipe.transform('something')).toBe('');
  });
});
