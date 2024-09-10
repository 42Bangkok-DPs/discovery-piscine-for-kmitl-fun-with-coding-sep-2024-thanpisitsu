i=0
for name in "$@"; do
    echo "$name"
    i=$((i+1))
    if [ $i -ge 3 ]; then
        break
    fi
done

if [ $i -eq 0 ]; then
    echo "No arguments supplied"
fi
