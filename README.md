# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.


# code


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
  const r =14
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


# experiments results

tsp_hk0: 0.158203125 ms


tsp_hk0: 0.347ms


tsp_hk0: 0 


tsp_ls0: 0.40185546875 ms


tsp_ls0: 0.566ms


tsp_ls0: 0 


(1) [0]


tsp_hk1: 0.031982421875 ms


tsp_hk1: 0.237ms


tsp_hk1: 0 


tsp_ls1: 0.0869140625 ms


tsp_ls1: 0.219ms


tsp_ls1: 0 


(2) [0, 7]


(2) [7, 0]


tsp_hk2: 0.3349609375 ms


tsp_hk2: 0.544ms


tsp_hk2: 7 


tsp_ls2: 0.06298828125 ms


tsp_ls2: 0.212ms


tsp_ls2: 7 


(3) [0, 2, 9]


(3) [2, 0, 6]


(3) [9, 6, 0]


tsp_hk3: 0.18603515625 ms


tsp_hk3: 0.283ms


tsp_hk3: 8 


tsp_ls3: 0.10693359375 ms


tsp_ls3: 0.187ms


tsp_ls3: 8 


(4) [0, 1, 2, 3]


(4) [1, 0, 7, 9]


(4) [2, 7, 0, 4]


(4) [3, 9, 4, 0]


tsp_hk4: 0.279052734375 ms


tsp_hk4: 0.441ms


tsp_hk4: 7 


tsp_ls4: 0.260009765625 ms


tsp_ls4: 0.414ms


tsp_ls4: 7 


(5) [0, 4, 2, 4, 9]


(5) [4, 0, 6, 8, 1]


(5) [2, 6, 0, 3, 9]


(5) [4, 8, 3, 0, 4]


(5) [9, 1, 9, 4, 0]


tsp_hk5: 0.9658203125 ms


tsp_hk5: 1.099ms


tsp_hk5: 10 


tsp_ls5: 0.075927734375 ms


tsp_ls5: 0.201ms


tsp_ls5: 25 


(6) [0, 9, 4, 6, 9, 1]


(6) [9, 0, 3, 3, 9, 5]


(6) [4, 3, 0, 8, 9, 1]


(6) [6, 3, 8, 0, 5, 6]


(6) [9, 9, 9, 5, 0, 2]


(6) [1, 5, 1, 6, 2, 0]


tsp_hk6: 1.4990234375 ms


tsp_hk6: 1.604ms


tsp_hk6: 13 


tsp_ls6: 0.06103515625 ms


tsp_ls6: 0.184ms


tsp_ls6: 24 


(7) [0, 8, 2, 4, 2, 4, 8]


(7) [8, 0, 8, 3, 6, 4, 4]


(7) [2, 8, 0, 4, 6, 4, 6]


(7) [4, 3, 4, 0, 9, 2, 8]


(7) [2, 6, 6, 9, 0, 6, 2]


(7) [4, 4, 4, 2, 6, 0, 2]


(7) [8, 4, 6, 8, 2, 2, 0]


tsp_hk7: 13.545166015625 ms


tsp_hk7: 13.784ms


tsp_hk7: 13 


tsp_ls7: 0.052001953125 ms


tsp_ls7: 0.184ms


tsp_ls7: 23 


(8) [0, 4, 8, 4, 9, 9, 2, 6]


(8) [4, 0, 2, 7, 6, 9, 1, 3]


(8) [8, 2, 0, 6, 4, 2, 9, 8]


(8) [4, 7, 6, 0, 2, 5, 9, 8]


(8) [9, 6, 4, 2, 0, 9, 3, 6]


(8) [9, 9, 2, 5, 9, 0, 3, 3]


(8) [2, 1, 9, 9, 3, 3, 0, 7]


(8) [6, 3, 8, 8, 6, 3, 7, 0]


tsp_hk8: 42.10400390625 ms


tsp_hk8: 42.27ms


tsp_hk8: 16 


tsp_ls8: 0.04296875 ms


tsp_ls8: 0.172ms


tsp_ls8: 40 


(9) [0, 1, 7, 7, 8, 4, 7, 1, 5]


(9) [1, 0, 1, 6, 8, 1, 9, 8, 7]


(9) [7, 1, 0, 6, 9, 2, 7, 3, 8]


(9) [7, 6, 6, 0, 1, 5, 9, 2, 5]


(9) [8, 8, 9, 1, 0, 3, 2, 6, 9]


(9) [4, 1, 2, 5, 3, 0, 4, 1, 5]


(9) [7, 9, 7, 9, 2, 4, 0, 5, 7]


(9) [1, 8, 3, 2, 6, 1, 5, 0, 4]


(9) [5, 7, 8, 5, 9, 5, 7, 4, 0]


tsp_hk9: 353.261962890625 ms


tsp_hk9: 353.769ms


tsp_hk9: 15 


tsp_ls9: 0.264892578125 ms


tsp_ls9: 0.367ms


tsp_ls9: 43 


(10) [0, 1, 6, 9, 3, 7, 9, 2, 7, 6]


(10) [1, 0, 2, 4, 1, 3, 2, 5, 5, 5]


(10) [6, 2, 0, 3, 1, 8, 5, 7, 2, 7]


