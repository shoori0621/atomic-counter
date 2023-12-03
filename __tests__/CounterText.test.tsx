import React from 'react';
import renderer from 'react-test-renderer';
import CounterText from '../src/CounterText';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect} from '@jest/globals';

describe('CounterText', () => {
  it('通常のcounterTextを描画できる', () => {
    const component = renderer.create(<CounterText count={0} />);
    expect(component).toMatchSnapshot();
  });
  it('カウントが10以上のときのテキストが表示されているCounterTextを描画できる', () => {
    const component = renderer.create(<CounterText count={10} />);
    expect(component).toMatchSnapshot();
  });
});
