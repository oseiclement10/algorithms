const buildTower = (nFloors: number) => {

    const floorBlocks: string[] = [];

    for (let i = 1; i <= nFloors; i++) {
        const stars = 2 * i - 1;
        const spaces = nFloors - i;

        const str = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
        floorBlocks.push(str);
    }

    return floorBlocks;
}


console.log(buildTower(20))