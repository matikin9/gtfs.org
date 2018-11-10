#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=e2290acea822c60cfc5b9b9c26ecf487b4827a9e\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/MobilityData/gtfs.org/tree/v2
