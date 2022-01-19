import { Elevation } from '@naturacosmeticos/natds-themes/react-native'
import theme from '../theme/mock-theme.json'
import * as selectors from './effects'

const scenarios = [
  {
    expectedResult: {
      elevation: theme.elevation.tiny.elevation,
      shadowColor: theme.elevation.tiny.shadowColor,
      shadowOffset: {
        height: theme.elevation.tiny.shadowOffsetHeight,
        width: theme.elevation.tiny.shadowOffsetWidth
      },
      shadowOpacity: theme.elevation.tiny.shadowOpacity,
      shadowRadius: theme.elevation.tiny.shadowRadius
    },
    name: 'getShadowBySize',
    params: 'tiny' as keyof Elevation,
    selector: selectors.getShadowBySize,
    title: 'shadow'
  }
]

describe('Effects selectors', () => {
  scenarios.forEach((scenario) => (
    describe(`${scenario.name}`, () => {
      (
        it(`should return the ${scenario.title} effect`, () => {
          const result = scenario.selector(theme, scenario.params)

          expect(result).toEqual(scenario.expectedResult)
        })
      )
    })
  ))
})
