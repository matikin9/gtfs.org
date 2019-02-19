rm -rf repos
# GTFS Static
git clone https://github.com/google/transit.git repos/transit
mkdir -p src/pages/en/reference/static
PAGE=src/pages/en/reference/static/index.md
cp repos/transit/gtfs/spec/en/reference.md $PAGE
echo "---\npath: /reference/static/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE
sed -i '' -e 's%../../CHANGES.md%/reference/static/changes%g' $PAGE

PAGE=src/pages/en/reference/static/changes.md
cp repos/transit/gtfs/CHANGES.md $PAGE
echo "---\npath: /reference/static/changes/\nlang: en\n---\n$(cat $PAGE)" > $PAGE

# GTFS Realtime v2
mkdir -p src/pages/en/reference/realtime/v2
PAGE=src/pages/en/reference/realtime/v2/index.md
cp repos/transit/gtfs-realtime/spec/en/reference.md $PAGE
echo "---\npath: /reference/realtime/v2/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

PAGE=src/pages/en/reference/realtime/changes.md
cp repos/transit/gtfs-realtime/CHANGES.md $PAGE
echo "---\npath: /reference/realtime/changes/\nlang: en\n---\n$(cat $PAGE)" > $PAGE

mkdir -p src/pages/es/reference/realtime/v2
PAGE=src/pages/es/reference/realtime/v2/index.md
cp repos/transit/gtfs-realtime/spec/es/reference.md $PAGE
echo "---\npath: /es/reference/realtime/v2/\nlang: es\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

# GTFS Realtime v1
git -C repos/transit reset 33c329b0d07e72744de43319f839810a5df0b439 --hard
mkdir -p src/pages/en/reference/realtime/v1
PAGE=src/pages/en/reference/realtime/v1/index.md
cp repos/transit/gtfs-realtime/spec/en/reference.md $PAGE
echo "---\npath: /reference/realtime/v1/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

mkdir -p src/pages/es/reference/realtime/v1
PAGE=src/pages/es/reference/realtime/v1/index.md
cp repos/transit/gtfs-realtime/spec/es/reference.md $PAGE
echo "---\npath: /es/reference/realtime/v1/\nlang: es\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

# Best Practices
git clone https://github.com/MobilityData/gtfs-best-practices.git -b docsv2 --single-branch repos/best-practices
BEST_PRACTICES_FILES=(introduction faq publishing all-files agency stops routes trips stop_times calendar calendar_dates fare_attributes fare_rules shapes feed_info frequencies transfers loop-routes lasso-routes branches about)

mkdir -p src/pages/en/best-practices
PAGE=src/pages/en/best-practices/index.md
rm $PAGE
touch $PAGE
echo "---\npath: /best-practices/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE
for i in "${BEST_PRACTICES_FILES[@]}"
do
    cat repos/best-practices/en/$i.md >> $PAGE
done
# Remove existing lang tags
sed -i '' -e ':a' -e 'N' -e '$!ba' -e 's/---\nlang: en\n\n---/ /g' $PAGE
# Copy images
find repos/best-practices/en -name \*.svg -exec cp {} src/pages/en/best-practices \;

mkdir -p src/pages/es/best-practices
PAGE=src/pages/es/best-practices/index.md
rm $PAGE
touch $PAGE
echo "---\npath: /es/best-practices/\nlang: es\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE
for i in "${BEST_PRACTICES_FILES[@]}"
do
    cat repos/best-practices/es/$i.md >> $PAGE
done
# Remove existing lang tags
sed -i '' -e ':a' -e 'N' -e '$!ba' -e 's/---\nlang: es\n\n---/ /g' $PAGE
# Copy images
find repos/best-practices/es -name \*.svg -exec cp {} src/pages/es/best-practices \;
