# Scheduling

- Goals of CPU scheduling
  - **Fairness**: each process receives fair share of CPU
  - **Throughput**: maximize jobs completed per hour
  - **Turnaround time**: minimize time between submission and completion
  - **Efficiency**: minimize context switches
  - **Response time**: minimize starvation, get response soon
- Scheduling Algorithms
  - **First Come First Serve (FCFS)**: FIFO. Average waiting time quite long
  - **Shortest Job First (SJB)**: Choose the process with the shortest processing time. Probably optimal average wait time
  - **Round Robin (RR)**: Circular. Each process is allowed to run for time quantum q before being pre-empted and put back on queue
  - **Priority Scheduling**: Highest priority job is selected from ready queue