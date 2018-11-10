#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=22a130415a6d864c1cef03899aee7ec4f0fd48fb\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/MobilityData/gtfs.org/tree/v2
