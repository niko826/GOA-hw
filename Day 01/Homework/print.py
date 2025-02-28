def greet_user(name):
    print("welcome to the python, " + name + "!")
greet_user("nika")

age = int(input("enter your age "))
if age >= 18 and age <= 50:
    print("you are adult")
elif age >=51 and age <=100:
    print("you are elder")
elif age == 13 or age == 14 or age == 15:
    print("you are teen")
else:
    print("YOU ARE TOO YONGU")