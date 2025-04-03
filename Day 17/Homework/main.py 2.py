def even (lst):
   return [x for x in lst if x % 2 == 0] #x for x in lst means "take each element x from lst". (ეს ჩემთვის არის)

regular_list = [1,2,3,4,5]
result = even(regular_list)
print(result)