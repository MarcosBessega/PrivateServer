$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,600);
	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x000000 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	var light = THREE.AmbientLight( 0xFFFFFF );
	
	var cubeGeometry = new THREE.BoxGeometry(20,20,20);
	var cubeMaterial = new THREE.MeshBasicMaterial( {color:0xFF0000} );
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = 2;
	cube.position.y = 5;
	cube.position.z = 0;
	scene.add(cube);
	camera.position.x = 50;
	camera.position.y = 40;
	camera.position.z = 050;
	camera.lookAt(scene.position);
	var wrapper = document.getElementById('three-container');
	wrapper.appendChild(renderer.domElement);
	// scene.add(light);
	function render(){
		cube.rotation.y += 0.01;
		renderer.render(scene,camera);
		requestAnimationFrame(render);
	}
	render();
});