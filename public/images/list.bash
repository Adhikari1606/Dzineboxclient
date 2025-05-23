#!/bin/bash

for folder in ./public/images/*; do
  # Remove trailing slash from folder name
  folder_name="${folder%/}"

  # Count the number of files inside the folder
  file_count=$(find "$folder_name" -maxdepth 1 -type f | wc -l)

  echo "Folder: '$folder_name' - Number of files: $file_count"
done