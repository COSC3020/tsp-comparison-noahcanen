
{
    function tsp_hk(distance_matrix) {
        if (distance_matrix.length <= 1) return 0
        min_val = Infinity
        cities = []
        for (var i = 0; i < distance_matrix.length; i++) {cities.push(i)}
        for (var i = 0; i < distance_matrix.length; i++) {
            min_val = Math.min(min_val, tspPath(distance_matrix, i,cities,[]))
        }
        return min_val
    }
    function tspPath(graph, start, cities,memory){
        place = JSON.stringify(cities) + start
        if(memory[place] != null){return memory[place]}
        if(cities.length == 2){
            return memory[place] = graph[cities[0]][cities[1]]
        }
        min_val = Infinity
        let newCities = cities.filter(item => item != start); 
        for (var i = 0; i < cities.length; i++) {
            if (cities[i] != start){
            min_val = Math.min(min_val, (tspPath(graph, cities[i],newCities,memory) + graph[start][cities[i]]))
            }
        }
        memory[place] = min_val
        return min_val
    }
}



{
    function tsp_ls(distance_matrix) {

        // There are N! Different ways for a list to be sorted, so if I want to go through all the different 
        // But because this is a local search, we cannot look at all the possibilities, so we will search through n^2 possibilities

        Search = distance_matrix.length ^ 2 
        cities = []
        for (var i = 0; i < distance_matrix.length; i++) {cities.push(i)}
        cities = RandomizedList(cities)
        distance = Infinity

        for (var i = 0; i < Search; i++){
            distance = Math.min(distance, distanceTour(cities,distance_matrix))

            cities = optSwap(cities, cities.length)
        }
            distance = Math.min(distance, distanceTour(cities,distance_matrix))
        return distance;

    }
    function factorial(n){
        num = 1
        for( x=0; x < n ; n--){
            num = n*num
        }
        return num
    }

    //Got this function from https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/ 
    function RandomizedList(array){
        for (let i = array.length - 1; i > 0; i--) { 
            

            const j = Math.floor(Math.random() * (i + 1));
                        

            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    function distanceTour(cities,distance_matrix){
        distance = 0
        for (let i = 0; i < cities.length - 1; i++) {
            distance = distance_matrix[cities[i]][cities[i+1]] + distance
        }
        return distance
    }
    function optSwap(route, size){
        // This is a randomized local search algorithm so I thought I should incorporate randomness
        // into choosing I and K. But controlled randomness to make sure that they actually do
        // something. My control parameter is 1 <= i < k < sum – 1 ; this make sure that I and K on
        // never the same thing and each swap does something
        i = Math.floor(Math.random() * (size - 1));
        k = Math.floor(Math.random() * (size - i)) + i;

        while(i < k){
            swap(route, i, k )
            i++
            k--
        }
        return route

    }
    function swap(x, a ,b )
    {
        let temp = x[a];
        x[a] = x[b];
        x[b] = temp;
    }
}

function generateRandomGraph(numNodes) {
    length = numNodes
    adjMatrix = Array.from(Array(length), ()=>Array(length).fill(0))
    for (let x = 0; x < length; x++) {
        for (let y = x + 1; y < length; y++) {
            ran = getRandomIntInclusive(1, 9)
            adjMatrix [x][y] = ran
            adjMatrix [y][x] = ran
        }
    }
  return adjMatrix;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let r = 0; r < 14; r++){
    const numNodes = r;
    const distance_matrix = generateRandomGraph(numNodes);

    for (let i = 0; i < distance_matrix.length; i++) {console.log(distance_matrix[i])}

    console.time('tsp_hk'+ r) 
    dis = tsp_hk(distance_matrix) 
    console.timeEnd('tsp_hk'+ r)
    console.log(dis, 'tsp_hk'+ r)

    console.time('tsp_ls'+ r) 
    dis = tsp_ls(distance_matrix) 
    console.timeEnd('tsp_ls'+ r)
    console.log(dis, 'tsp_ls'+ r)
}