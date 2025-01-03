#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <pem_file>"
    exit 1
fi

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ ! -f "$SCRIPT_DIR/local/$1" ]; then
    echo "Error: File $1 not found"
    exit 1
fi

BASE64_KEY=$(cat "$SCRIPT_DIR/local/$1" | base64 | tr -d '\n')
echo "$BASE64_KEY"