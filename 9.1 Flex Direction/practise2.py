import pandas as pa 
one=pa.DataFrame({'name':['rohit','riya'],'age':[1,2]},index=[12,23])
two=pa.DataFrame({'name':['rohit','riya'],'age':[1,2]},index=[12,23])
print(pa.concat([one,two]))