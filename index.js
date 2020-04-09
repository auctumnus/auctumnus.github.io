console.log('loaded external script!')
const g = parentElement => {
  let width = parentElement.width
  let height = parentElement.height

  let scene = new THREE.Scene()
  let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  parentElement.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();
}