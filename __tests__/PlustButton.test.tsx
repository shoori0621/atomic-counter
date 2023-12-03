import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react-native';
import PlusButton from '../src/PlusButton';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect, jest} from '@jest/globals';

describe('PlusButton', () => {
  const count = 10;
  it('通常のPlusButtonを描画できる', () => {
    const component = renderer.create(
      <PlusButton count={count} setCounter={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });
  it(`ボタン押下でカウントが${count}から${count + 1}になる`, () => {
    const onPressEvent = jest.fn();
    render(<PlusButton count={count} setCounter={onPressEvent} />);
    fireEvent.press(screen.getByTestId('plus-button'));
    expect(onPressEvent).toBeCalled();
    expect(onPressEvent.mock.calls[0][0]).toBe(count + 1);
  });
});
