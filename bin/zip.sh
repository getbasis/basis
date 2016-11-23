#!/usr/bin/env bash

npm run gulp release
cd release
npm run gulp zip
