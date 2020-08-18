import { Theme, checkTheme } from '..';

const getSizes = (theme: Theme) => checkTheme(theme).sizes;

export const getNoneSize = (theme: Theme) => getSizes(theme).none;
export const getMicroSize = (theme: Theme) => getSizes(theme).micro;
export const getTinySize = (theme: Theme) => getSizes(theme).tiny;
export const getSmallSize = (theme: Theme) => getSizes(theme).small;
export const getStandardSize = (theme: Theme) => getSizes(theme).standard;
export const getSemiSize = (theme: Theme) => getSizes(theme).semi;
export const getSemixSize = (theme: Theme) => getSizes(theme).semix;
export const getMediumSize = (theme: Theme) => getSizes(theme).medium;
export const getMediumxSize = (theme: Theme) => getSizes(theme).mediumx;
export const getLargeSize = (theme: Theme) => getSizes(theme).large;
export const getLargexSize = (theme: Theme) => getSizes(theme).largex;
export const getLargexxSize = (theme: Theme) => getSizes(theme).largexx;
export const getLargexxxSize = (theme: Theme) => getSizes(theme).largexxx;
export const getHugeSize = (theme: Theme) => getSizes(theme).huge;
export const getHugexSize = (theme: Theme) => getSizes(theme).hugex;
export const getHugexxSize = (theme: Theme) => getSizes(theme).hugexx;
export const getHugexxxSize = (theme: Theme) => getSizes(theme).hugexxx;
export const getVeryhugeSize = (theme: Theme) => getSizes(theme).veryhuge;
