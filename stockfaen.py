from random import choice

def initiate_dict():
    f = open("aapl.us.txt", 'r')
    lines = f.readlines()
    lines.pop(0)
    new_lines = []

    for line in lines:
        list = line.rstrip().split(',')
        new_lines.append(list)

    day_dict = dict()

    for line in new_lines:
        if (line[0] not in day_dict.keys()):
            day_dict[line[0]] = [line[1::]] #[1::] to get subArray without date
        else:
            day_dict[line[0]].append(line[1::])
    return day_dict

def get_min_max(ticks):
    min_open = float(ticks[0][1])
    max_open = float(ticks[0][1])

    for i in range(1, len(ticks)):
        value = float(ticks[i][1])
        if (value < min_open):
            min_open = value
        elif (value > max_open):
            max_open = value
    return (min_open, max_open)

def set_ranges(nr_of_range_values, min_max):
    range_values = []
    step = (min_max[1] - min_max[0])/6
    for i in range(1, nr_of_range_values):
        range_values.append(min_max[0] + step*i)
    return range_values

def get_score(open, range_values):
    for i in range(len(range_values)):
        if (open < range_values[i]):
            return i + 1
    return len(range_values) + 1

def run_simulation(ticks, range_values):
    for tick in range(len(ticks))[0::3]:  #Every third element
        print("At: " + ticks[tick][0][0:5] + " Stock score is: " + mock_columbs[get_score(float(ticks[tick][1]), range_values) - 1])


nr_of_range_values = 10
mock_columbs = ["#", "##", "###", "####", "#####", "######","#######","########","#########","##########"]

day_dict = initiate_dict()

random_day =  choice(list(day_dict.keys()))
print("Date: " + random_day)


ticks = day_dict[random_day]
min_max = get_min_max(ticks)

range_values = set_ranges(nr_of_range_values, min_max)

print(min_max)
print(range_values)

run_simulation(ticks, range_values)
