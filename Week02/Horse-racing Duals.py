import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
a=[];
n = int(input());
for i in range(n):
    pi = int(input())
    a.append(pi);
a.sort();
answer=abs(a[1]-a[0])
for q in range(len(a)-2):
        if abs(a[q+1]-a[q+2])<answer:
            answer=abs(a[q+1]-a[q+2]);
# Write an answer using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)
print(answer);
