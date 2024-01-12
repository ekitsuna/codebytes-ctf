import string
import random as rand

#print(rand.getrandbits(14000))
print(''.join(chr(rand.randrange(65,90)) for i in range(200000)))