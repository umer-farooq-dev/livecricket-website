import time
import multiprocessing as mp

import numpy as np
import mkl

def work(n=5000, tries=5):
    """Compute the product of two random nxn matrices. Return the average timing of [tries] runs."""
    np.random.seed()
    timings = []
    for i in range(tries):
        start = time.time()
        a = np.random.rand(n, n)
        b = np.random.rand(n, n)
        res = np.sum(a.dot(b))
        stop = time.time()
        timings.append(stop - start)
    return np.mean(timings)


num_cores = mp.cpu_count()
print("# Cores: {}".format(num_cores))

# Print table header by hand
tab = "\t\t"
print("procs", end=tab)
for i in range(1, num_cores + 1):
    print("{}".format(i), end=tab)
print("")
print("threads")

# Try all combinations of threads/processes
for threads in range(1, num_cores + 1):
    mkl.set_num_threads(threads)
    print("set {} get {}".format(threads, mkl.get_max_threads()), end=tab)

    for procs in range(1, num_cores + 1):
        pool = mp.Pool()
        jobs = [() for _ in range(procs)]
        print("{:0.4f}".format(np.mean(pool.starmap(work, jobs))), end=tab)
    print("")