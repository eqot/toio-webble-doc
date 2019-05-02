---
id: example1
title: Example 1
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

<button id="discover">Discover</button>
<button id="forward">Forward</button>
<button id="backward">Backward</button>
	
<script src="https://cdn.jsdelivr.net/npm/toio-webble@0.1.2/dist/coreCube.min.js"></script>
<script>
  window.addEventListener("message", async function (event) {
    if (event.data === 'discover') {
      const Cube = window.Cube;
      cube = await Cube.discover();
      console.log('connected');
    }
    if (event.data === 'forward') {
      cube.move([70, 70], 500);
    }
    if (event.data === 'backward') {
      cube.move([-70, -70], 500);
    }
  }, false);
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
</script>

<iframe src="https://codesandbox.io/embed/github/eqot/toio-webble-doc/tree/master/examples/simple?fontsize=14&module=%2Fsrc%2Findex.js" title="toio-webble-examples-simple" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
