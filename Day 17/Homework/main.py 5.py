def negative_numbers(lst):
    return [x for x in lst if x < 0]
regular_list = [11, -5,  -1, -7, 8, 0]
result = negative_numbers(regular_list)
print(result)
