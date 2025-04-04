Fruits = ["ვაშლი", "ბანანი", "მსხალი", "ატამი", "კივი"]

index = int(input("შეიყვანე ინდექსი, რომლის ელემენტიც უნდა წაიშალოს: "))

if 0 <= index < len(Fruits):
    Fruits.pop(index)
    print("განახლებული სია:", Fruits)
else:
    print("არასწორი ინდექსია!")