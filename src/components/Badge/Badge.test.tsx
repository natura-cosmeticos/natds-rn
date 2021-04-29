import React from 'react';

import { Badge, BadgeProps } from './Badge';
import { renderWithTheme } from '../../../test/testHelpers';

const renderBadge = (props?: Partial<BadgeProps>) => (
  renderWithTheme(<Badge type="dot" {...props} />)
);

describe('Badge component', () => {
  it('should render badge with default props', () => {
    const { getByTestId } = renderBadge();

    const badgeComponent = getByTestId('badge');

    expect(badgeComponent.props).toHaveProperty('color', 'alert');
  });

  describe('Types', () => {
    it('should render badge component dot', () => {
      const { toJSON } = renderBadge({ type: 'dot' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render badge component standard', () => {
      const { toJSON } = renderBadge({ type: 'standard' });

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Colors', () => {
    it('should render badge component alert', () => {
      const { toJSON } = renderBadge({ color: 'alert' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render badge component primary', () => {
      const { toJSON } = renderBadge({ color: 'primary' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render badge component secondary', () => {
      const { toJSON } = renderBadge({ color: 'secondary' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render badge component success', () => {
      const { toJSON } = renderBadge({ color: 'success' });

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Content', () => {
    it('should render badge component with content', () => {
      const { toJSON } = renderBadge({ content: 9, type: 'standard' });

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Limit', () => {
    it('should render badge component with limit 9', () => {
      const { getByTestId } = renderBadge({
        content: 10,
        limit: 9,
        type: 'standard',
      });

      const badgeComponent = getByTestId('badge');

      expect(badgeComponent).toHaveTextContent('9+');
    });

    it('should render badge component with limit 99', () => {
      const { getByTestId } = renderBadge({
        content: 100,
        limit: 99,
        type: 'standard',
      });

      const badgeComponent = getByTestId('badge');

      expect(badgeComponent).toHaveTextContent('99+');
    });

    it('should render badge component with unlimited limit', () => {
      const { getByTestId } = renderBadge({
        content: 10000,
        limit: 'unlimited',
        type: 'standard',
      });

      const badgeComponent = getByTestId('badge');

      expect(badgeComponent).toHaveTextContent('10000');
    });

    it('should render badge component with default limit', () => {
      const { getByTestId } = renderBadge({
        content: 10000,
        type: 'standard',
      });

      const badgeComponent = getByTestId('badge');

      expect(badgeComponent).toHaveTextContent('10000');
    });
  });
});
