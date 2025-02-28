import turtle

# ეკრანის მომზადება
screen = turtle.Screen()
screen.bgcolor("white")
screen.title("Purple House with Red Roof")

t = turtle.Turtle()
t.speed(10)

# სახლი
t.penup()
t.goto(-100, -100)
t.pendown()
t.color("black", "#B833FF")
t.begin_fill()
for _ in range(4):
    t.forward(200)
    t.left(90)
t.end_fill()

# სახურავი
t.goto(-100, 100)
t.color("black", "red")
t.begin_fill()
t.goto(0, 180)
t.goto(100, 100)
t.goto(-100, 100)
t.end_fill()

# კარი
t.penup()
t.goto(-30, -100)
t.pendown()
t.color("black", "yellow")
t.begin_fill()
for _ in range(2):
    t.forward(60)
    t.left(90)
    t.forward(90)
    t.left(90)
t.end_fill()

# ფანჯრები
def draw_window(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color("black", "green")
    t.begin_fill()
    for _ in range(4):
        t.forward(40)
        t.left(90)
    t.end_fill()

draw_window(-70, 20)
draw_window(30, 20)

screen.exitonclick()
