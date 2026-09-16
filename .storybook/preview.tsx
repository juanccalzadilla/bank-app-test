import React from 'react';
import type { Preview } from '@storybook/react';
import { View } from 'react-native';
import { ThemeProvider } from '../src/theme/ThemeProvider';

import '../src/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ flex: 1, padding: 16 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
