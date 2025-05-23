import os

def rename_folders_and_files():
    for item in os.listdir('.'):
        if os.path.isdir(item):
            # Rename the folder
            new_folder_name = item.replace(' ', '_')
            os.rename(item, new_folder_name)
            print(f"Renamed folder: '{item}' to '{new_folder_name}'")

            # Rename files inside the folder
            files_in_folder = sorted([f for f in os.listdir(new_folder_name) if os.path.isfile(os.path.join(new_folder_name, f))])
            for index, filename in enumerate(files_in_folder):
                name, ext = os.path.splitext(filename)
                new_filename = f"{index + 1}{ext}"
                old_path = os.path.join(new_folder_name, filename)
                new_path = os.path.join(new_folder_name, new_filename)
                os.rename(old_path, new_path)
                print(f"  Renamed file: '{filename}' to '{new_filename}' in '{new_folder_name}'")

if __name__ == "__main__":
    rename_folders_and_files()
    print("\nRenaming process completed.")