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


(14) [0, 8, 8, 1, 3, 8, 7, 1, 5, 3, 3, 1, 7, 8]


(14) [8, 0, 9, 2, 7, 6, 9, 8, 8, 8, 5, 3, 4, 8]


(14) [8, 9, 0, 7, 1, 8, 9, 1, 6, 8, 7, 1, 2, 5]


(14) [1, 2, 7, 0, 6, 6, 9, 6, 1, 8, 2, 9, 4, 4]


(14) [3, 7, 1, 6, 0, 8, 6, 6, 9, 3, 9, 5, 7, 8]


(14) [8, 6, 8, 6, 8, 0, 4, 8, 6, 5, 7, 7, 5, 5]


(14) [7, 9, 9, 9, 6, 4, 0, 3, 9, 7, 1, 5, 4, 6]


(14) [1, 8, 1, 6, 6, 8, 3, 0, 6, 1, 1, 7, 3, 9]


(14) [5, 8, 6, 1, 9, 6, 9, 6, 0, 4, 9, 4, 3, 6]


(14) [3, 8, 8, 8, 3, 5, 7, 1, 4, 0, 4, 5, 1, 5]


(14) [3, 5, 7, 2, 9, 7, 1, 1, 9, 4, 0, 5, 8, 3]


(14) [1, 3, 1, 9, 5, 7, 5, 7, 4, 5, 5, 0, 9, 3]


(14) [7, 4, 2, 4, 7, 5, 4, 3, 3, 1, 8, 9, 0, 9]


(14) [8, 8, 5, 4, 8, 5, 6, 9, 6, 5, 3, 3, 9, 0]


tsp_hk14: 113806980.52685547 ms


tsp_hk14: 31:36:46.393 (h:mm:ss.mmm)


 tsp_hk14: 25


tsp_ls14: 0.545166015625 ms


tsp_ls14: 0.616ms


tsp_ls14: 67 


Now I am just going to run a local search until I get a time of an hour 


I will slightly modify my code to improve the distance and git it to an hour.  Whenever a better distance is found, I will reset i back to zero.

Here is the modified for loop

    for (var i = 0; i < Search; i++){
        newd = distanceTour(cities,distance_matrix)
        if(distance > newd){
            i = 0
            distance = newd
        }

        cities = optSwap(cities, cities.length)
    }

The 10 distances and times it took to get those distances before tsp_l took an hour.


sp_ls5000: 2961281.7690429688 ms


tsp_ls5000: 49:21.293 (m:ss.mmm)


tsp_ls5000: 24191


tsp_ls5001: 4490836.216064453 ms


tsp_ls5001: 1:14:50.823 (h:mm:ss.mmm)


tsp_ls5001: 24148


tsp_ls5002: 3618936.6701660156 ms


tsp_ls5002: 1:00:18.935 (h:mm:ss.mmm)


tsp_ls5002: 24216


tsp_ls5003: 3161234.2109375 ms


tsp_ls5003: 52:41.235 (m:ss.mmm)


tsp_ls5003: 24178


tsp_ls5004: 3752692.2639160156 ms


tsp_ls5004: 1:02:32.632 (h:mm:ss.mmm)


tsp_ls5004: 24120


tsp_ls5005: 4596889.54296875 ms


tsp_ls5005: 1:16:36.729 (h:mm:ss.mmm)


tsp_ls5005: 24199


tsp_ls5006: 2847745.880859375 ms


tsp_ls5006: 47:27.708 (m:ss.mmm)


tsp_ls5006: 24019


tsp_ls5007: 3230255.8120117188 ms


tsp_ls5007: 53:50.228 (m:ss.mmm)


tsp_ls5007: 24222


tsp_ls5008: 3213661.3317871094 ms


tsp_ls5008: 53:33.657 (m:ss.mmm)


tsp_ls5008: 24216


tsp_ls5009: 2226904.7978515625 ms


tsp_ls5009: 37:06.894 (m:ss.mmm)


tsp_ls5009: 24165


tsp_ls5010: 2953646.031982422 ms


tsp_ls5010: 49:13.628 (m:ss.mmm)


tsp_ls5010: 24217


tsp_ls5011: 3765345.341064453 ms


tsp_ls5011: 1:02:45.334 (h:mm:ss.mmm)


tsp_ls5011: 24234



# graphs


![image](https://github.com/user-attachments/assets/b34022b1-babf-4a7d-969b-93771022c1ec)


![image](https://github.com/user-attachments/assets/c683e49c-7ac2-4bee-866f-bfc2df6229d6)


![image](https://github.com/user-attachments/assets/f3ae1d1e-eace-40a2-8fc7-73f74d458695)


![image](https://github.com/user-attachments/assets/927c69d7-f3f6-42a1-b251-4d37473f17f1)


![image](https://github.com/user-attachments/assets/840dd2e8-fd6c-42dd-a9f2-cb0c1cffc226)


![image](https://github.com/user-attachments/assets/442ae0df-f899-4401-8366-c0eecb390f8a)


![image](https://github.com/user-attachments/assets/7bedf732-1b50-48c1-8552-aa92fd9d6ca4)


# explanation

1st, I looked up how to time a function, then I created a program to make random weighted graphs. This program to make weighted graphs is partly made by me and partly by Google AI. Google AI made the random function for the random lengths. And an initial non-working version of the graph creation part. I put them together and got the graph creation part working. Then I put that and the two functions into a for loop and ran it on different-sized graphs from 0 nodes to 14. The 14th node took 31 hours, although this is bigger than an hour, it is also suspect because I had to move my computer several times, and each time I moved my laptop, I suspect that the program stopped. So I am not graphing it. 


I narrowed down the number of nodes that would cause my local search to run for an hour and decided it was around 5,000. I left it running overnight and woke up to find 12 values, some of which took over an hour and some of which took under an hour. Because of the modification I made, the time it takes to find the smallest distance changes wildly. But the overall time it takes is increasing; it is hard to show because it grows at n^2.





For this assignment, I used the resources of https://www.w3schools.com/jsref/met_console_timeend.asp, https://www.omnicalculator.com/conversion/ms-to-seconds-conversion, https://www.desmos.com/calculator, and Google AI

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

