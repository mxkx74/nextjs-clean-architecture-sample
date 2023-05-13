import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { WithQueryClient } from '../src/component/context/WithQueryClient';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
    source: {
      excludeDecorators: true,
      type: 'dynamic',
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
};

const Wrapper = WithQueryClient();

const withGlobal = (StoryFn: Function) => {
  return (
    <div id="story-wrapper">
      <Wrapper>
        <StoryFn />
      </Wrapper>
    </div>
  );
};

export const decorators = [withGlobal];
