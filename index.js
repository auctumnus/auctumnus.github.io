console.log('loaded external script!')
const g = parentElement => {
  let width = parentElement.clientWidth
  let height = parentElement.clientHeight

  let scene = new THREE.Scene()
  let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  parentElement.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry()
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  var cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  var spotLight = new THREE.SpotLight( 0xffffff )
  spotLight.position.set( 100, 1000, 100 )

  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 1024
  spotLight.shadow.mapSize.height = 1024

  spotLight.shadow.camera.near = 500
  spotLight.shadow.camera.far = 4000
  spotLight.shadow.camera.fov = 30

  scene.add( spotLight );

  camera.position.z = 5;

  let animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}