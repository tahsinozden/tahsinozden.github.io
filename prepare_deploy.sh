#!/bin/bash

projectFolder=$1

if [[ $projectFolder == "" ]]; then
    echo "Provide a folder path!"
    exit 1
fi

find . -maxdepth 1 ! \( -name "*.sh" -o -name ".*" -o -name "*.md" \) -type f -exec rm -f {} +
cp $projectFolder/* . && cp index.html 404.html
