#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const docsOutputPath = 'storybook-web/docs/';

const template = `
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="{{title}}" />

{{content}}
`;

const createStorybookLinks = (content) => {
  const githubPathRegex = /.(?:\/\w+)*?\/(\w+).md/gm;

  const createPath = (match, offset) => `?path=/docs/documentation-${offset.toLowerCase()}--page`;

  return content.replace(githubPathRegex, createPath);
};

const buildFilesInfo = () => {
  const docsFolderFiles = fs.readdirSync('./docs');

  const files = [
    {
      fileName: 'README',
      title: 'Documentation|README',
    },
    {
      fileName: 'CONTRIBUTING',
      title: 'Documentation|Contributing',
    },
  ];

  docsFolderFiles.forEach((file) => {
    const fileName = file.replace('.md', '');

    files.push({
      fileName,
      filePath: 'docs/',
      title: `Documentation|${fileName}`,
    });
  });

  return files;
};

const createDocsFromMD = () => {
  buildFilesInfo()
    .forEach(({ fileName, filePath, title }) => {
      const path = `${filePath || ''}${fileName}.md`;
      const markdownFile = createStorybookLinks(fs.readFileSync(path, { encoding: 'utf8' }));

      const compile = Handlebars.compile(template, { noEscape: true });

      const output = compile({
        content: markdownFile,
        title,
      });

      if (!fs.existsSync(docsOutputPath)) {
        fs.mkdirSync(docsOutputPath, { recursive: true });
      }

      fs.writeFileSync(`${docsOutputPath}${fileName}.stories.mdx`, output);
    });
};


createDocsFromMD();
