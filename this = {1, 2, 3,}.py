b = {"a", "6", "b"}
a = {"9", "k", "n"}

c = a.union(b)
print(c)

v = a.intersection(b)
print(v)

k = a.difference(b)
print(k)

k = a.symmetric_difference(b)
print(k)
