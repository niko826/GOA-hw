numbers = []
for i in range(10):
    num = int(input(f"შეიყვანეთ {i+1}-ე რიცხვი: "))
    numbers.append(num)

for num in numbers:
    if num % 2 == 0:
        print(f"{num} - ლუწია")
    else:
        print(f"{num} - კენტია")