console.log('loaded external script!')
document.getElementById('notify_container').innerHTML = "this is a test"
const g = parentElement => {
  // get container width and height
  let width = parentElement.clientWidth
  let height = parentElement.clientHeight

  // set up scene and camera
  let scene = new THREE.Scene()
  let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

  scene.background = new THREE.Color(window.getComputedStyle(parentElement).getPropertyValue('background-color'))

  // set up renderer
  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  parentElement.appendChild(renderer.domElement)

  // make cube
  let geometry = new THREE.BoxGeometry()
  let material = new THREE.MeshStandardMaterial({ color: 0x90298e })
  let cube = new THREE.Mesh(geometry, material)
  cube.position.set(0,2,0)
  scene.add(cube)

  // make light
  let light = new THREE.DirectionalLight( 0xffffff, 0.5 );
  scene.add(light);

  // put the camera above the cube
  camera.position.set(0,5,0)
  camera.lookAt(0,0,0)

  // animation function
  let animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}