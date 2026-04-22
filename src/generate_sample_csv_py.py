import csv
import os
import sys

OUTPUT_DIR = '/tmp/'
OUTPUT_FILE = 'sample_data.csv'

sample_data = [
    {'Name': 'John Doe', 'Age': 28, 'City': 'New York'},
    {'Name': 'Jane Smith', 'Age': 34, 'City': 'Los Angeles'},
    {'Name': 'Emily Johnson', 'Age': 22, 'City': 'Chicago'},
    {'Name': 'Michael Brown', 'Age': 45, 'City': 'Houston'},
    {'Name': 'Jessica Davis', 'Age': 30, 'City': 'Phoenix'}
]

header = sample_data[0].keys()

try:
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    with open(os.path.join(OUTPUT_DIR, OUTPUT_FILE), mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=header)
        writer.writeheader()
        writer.writerows(sample_data)
    print(f'Successfully wrote sample data to {os.path.join(OUTPUT_DIR, OUTPUT_FILE)}')
except Exception as e:
    print(f'An error occurred: {e}', file=sys.stderr)
    sys.exit(1)

if __name__ == '__main__':
    pass