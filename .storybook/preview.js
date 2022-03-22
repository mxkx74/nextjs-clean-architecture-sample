import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
    viewports: INITIAL_VIEWPORTS
  }
}

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

const withGlobal = (StoryFn: Function, context: StoryContext) => {

  return (
    <div id="story-wrapper">
      {/** css restコンポーネントなどを読み込む */}
      {/** <Style /> */ }
      <StoryFn />
    </div>
  );
};

export const decorators = [withGlobal];
