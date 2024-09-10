if [ $# -eq 0 ]; then
	echo "No argument supplied"
	exit 1
fi

for name in "$@"; do
	mkdir "ex$name"
done
