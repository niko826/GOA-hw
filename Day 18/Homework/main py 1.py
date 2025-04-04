
nums = input("შეიყვანე რიცხვები: ")

for num in set(nums):
    print(num, "მეორდება", nums.count(num), "ჯერ")
