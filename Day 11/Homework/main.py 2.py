stored_Email = "example@gmail.com"
stored_Password = "654321abcd"
while True:
    email = (input("enter your email: "))
    password = (input("enter your password: "))
    if password == stored_Password and email == stored_Email:
        print("acess granted")
        break
    else:
        print("acess denied")