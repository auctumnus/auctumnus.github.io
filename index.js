console.log('loaded external script!')
const g = parentElement => {
  let width = parentElement.clientWidth
  let height = parentElement.clientHeight

  let scene = new THREE.Scene()
  scene.background = THREE.Color(window.getComputedStyle(parentElement).getPropertyValue('background-color'))
  let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  parentElement.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry()
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  var cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5;

  let animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}