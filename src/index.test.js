import idizr from 'index.js'

describe('default behavior, no key map', () => {
  test('should idiz default first level of data', () => {
    const input = {
      a: {},
      b: {},
      c: {}
    }
    const output = idizr(input)
    expect(output).toEqual({
      a: {id: '0'},
      b: {id: '0'},
      c: {id: '0'},
    })
  })
  test('should idiz with array', () => {
    const input = {
      a: {},
      b: [{}, {}, {}],
      c: {}
    }
    const output = idizr(input)
    expect(output).toEqual({
      a: {id: '0'},
      b: [{id: '0'}, {id: '1'}, {id: '2'}],
      c: {id: '0'},
    })
  })
})

test('should idiz complex data', () => {
  const input = {
    a: {
      b: {
        c: [
          {
            name: 'name 1'
          },
          {
            name: 'name 2'
          }
        ]
      }
    }
  }
  const output = idizr(input)
  expect(output).toEqual({
    a: {
      id: '0',
      b: {
        id: '0',
        c: [
          {
            id: '0',
            name: 'name 1'
          },
          {
            id: '1',
            name: 'name 2'
          }
        ]
      }
    }
  })
})