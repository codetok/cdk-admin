import { HexToRgbPipe } from './hex-to-rgb.pipe';

describe('HexToRgbPipe', () => {
  it('create an instance', () => {
    const pipe = new HexToRgbPipe();
    expect(pipe).toBeTruthy();
  });
});