(10) [9, 4, 3, 0, 7, 6, 7, 9, 5, 6]


(10) [3, 1, 1, 7, 0, 4, 1, 8, 5, 8]


(10) [7, 3, 8, 6, 4, 0, 7, 6, 4, 3]


(10) [9, 2, 5, 7, 1, 7, 0, 3, 7, 9]


(10) [2, 5, 7, 9, 8, 6, 3, 0, 6, 8]


(10) [7, 5, 2, 5, 5, 4, 7, 6, 0, 6]


(10) [6, 5, 7, 6, 8, 3, 9, 8, 6, 0]


tsp_hk10: 2529.13720703125 ms


tsp_hk10: 2.529s


tsp_hk10: 21 


tsp_ls10: 0.02587890625 ms


tsp_ls10: 0.076ms


tsp_ls10: 41 


(11) [0, 2, 1, 3, 7, 2, 1, 1, 1, 7, 3]


(11) [2, 0, 2, 7, 7, 9, 4, 1, 9, 1, 7]


(11) [1, 2, 0, 5, 7, 3, 7, 9, 6, 1, 3]


(11) [3, 7, 5, 0, 5, 9, 7, 8, 7, 8, 8]


(11) [7, 7, 7, 5, 0, 2, 8, 7, 2, 8, 8]


(11) [2, 9, 3, 9, 2, 0, 7, 6, 3, 6, 8]


(11) [1, 4, 7, 7, 8, 7, 0, 9, 7, 4, 4]


(11) [1, 1, 9, 8, 7, 6, 9, 0, 5, 7, 9]


(11) [1, 9, 6, 7, 2, 3, 7, 5, 0, 4, 1]


(11) [7, 1, 1, 8, 8, 6, 4, 7, 4, 0, 7]


(11) [3, 7, 3, 8, 8, 8, 4, 9, 1, 7, 0]


tsp_hk11: 21647.673095703125 ms


tsp_hk11: 21.648s


tsp_hk11: 19 


tsp_ls11: 0.02099609375 ms


tsp_ls11: 0.07ms


tsp_ls11: 49


(12) [0, 1, 1, 2, 4, 7, 5, 1, 2, 8, 5, 1]


(12) [1, 0, 3, 9, 4, 6, 5, 4, 2, 2, 2, 3]


(12) [1, 3, 0, 5, 7, 2, 9, 3, 8, 9, 2, 3]


(12) [2, 9, 5, 0, 5, 4, 8, 9, 2, 1, 2, 1]


(12) [4, 4, 7, 5, 0, 2, 7, 4, 1, 3, 5, 2]


(12) [7, 6, 2, 4, 2, 0, 7, 3, 1, 4, 4, 2]


(12) [5, 5, 9, 8, 7, 7, 0, 3, 7, 2, 4, 8]


(12) [1, 4, 3, 9, 4, 3, 3, 0, 1, 3, 1, 7]


(12) [2, 2, 8, 2, 1, 1, 7, 1, 0, 6, 7, 6]


(12) [8, 2, 9, 1, 3, 4, 2, 3, 6, 0, 6, 9]


(12) [5, 2, 2, 2, 5, 4, 4, 1, 7, 6, 0, 1]


(12) [1, 3, 3, 1, 2, 2, 8, 7, 6, 9, 1, 0]


tsp_hk12: 255077.09692382812 ms


tsp_hk12: 4:15.090 (m:ss.mmm)


tsp_hk12: 14 


tsp_ls12: 0.029052734375 ms


tsp_ls12: 0.073ms


tsp_ls12: 28 


(13) [0, 5, 5, 8, 7, 4, 8, 2, 9, 3, 2, 7, 1]


(13) [5, 0, 9, 1, 3, 5, 8, 8, 8, 3, 7, 7, 8]


(13) [5, 9, 0, 6, 3, 5, 6, 4, 6, 2, 9, 5, 6]


(13) [8, 1, 6, 0, 1, 3, 5, 2, 1, 9, 8, 9, 3]


(13) [7, 3, 3, 1, 0, 6, 8, 8, 1, 1, 6, 2, 4]


(13) [4, 5, 5, 3, 6, 0, 5, 7, 6, 4, 2, 5, 3]


(13) [8, 8, 6, 5, 8, 5, 0, 1, 5, 3, 3, 5, 6]


(13) [2, 8, 4, 2, 8, 7, 1, 0, 7, 9, 5, 1, 1]


(13) [9, 8, 6, 1, 1, 6, 5, 7, 0, 8, 9, 2, 4]


(13) [3, 3, 2, 9, 1, 4, 3, 9, 8, 0, 7, 6, 8]


(13) [2, 7, 9, 8, 6, 2, 3, 5, 9, 7, 0, 8, 4]


(13) [7, 7, 5, 9, 2, 5, 5, 1, 2, 6, 8, 0, 2]


(13) [1, 8, 6, 3, 4, 3, 6, 1, 4, 8, 4, 2, 0]


tsp_hk13: 3353065.7998046875 ms


tsp_hk13: 55:53.034 (m:ss.mmm)


tsp_hk13: 22 


tsp_ls13: 0.037109375 ms


tsp_ls13: 0.1ms


tsp_ls13: 43 


#
