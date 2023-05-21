import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { WithQueryClient } from '../src/component/context/WithQueryClient';
import { handlers } from '../src/mock/handlers';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

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
  msw: {
    handlers: handlers,
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

export const decorators = [withGlobal, mswDecorator];
