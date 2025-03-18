
guess_number = 46
while True:
    p1 = int(input("guess the number from 1 to 50 : "))
    if p1 == guess_number:                               # თავიდან დამეზარა while  ფუნქციის გამოყებენა ვისაჩკავებ მეთქი მაგრამ ნამდვილი პროგრამისტისათვის                                               
     print("correct congrats you win :)")                #ეს დაუშვებელია ამიტომაც ხარისხიანდა გავაკეთე და დავინახე რომ თურმე ერთი გასროლით ორი კურდღელი
     break                                               # მოვკალი :)  P.S არ მოიტყუოთ და შედეგს მიიღებთ უკეთეს ვიდრე ელოდებოდით :)  
    else:                                                  
      print("Wrong better luck next time :)")