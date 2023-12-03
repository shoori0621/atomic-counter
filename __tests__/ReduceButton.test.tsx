import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react-native';
import ReduceButton from '../src/ReduceButton';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect, jest} from '@jest/globals';

describe('ReduceButton', () => {
  describe('countが0より大きい時', () => {
    const count = 10;
    it('通常のReduceButtonを描画できる', () => {
      const component = renderer.create(
        <ReduceButton count={count} setCounter={() => {}} />,
      );
      expect(component).toMatchSnapshot();
    });
    it(`ボタン押下でカウントが${count}から${count - 1}になる`, () => {
      const onPressEvent = jest.fn();
      render(<ReduceButton count={count} setCounter={onPressEvent} />);
      fireEvent.press(screen.getByTestId('reduce-button'));
      expect(onPressEvent).toBeCalled();
      expect(onPressEvent.mock.calls[0][0]).toBe(count - 1);
    });
  });
  describe('countが0の時', () => {
    const count = 0;
    it('グレーアウトされたReduceButtonを描画できる', () => {
      const component = renderer.create(
        <ReduceButton count={count} setCounter={() => {}} />,
      );
      expect(component).toMatchSnapshot();
    });
    it(`ボタン押下できない`, () => {
      const onPressEvent = jest.fn();
      render(<ReduceButton count={count} setCounter={onPressEvent} />);
      fireEvent.press(screen.getByTestId('reduce-button'));
      expect(onPressEvent).not.toBeCalled();
    });
  });
});
