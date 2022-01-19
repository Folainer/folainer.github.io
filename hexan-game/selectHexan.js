function selectHexan(event, world, camera) {
    // console.log(event.clientX);
    // world.hexan[(event.clientY - camera.y) / world.hexanWidth * world.width + (event.clientY - camera.y) / world.hexanWidth]
    const i = Math.floor((event.clientX + camera.x) / world.hexanWidth);
    const j = Math.floor((event.clientY + camera.y) / world.hexanHeight);
    const hexan = world.hexan[i * world.width + j];
    if (hexan.isVisable) {

    }
    world.selectedHexan[0] = i;
    world.selectedHexan[1] = j;
}