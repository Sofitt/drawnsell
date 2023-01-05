export const menu = [
  {
    icon: 'download.svg',
    name: 'Скачать изображение',
    funcName: 'downloadImg'
  },
  {
    icon: 'color.svg',
    name: 'Сменить цвет',
    funcName: 'changeColor',
    currentColor: { color: 'blue', name: 'Синий' },
    fill: [
      { color: 'green', name: 'Зеленый' },
      { color: 'red', name: 'Красный' },
      { color: 'blue', name: 'Синий' }
    ]
  },
  {
    icon: 'size.svg',
    name: 'Сменить размер',
    funcName: 'changeSize',
    currentSize: 5,
    fill: [5, 10, 15]
  },
  {
    icon: 'pen.svg',
    name: 'Карандаш',
    funcName: 'modeSetter',
    arg: 'pen',
    isOn: false,
    fill: [false, true]
  },
  {
    icon: 'erase.svg',
    name: 'Резинка',
    funcName: 'modeSetter',
    arg: 'erase',
    isOn: false,
    fill: [false, true]
  },
  {
    icon: 'rays.svg',
    name: 'Лучи',
    funcName: 'modeSetter',
    arg: 'rays',
    isOn: false,
    fill: [false, true]
  }
]
