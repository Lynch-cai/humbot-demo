import csv
import os
import sys
import argparse

DEFAULT_OUTPUT_DIR = '/tmp'
DEFAULT_OUTPUT_FILE = 'sample_data.csv'

sample_data = [
    {'Name': 'John Doe', 'Age': 28, 'City': 'New York'},
    {'Name': 'Jane Smith', 'Age': 34, 'City': 'Los Angeles'},
    {'Name': 'Emily Johnson', 'Age': 22, 'City': 'Chicago'},
    {'Name': 'Michael Brown', 'Age': 45, 'City': 'Houston'},
    {'Name': 'Jessica Davis', 'Age': 30, 'City': 'Phoenix'}
]


def write_sample_csv(output_dir=DEFAULT_OUTPUT_DIR, output_file=DEFAULT_OUTPUT_FILE):
    """Write the sample_data list of dicts to a CSV file.

    Returns the path to the written file on success.
    Raises an exception on failure.
    """
    if not sample_data:
        raise ValueError("No sample data available to write")

    fieldnames = list(sample_data[0].keys())

    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir, exist_ok=True)

    out_path = os.path.join(output_dir, output_file)

    with open(out_path, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(sample_data)

    return out_path


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description='Generate a sample CSV file.')
    parser.add_argument('--output-dir', '-d', default=DEFAULT_OUTPUT_DIR,
                        help='Directory to write the CSV file to (default: /tmp)')
    parser.add_argument('--output-file', '-f', default=DEFAULT_OUTPUT_FILE,
                        help='Filename for the CSV file (default: sample_data.csv)')
    return parser.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    try:
        out_path = write_sample_csv(args.output_dir, args.output_file)
        print(f'Successfully wrote sample data to {out_path}')
        return 0
    except Exception as e:
        print(f'An error occurred: {e}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main())
