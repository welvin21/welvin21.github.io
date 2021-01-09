#!/bin/bash

node updateConfig.js
git add -A
git commit -m "AUTO POST-MERGE HOOK: Update siteConfig"
git push --no-verify