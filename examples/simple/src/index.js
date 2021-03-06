import { CoreCube } from 'toio-webble'

document.querySelector('#discover').addEventListener('click', () => {
  CoreCube.discover().then(cube => {
    document.querySelector('#forward').addEventListener('click', () => {
      cube.move([70, 70], 500)
    })

    document.querySelector('#backward').addEventListener('click', () => {
      cube.move([-70, -70], 500)
    })
  })
})
