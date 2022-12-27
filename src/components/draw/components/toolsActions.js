const smallActions = {
  1: {
    name: 'jopajopajopa jopajopa',
    arg: 'green',
    type: 'emit',
    func: (e) => {
      console.debug('1', e)
    }
  }
}
const bigActions = [
  {
    name: 'test',
    icon: '2',
    type: '',
    func: (arg) => {
      console.debug('2', arg)
    },
    menu: [
      smallActions[1]
    ]
  }
]
export default bigActions
