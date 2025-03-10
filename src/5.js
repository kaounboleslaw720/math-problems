import random

def get_random_nodejs_code():
    # Generate a random number between 1 and 5
    num = random.randint(1, 5)

    if num == 1:
        return "const a = Math.floor(Math.random() * 10);"
    elif num == 2:
        return "const b = Math.ceil(Math.random() * 10);"
    elif num == 3:
        return "const c = Math.round(Math.random() * 10);"
    elif num == 4:
        return "const d = Math.sqrt(Math.random() * 100);"
    else:
        return "const e = Math.pow(Math.random() * 10, 2);"
