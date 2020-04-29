
export const buildStoryTitle = (category: string) => (storyName: string) => `${category}|${storyName}`;
export const componentTitle = buildStoryTitle('Components');
export const docsTitle = buildStoryTitle('Documentation');
