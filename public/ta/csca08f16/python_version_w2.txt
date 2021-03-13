import sys

# python version wrong by default
status = False
version = sys.version

print ("The latest version of python is 3.5.2")

# get the version by getting rid of the fluff returned by sys.version
version = version.split(" ")

print ("Your Python version is: " + version[0] + "\n")

# the the values of the version
parse_version = version[0].split(".")

# determine whether the python version is correct
if (parse_version[0] == "3"):
    if (int(parse_version[1]) >= 2 and int(parse_version[1]) < 6):
        status = True

# tells the user if the version of the python is correct
if (status):
    print ("As of Sept 14, 2016 your version of python is ok")
else:
    print ("Please update/change your python to the latest version")

# gives the user time to preocess the display
x = input("\nPress any key to exit")
