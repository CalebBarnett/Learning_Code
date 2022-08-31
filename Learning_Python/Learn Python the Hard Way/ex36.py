from sys import exit

#Start
#position
#    Submission Setup
#        Submission Attempt1
#        Submission Attempt2
#        Submission Attemptect

#Start Fight
def userPos():
    print("What position do you want to start in?")
    choice = input("> ")

    if choice == "pull guard":
        fuGuard()
    elif choice == "run":
        run("You can't fight them all")
        exit(0)
    else:
        print("Dude....do something!")
        userPos()

#Pull Guard
def fuGuard():
    print("Opponent is in your guard. What do you do?")
    choice = input("> ")

    if choice == "armbar" or choice == "triangle":
        reverse()
    elif choice == "breakdown":
        sub()
    else:
        print("This isn't Mortal Combat")
        exit(0)

#Submission Attempt
def sub():
    print("Welcome to submission time boi")
    print("He's weak. What do you do...Armbar or Triangle?")
    Attempt = False

    while True:
        choice = input("> ")

        if choice == "armbar" and not Attempt:
            print("He countered it")
            print("What's next?")
            Attempt = True
        elif choice == "armbar" and Attempt:
            finishHim()
        else:
            print("Price was wrong, BOB!")
            exit(0)

def reverse():
    print("Way to get reveresed!")
    exit(0)
def counter():
    print("You got countered")
    sub()
def run(why):
    print(why, "Good job!")
    exit(0)
def finishHim():
    print("You won!")
    exit(0)

userPos()

