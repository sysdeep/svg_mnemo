#!/bin/bash

HOST="http://constructor.lan"
PROJECT_ID="67a09c4e461cf53b007341e5"



curl "${HOST}/project_json/${PROJECT_ID}" -o ./public/project.json