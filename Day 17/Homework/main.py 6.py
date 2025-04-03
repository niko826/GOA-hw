def positive_numbers(lst):
    return [x for x in lst if x > 0]
regular_list = [11, -5,  -1, -7, 8,15,9,-12]
result = positive_numbers(regular_list)
print(result)
